import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587

MAIL_USERNAME = os.getenv('MAIL_USERNAME')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
MAIL_FROM = os.getenv('MAIL_FROM_ADDRESS')
MAIL_FROM_NAME = os.getenv('MAIL_FROM_NAME', 'Admin')

def send_email(subject, body, to_emails):
    if not isinstance(to_emails, list):
        to_emails = [to_emails]

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = f"{MAIL_FROM_NAME} <{MAIL_FROM}>"
    msg['To'] = ', '.join(to_emails)
    msg.set_content(body)

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(MAIL_USERNAME, MAIL_PASSWORD)
            smtp.send_message(msg)
        return True
    except Exception as e:
        print(f"❌ Email send failed: {e}")
        return False
