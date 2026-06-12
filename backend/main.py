from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import urllib.request
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    company: str | None = None
    email: str
    message: str

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL", "ansh.mlops@gmail.com")

@app.post("/api/contact")
async def send_contact_email(form: ContactForm):
    try:
        if not RESEND_API_KEY:
            print("RESEND_API_KEY not set. Mocking email:")
            print(f"From: {form.name} ({form.email}), Company: {form.company}, Message: {form.message}")
            return {"message": "Email mocked (no API key set)"}

        payload = json.dumps({
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": [RECEIVER_EMAIL],
            "subject": f"New Portfolio Contact from {form.name}",
            "reply_to": form.email,
            "text": f"Name: {form.name}\nCompany: {form.company}\nEmail: {form.email}\n\nMessage:\n{form.message}"
        }).encode("utf-8")

        req = urllib.request.Request(
            "https://api.resend.com/emails",
            data=payload,
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            method="POST",
        )

        with urllib.request.urlopen(req, timeout=10) as res:
            response_data = json.loads(res.read().decode("utf-8"))
            print(f"Email sent successfully! Resend ID: {response_data.get('id')}")

        return {"message": "Email sent successfully"}
    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
