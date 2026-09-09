# Birthday Surprise Page

## URL format

Both formats are supported:

- `https://yourdomain.com/name=ABC`
- `https://yourdomain.com/?name=ABC`

## Run locally

```bash
python -m venv venv
# Windows: venv\Scripts\activate
# Linux/macOS: source venv/bin/activate
pip install -r requirements.txt
```

Set the environment variables from `.env.example` in your hosting/server environment.

Then:

```bash
python app.py
```

Open `http://localhost:8000/name=ABC`.

## Email setup

For Gmail/Google Workspace SMTP, enable 2-Step Verification on the sender account and create a Google App Password. Put the App Password in `EMAIL_APP_PASSWORD`.

Do NOT put the App Password in `script.js`, `index.html`, or any client-side file.

For production, run Flask behind Nginx/Gunicorn and use HTTPS.
