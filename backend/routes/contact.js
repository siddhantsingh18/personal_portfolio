const express = require('express');
const router = express.Router();
const { Resend } = require('resend');
const Contact = require('../models/Contact');

const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Save to MongoDB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email notification via Resend
    console.log('[contact] RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);
    console.log('[contact] OWNER_EMAIL present:', !!process.env.OWNER_EMAIL, process.env.OWNER_EMAIL);

    if (process.env.RESEND_API_KEY && process.env.OWNER_EMAIL) {
      try {
        console.log('[contact] Attempting to send email via Resend...');
        const emailResult = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: process.env.OWNER_EMAIL,
          subject: `New Portfolio Message: ${subject}`,
          replyTo: email,
          html: `
            <h2>New Contact from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          `,
        });
        console.log('[contact] Resend result:', JSON.stringify(emailResult));
      } catch (emailErr) {
        // Don't fail the whole request if email sending fails —
        // the message is already saved to MongoDB either way.
        console.error('[contact] Email send error:', emailErr);
      }
    } else {
      console.log('[contact] Skipping email — missing env vars.');
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// GET /api/contact — get all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;