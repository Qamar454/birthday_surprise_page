import os
import smtplib
from email.message import EmailMessage
from flask import Flask, jsonify, request, send_from_directory
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__, static_folder="static", static_url_path="/static")

# IMPORTANT:
# Never put your email password/app password in HTML or JavaScript.
# Set these as environment variables on your server.
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_APP_PASSWORD = os.getenv("EMAIL_APP_PASSWORD")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL")

@app.get("/")
def home():
    return send_from_directory(".", "index.html")

@app.post("/api/party")
def party():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    location = str(data.get("location", "")).strip()
    party_time = str(data.get("partyTime", "")).strip()

    if not name or not location or not party_time:
        return jsonify(message="Please fill in all required fields."), 400

    if not EMAIL_ADDRESS or not EMAIL_APP_PASSWORD or not RECIPIENT_EMAIL:
        return jsonify(message="Email service is not configured on the server."), 500

    msg = EmailMessage()
    msg["Subject"] = f"🎉 Birthday Party Details — {name}"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = RECIPIENT_EMAIL
    msg.set_content(
        f"Birthday Party Details\n\n"
        f"Birthday Person: {name}\n"
        f"Location: {location}\n"
        f"Date & Time: {party_time}\n"
    )

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as smtp:
            smtp.starttls()
            smtp.login(EMAIL_ADDRESS, EMAIL_APP_PASSWORD)
            smtp.send_message(msg)
        return jsonify(message="Party details sent successfully.")
    except Exception as exc:
        app.logger.exception("Email sending failed")
        return jsonify(message="Unable to send the details right now. Please try again."), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
