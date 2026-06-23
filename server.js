import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing with increased body size limit for PDFs
app.use(cors());
app.use(express.json({ limit: '20mb' }));

// In-memory data store for anonymous analytics and contact messages
const analyticsLogs = [
  { timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), symptoms: ['fever', 'body_aches', 'joint_pain'], primaryDisease: 'Dengue Fever', riskLevel: 'High', region: 'North' },
  { timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), symptoms: ['fever', 'body_aches', 'joint_pain'], primaryDisease: 'Dengue Fever', riskLevel: 'High', region: 'North' },
  { timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), symptoms: ['fever', 'chills', 'headache'], primaryDisease: 'Malaria', riskLevel: 'High', region: 'East' },
  { timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), symptoms: ['fever', 'body_aches', 'joint_pain'], primaryDisease: 'Dengue Fever', riskLevel: 'High', region: 'North' },
  { timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), symptoms: ['cough', 'fever', 'shortness_of_breath'], primaryDisease: 'COVID-19', riskLevel: 'Medium', region: 'West' },
  { timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), symptoms: ['fever', 'body_aches', 'joint_pain'], primaryDisease: 'Dengue Fever', riskLevel: 'High', region: 'North' },
  { timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), symptoms: ['cough', 'fever', 'loss_of_smell'], primaryDisease: 'COVID-19', riskLevel: 'Medium', region: 'West' },
  { timestamp: new Date(), symptoms: ['fever', 'body_aches', 'joint_pain'], primaryDisease: 'Dengue Fever', riskLevel: 'High', region: 'North' }
];

const contactMessages = [];

// Nodemailer transporter config
let transporter = null;
let testAccount = null;

// Initialize Ethereal Test Account on startup
async function initMailTransporter() {
  try {
    console.log("Initializing Ethereal Email test account...");
    testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log(`SMTP server initialized. User: ${testAccount.user}`);
  } catch (error) {
    console.error("Failed to initialize Ethereal mail account:", error.message);
  }
}

initMailTransporter();

// Helper to ensure transporter is ready
async function getTransporter() {
  if (!transporter) {
    await initMailTransporter();
  }
  return transporter;
}

// Endpoint: Send PDF Report
app.post('/api/send-report', async (req, res) => {
  const { email, name, reportId, symptoms, predictions, riskLevel, pdfBase64 } = req.body;

  if (!email || !name || !pdfBase64) {
    return res.status(400).json({ success: false, error: 'Missing required parameters.' });
  }

  try {
    const currentTransporter = await getTransporter();
    if (!currentTransporter) {
      throw new Error("SMTP Transporter is unavailable.");
    }

    const cleanPdfBase64 = pdfBase64.replace(/^data:application\/pdf;base64,/, "");

    const mailOptions = {
      from: '"CareTrack AI Health Platform" <noreply@caretrackai.gov.in>',
      to: email,
      subject: `[CareTrack AI] Clinical Assessment Report - ${reportId}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0d9488; color: #fff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">CareTrack AI</h1>
            <p style="margin: 5px 0 0; font-size: 14px;">Smarter Symptom Analysis. Faster Health Decisions.</p>
          </div>
          <div style="padding: 20px;">
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for using CareTrack AI. Your health assessment report has been generated successfully.</p>
            
            <div style="background-color: #f0fdfa; border-left: 4px solid #0d9488; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #0f766e;">Assessment Summary:</h3>
              <p style="margin: 5px 0;"><strong>Report ID:</strong> ${reportId}</p>
              <p style="margin: 5px 0;"><strong>Primary Predicted Disease:</strong> ${predictions?.[0]?.name || 'N/A'} (${predictions?.[0]?.probability}%)</p>
              <p style="margin: 5px 0;"><strong>Overall Risk Level:</strong> <span style="font-weight: bold; color: ${riskLevel === 'High' ? '#dc2626' : riskLevel === 'Medium' ? '#d97706' : '#059669'};">${riskLevel} Risk</span></p>
            </div>

            <p>We have attached the professional PDF report to this email for your records. Please share this report with a qualified healthcare professional for further diagnosis.</p>

            ${riskLevel === 'High' ? `
              <div style="background-color: #fef2f2; border: 1px solid #fee2e2; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="color: #dc2626; margin: 0; font-weight: bold;">🚨 HIGH RISK WARNING:</p>
                <p style="margin: 5px 0 0; color: #991b1b; font-size: 14px;">Immediate medical consultation is recommended. Please review the emergency guidance in the attached report.</p>
              </div>
            ` : ''}

            <p style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
              <strong>Medical Disclaimer:</strong> CareTrack AI provides general information for awareness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #999;">
            © 2026 CareTrack AI Initiative. All rights reserved.
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `CareTrack_Report_${reportId}.pdf`,
          content: cleanPdfBase64,
          encoding: 'base64'
        }
      ]
    };

    const info = await currentTransporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info);

    console.log(`Email sent successfully. ID: ${info.messageId}`);
    if (previewUrl) {
      console.log(`Ethereal Preview URL: ${previewUrl}`);
    }

    res.status(200).json({
      success: true,
      messageId: info.messageId,
      previewUrl: previewUrl || null
    });

  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ success: false, error: 'Email dispatch failed. Please try again.', details: error.message });
  }
});

// Endpoint: Log Diagnostic Scan Telemetry (Anonymous)
app.post('/api/log-scan', (req, res) => {
  const { symptoms, primaryDisease, riskLevel, region } = req.body;
  if (!primaryDisease || !riskLevel) {
    return res.status(400).json({ success: false, error: 'Invalid telemetry format.' });
  }

  const logEntry = {
    timestamp: new Date(),
    symptoms: symptoms || [],
    primaryDisease,
    riskLevel,
    region: region || 'Unknown'
  };

  analyticsLogs.push(logEntry);
  res.status(200).json({ success: true });
});

// Endpoint: Get Government / NGO Analytics
app.get('/api/analytics', (req, res) => {
  // Group counts for diseases
  const diseaseCounts = {};
  const regionalTrends = { North: 0, South: 0, East: 0, West: 0, Central: 0, Unknown: 0 };
  let outbreakDetected = false;
  let outbreakDisease = "";

  analyticsLogs.forEach(log => {
    // Disease counts
    diseaseCounts[log.primaryDisease] = (diseaseCounts[log.primaryDisease] || 0) + 1;
    // Regional trends
    const reg = log.region || 'Unknown';
    if (regionalTrends[reg] !== undefined) {
      regionalTrends[reg]++;
    }
  });

  // Outbreak detection algorithm: if more than 3 cases of a high-risk disease in a single region in the last 7 days
  const recentHighRiskMap = {};
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  analyticsLogs.forEach(log => {
    if (new Date(log.timestamp) > sevenDaysAgo && log.riskLevel === 'High') {
      const key = `${log.primaryDisease}_${log.region}`;
      recentHighRiskMap[key] = (recentHighRiskMap[key] || 0) + 1;
      if (recentHighRiskMap[key] >= 3) {
        outbreakDetected = true;
        outbreakDisease = `${log.primaryDisease} spike in ${log.region} region`;
      }
    }
  });

  res.status(200).json({
    success: true,
    totalScans: analyticsLogs.length,
    diseaseDistribution: diseaseCounts,
    regionalDistribution: regionalTrends,
    outbreakStatus: {
      alertTriggered: outbreakDetected,
      alertMessage: outbreakDetected ? `⚠️ Outbreak Warning: Unusual cluster of ${outbreakDisease} detected!` : '✅ No active disease outbreaks detected.',
      severity: outbreakDetected ? 'High' : 'Normal'
    },
    recentScans: analyticsLogs.slice(-15).reverse()
  });
});

// Endpoint: Send Contact Form Message
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const newMessage = {
    id: `msg_${Date.now()}`,
    name,
    email,
    subject,
    message,
    timestamp: new Date()
  };

  contactMessages.push(newMessage);
  console.log("New contact message received:", newMessage);

  res.status(200).json({ success: true, message: 'Message sent successfully.' });
});

// Serve static assets in production from the dist directory
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`CareTrack AI Backend Server listening on port ${PORT}`);
});
