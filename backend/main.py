from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    company: str | None = None
    email: str
    message: str

# Email configuration
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL", "ansh.mlops@gmail.com")

@app.post("/api/contact")
async def send_contact_email(form: ContactForm):
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME or "portfolio@example.com"
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = f"New Portfolio Contact from {form.name}"

        body = f"""
        Name: {form.name}
        Company: {form.company}
        Email: {form.email}
        
        Message:
        {form.message}
        """
        msg.attach(MIMEText(body, 'plain'))

        # If credentials are provided, send the email
        if SMTP_USERNAME and SMTP_PASSWORD:
            # Using SMTP_SSL on port 465 with a timeout to prevent hanging
            server = smtplib.SMTP_SSL(SMTP_SERVER, 465, timeout=10)
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            text = msg.as_string()
            server.sendmail(SMTP_USERNAME, RECEIVER_EMAIL, text)
            server.quit()
            print("Email sent successfully!")
        else:
            print("SMTP credentials not provided. Mocking email send:")
            print(body)

        return {"message": "Email sent successfully"}
    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
