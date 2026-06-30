# EmailJS Booking Setup Guide

The booking form is now wired to send appointment requests to **abadiola4@gmail.com** via EmailJS.

---

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to https://www.emailjs.com
- Sign up (free tier: 200 emails/month)
- Verify your email

### 2. Add Gmail Service
In EmailJS dashboard:
- Go to **Email Services** → **Add Service**
- Select **Gmail**
- Follow the OAuth setup (authorize your Gmail account)
- Name it `gmail` (or note the Service ID)
- Save

### 3. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Set **To Email** field: `abadiola4@gmail.com`
- Copy this template:

```
Subject: New Booking Request from {{from_name}}

Customer Details:
- Name: {{from_name}}
- Phone: {{phone}}
- Email: {{from_email}}
- Service: {{service}}
- Preferred Date: {{date}}
- Preferred Time: {{time}}
- Address/Location: {{address}}

---
This is an automated message from the Genro Malabanan website.
```

- Save the template and note the **Template ID** (e.g., `template_abc123`)

### 4. Get Your Public Key
- Go to **Account** → **API Keys**
- Copy your **Public Key**

### 5. Create .env.local
In the project root, create a file named `.env.local`:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=gmail
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholders with your actual values.

### 6. Test Locally
```bash
npm run dev
```

Navigate to `http://localhost:5173`, scroll to the booking form, and submit a test booking. Check that the email arrives at abadiola4@gmail.com.

---

## How It Works

1. **User fills form** → Form state updates
2. **User clicks "BOOK APPOINTMENT"** → Form submits
3. **Validation** → Checks required fields (name, phone, service, date, time)
4. **EmailJS sends** → Uses your credentials to send email to abadiola4@gmail.com
5. **Success/Error feedback** → User sees confirmation or error message

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Emails not received | Check spam folder; verify Gmail service is authorized |
| "Failed to send booking" error | Check .env.local file; verify all 3 keys are correct |
| Form shows "SENDING..." forever | Check browser console (F12) for EmailJS errors |
| Public key not found | Ensure .env.local exists in project root (not in src/) |

---

## Email Recipient Options

Currently set to: **abadiola4@gmail.com**

To change the recipient:
1. Edit the template in EmailJS and change the **To Email** field
2. Or update the email in `src/pages/Home.tsx` line 56: `to_email: 'new_email@domain.com'`

---

## Security Note

- The Public Key is safe to expose (it's public)
- Service ID and Template ID are also non-sensitive
- Emails are sent server-side via EmailJS (your Gmail password is never exposed)
- Free tier: 200 emails/month (upgrade for more)

---

## Deployment to GitHub Pages

Once tested locally:
1. Commit your `.env.local` file (or add to .gitignore if you prefer)
2. Run `npm run build` to test production build
3. Run `npm run deploy` to push to GitHub Pages
4. Test the form at https://genromalabanansiphoningservices.com

Email delivery will work the same on the live site.

---

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Create custom templates: https://dashboard.emailjs.com/admin/templates
- Troubleshooting: Check console (F12) → Network tab → emailjs requests
