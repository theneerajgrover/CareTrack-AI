import { useState, useEffect, useRef, useCallback } from 'react';
import { symptoms as allSymptoms } from './data/symptoms.js';
import { diseases as allDiseases } from './data/diseases.js';
import { translations } from './utils/translate.js';

// ========== AI ANALYSIS ENGINE ==========
function analyzeSymptoms(selectedIds) {
  if (!selectedIds || selectedIds.length === 0) return [];
  const results = allDiseases.map(disease => {
    const matchCount = disease.symptoms.filter(s => selectedIds.includes(s)).length;
    if (matchCount === 0) return null;
    const baseScore = (matchCount / disease.symptoms.length);
    const bonusScore = (matchCount / selectedIds.length) * 0.3;
    const rawProb = Math.min(97, Math.round((baseScore + bonusScore) * 100));
    return { ...disease, probability: rawProb, matchCount };
  }).filter(Boolean).sort((a, b) => b.probability - a.probability).slice(0, 5);
  return results;
}

function getRiskLevel(prob) {
  if (prob >= 70) return 'High';
  if (prob >= 40) return 'Medium';
  return 'Low';
}

function getRiskColor(level) {
  if (level === 'High') return '#ef4444';
  if (level === 'Medium') return '#f59e0b';
  return '#10b981';
}

// ========== DOCTOR DATABASE ==========
const mockDoctors = [
  { id: 1, name: "Dr. Priya Sharma", specialization: "General Physician", hospital: "City Medical Centre", distance: 1.2, type: "Private", lat: 0.011, lng: 0.012, phone: "+91-98765-43210" },
  { id: 2, name: "Dr. Rajesh Kumar", specialization: "Internal Medicine", hospital: "Government District Hospital", distance: 2.5, type: "Government", lat: -0.008, lng: 0.015, phone: "+91-98765-11223" },
  { id: 3, name: "Dr. Anita Patel", specialization: "Pulmonologist", hospital: "Apex Lung Clinic", distance: 4.1, type: "Private", lat: 0.020, lng: -0.010, phone: "+91-99887-66554" },
  { id: 4, name: "Dr. Suresh Reddy", specialization: "Cardiologist", hospital: "Heart Care Hospital", distance: 6.8, type: "Private", lat: -0.015, lng: -0.020, phone: "+91-77665-44332" },
  { id: 5, name: "Dr. Meena Joshi", specialization: "Neurologist", hospital: "Neuro Wellness Institute", distance: 9.3, type: "Private", lat: 0.035, lng: 0.025, phone: "+91-88776-55443" },
  { id: 6, name: "Dr. Anil Singh", specialization: "Gastroenterologist", hospital: "Digestive Health Centre", distance: 12.0, type: "Private", lat: -0.030, lng: 0.040, phone: "+91-70011-22334" },
  { id: 7, name: "Dr. Fatima Khan", specialization: "Dermatologist", hospital: "SkinFirst Clinic", distance: 14.5, type: "Private", lat: 0.045, lng: -0.030, phone: "+91-98001-55667" },
  { id: 8, name: "Dr. Vikram Nair", specialization: "Orthopedist", hospital: "Bone & Joint Hospital", distance: 18.2, type: "Government", lat: -0.040, lng: -0.050, phone: "+91-91234-56780" },
  { id: 9, name: "Dr. Sunita Rao", specialization: "ENT Specialist", hospital: "ENT Super Speciality", distance: 22.7, type: "Private", lat: 0.060, lng: 0.055, phone: "+91-88990-12233" },
  { id: 10, name: "Dr. Ramesh Gupta", specialization: "Ophthalmologist", hospital: "Eye Care Institute", distance: 31.0, type: "Private", lat: -0.070, lng: 0.080, phone: "+91-77001-66778" },
  { id: 11, name: "Dr. Kavita Desai", specialization: "Psychiatrist", hospital: "Manasvita Mental Wellness", distance: 38.5, type: "Government", lat: 0.085, lng: -0.075, phone: "+91-82000-99010" },
  { id: 12, name: "Dr. Deepak Malhotra", specialization: "Emergency Medicine", hospital: "24/7 Emergency Hospital", distance: 45.2, type: "Emergency", lat: -0.090, lng: -0.095, phone: "+91-99000-11223" },
];

const faqData = [
  { q: "Is CareTrack AI a replacement for a real doctor?", a: "No. CareTrack AI is a public health awareness tool. It uses a symptom-matching algorithm to predict possible conditions for educational awareness only. Always consult a certified medical professional for actual diagnosis and treatment." },
  { q: "How does the AI Symptom Analysis engine work?", a: "Our engine matches your selected symptoms against a structured database of 100+ diseases. Each disease is scored based on the proportion of matching symptoms. The top 5 scoring diseases are returned with probability percentages and risk classifications." },
  { q: "Is my personal health data stored or shared?", a: "Personal health profiles are stored locally in your browser (localStorage) only. Diagnostic scans are logged to the government dashboard only in a fully anonymized form (no name, email, or identifying information is ever transmitted)." },
  { q: "What does the risk classification mean?", a: "Low Risk (0-39%) means symptoms may be manageable at home with guidance. Medium Risk (40-69%) suggests seeing a doctor soon. High Risk (70-100%) indicates that immediate medical consultation is strongly recommended." },
  { q: "How do I find doctors near me?", a: "Navigate to the Doctor Locator section and click 'Detect My GPS Location'. The app will request browser location permission and display a live map with nearby doctors plotted by distance priority." },
  { q: "How does the PDF report and email system work?", a: "After running an analysis, click 'Generate Health Report'. A professional PDF is compiled in your browser. Clicking 'Send to Email' dispatches it to our Express backend which sends it via Nodemailer SMTP. A preview link is provided to verify delivery instantly." },
  { q: "What languages does CareTrack AI support?", a: "CareTrack AI currently supports English, Hindi (हिंदी), and Punjabi (ਪੰਜਾਬੀ). Switch languages using the language selector in the navigation bar. The platform architecture supports adding more languages easily." },
  { q: "What is the Government Dashboard used for?", a: "The Government Dashboard shows anonymized aggregate disease prediction statistics. It detects potential disease outbreak clusters by monitoring if the same high-risk disease appears frequently in a short period, helping officials make public health decisions." },
  { q: "Can I use CareTrack AI offline?", a: "Yes! CareTrack AI is a Progressive Web App (PWA). Once loaded, the service worker caches static assets so that symptom browsing and home remedies work even without internet connectivity." },
  { q: "How can NGOs and health organizations integrate CareTrack AI?", a: "CareTrack AI exposes backend REST API endpoints (/api/analytics, /api/log-scan) that NGOs and government bodies can connect to for real-time regional trend monitoring. Contact us via the Contact form for integration discussions." },
];

// ========== CHATBOT RESPONSES ==========
const chatbotResponses = {
  fever: "🌡️ Fever can result from infections, inflammation, or immune responses. Stay hydrated, rest, and monitor your temperature. If fever exceeds 103°F or lasts more than 3 days, please consult a doctor immediately.",
  cough: "😷 A cough can be dry (viral) or productive (bacterial). Inhale steam, drink warm liquids, and avoid smoky environments. A cough lasting more than 3 weeks warrants medical evaluation.",
  headache: "🧠 Headaches are very common and usually benign. Try hydrating well, resting in a dark room, and applying a cold compress. A sudden severe 'thunderclap' headache is a medical emergency.",
  diabetes: "💉 Diabetes management involves monitoring blood glucose, following a low-glycemic diet, regular exercise, and taking prescribed medications. Schedule regular HbA1c tests with your endocrinologist.",
  heart: "❤️ Heart-related symptoms like chest pain, shortness of breath, or palpitations need immediate evaluation. Call emergency services if you experience crushing chest pain radiating to the arm or jaw.",
  anxiety: "🧘 For anxiety, try slow deep breathing (inhale 4s, hold 4s, exhale 6s), mindfulness meditation, and limiting caffeine. A therapist specializing in CBT can help with persistent anxiety.",
  covid: "😷 For COVID-19 symptoms, isolate yourself, monitor oxygen saturation with a pulse oximeter, stay well-hydrated, and contact a healthcare provider for testing guidance.",
  default: "🏥 I'm CareTrack AI Health Assistant. I can answer general health queries. Please select symptoms in the Symptom Analyzer for a detailed AI prediction. For emergencies, always call your local emergency services.",
};

function getChatbotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes('fever') || lower.includes('temperature')) return chatbotResponses.fever;
  if (lower.includes('cough')) return chatbotResponses.cough;
  if (lower.includes('headache') || lower.includes('head pain')) return chatbotResponses.headache;
  if (lower.includes('diabetes') || lower.includes('blood sugar')) return chatbotResponses.diabetes;
  if (lower.includes('heart') || lower.includes('chest pain') || lower.includes('cardiac')) return chatbotResponses.heart;
  if (lower.includes('anxiety') || lower.includes('stress') || lower.includes('panic')) return chatbotResponses.anxiety;
  if (lower.includes('covid') || lower.includes('corona')) return chatbotResponses.covid;
  return chatbotResponses.default;
}

// ========== MAIN APP ==========
export default function App() {
  // Splash
  const [showSplash, setShowSplash] = useState(true);
  const [splashProgress, setSplashProgress] = useState(0);
  const [splashFade, setSplashFade] = useState(false);

  // Navigation
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Language
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations.en;

  // Theme
  const [darkMode, setDarkMode] = useState(true);
  const [highContrast, setHighContrast] = useState(false);

  // Auth
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ct_user')) || null; } catch { return null; }
  });
  const [authMode, setAuthMode] = useState('login');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });
  const [authError, setAuthError] = useState('');

  const fetchUserProfile = async (email) => {
    if (!email) return;
    try {
      const res = await fetch(`/api/profile?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (data.success) {
        setProfile(data.profile || {});
      }
    } catch {
      // Ignore profile fetch failure and keep local profile data
    }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('ct_user', JSON.stringify(user));
      if (!user.isGuest && user.email) {
        fetchUserProfile(user.email);
      }
    } else {
      localStorage.removeItem('ct_user');
      setProfile({});
    }
  }, [user]);

  // Profile
  const [profile, setProfile] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ct_profile')) || {}; } catch { return {}; }
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);

  // Scan History
  const [scanHistory, setScanHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ct_history')) || []; } catch { return []; }
  });

  // Symptoms & Analysis
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptomSearch, setSymptomSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [predictions, setPredictions] = useState([]);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [analysisError, setAnalysisError] = useState('');

  // Report
  const [showReport, setShowReport] = useState(false);
  const [reportId] = useState(() => 'RPT-' + Math.random().toString(36).substr(2, 9).toUpperCase());
  const [emailStatus, setEmailStatus] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [etherealLink, setEtherealLink] = useState('');

  // Map
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const reportTemplateRef = useRef(null);
  const [userCoords, setUserCoords] = useState(null);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState('');
  const [nearbyDoctors, setNearbyDoctors] = useState([]);

  // Chatbot
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: "👋 Hello! I'm CareTrack AI Health Assistant. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef(null);

  // FAQ
  const [openFaq, setOpenFaq] = useState(null);

  // Contact
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');

  // Government analytics
  const [analytics, setAnalytics] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  // PWA Install
  const [pwaPrompt, setPwaPrompt] = useState(null);
  const [pwaInstalled, setPwaInstalled] = useState(false);

  // ---- SPLASH SCREEN ----
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2.5;
      setSplashProgress(Math.min(progress, 100));
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setSplashFade(true);
          setTimeout(() => setShowSplash(false), 800);
        }, 300);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // ---- DARK / LIGHT MODE ----
  useEffect(() => {
    if (darkMode) document.body.classList.remove('light-mode');
    else document.body.classList.add('light-mode');
  }, [darkMode]);

  // ---- HIGH CONTRAST ----
  useEffect(() => {
    if (highContrast) document.body.classList.add('high-contrast');
    else document.body.classList.remove('high-contrast');
  }, [highContrast]);

  // ---- PWA INSTALL ----
  useEffect(() => {
    const handler = (e) => { e.preventDefault(); setPwaPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // ---- CHATBOT SCROLL ----
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // ---- INIT MAP ----
  const initMap = useCallback((lat, lng) => {
    if (typeof window.L === 'undefined') return;
    if (!mapRef.current) return;
    if (leafletMap.current) { leafletMap.current.remove(); leafletMap.current = null; }
    const map = window.L.map(mapRef.current).setView([lat, lng], 13);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    // User marker
    const userIcon = window.L.divIcon({ html: '📍', className: '', iconSize: [30, 30], iconAnchor: [15, 30] });
    window.L.marker([lat, lng], { icon: userIcon }).addTo(map).bindPopup('<b>Your Location</b>').openPopup();
    // Doctor markers
    mockDoctors.forEach(doc => {
      const docIcon = window.L.divIcon({ html: doc.type === 'Government' ? '🏥' : doc.type === 'Emergency' ? '🚨' : '👨‍⚕️', className: '', iconSize: [25, 25], iconAnchor: [12, 25] });
      window.L.marker([lat + doc.lat, lng + doc.lng], { icon: docIcon }).addTo(map)
        .bindPopup(`<b>${doc.name}</b><br>${doc.specialization}<br>${doc.hospital}<br>${doc.distance} km away`);
    });
    leafletMap.current = map;
    setTimeout(() => map.invalidateSize(), 200);
  }, []);

  // ---- GPS LOCATE ----
  const handleGPSLocate = () => {
    setGpsLoading(true);
    setGpsError('');
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your browser.');
      setGpsLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserCoords({ lat: latitude, lng: longitude });
        const sorted = mockDoctors.sort((a, b) => a.distance - b.distance);
        setNearbyDoctors(sorted);
        setGpsLoading(false);
        setTimeout(() => initMap(latitude, longitude), 300);
        // Log anonymous telemetry
        if (predictions.length > 0) {
          fetch('/api/log-scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ symptoms: selectedSymptoms, primaryDisease: predictions[0]?.name, riskLevel: predictions[0] ? getRiskLevel(predictions[0].probability) : 'Low', region: 'Unknown' })
          }).catch(() => {});
        }
      },
      (err) => {
        // Fallback to a default location (New Delhi)
        const lat = 28.6139; const lng = 77.2090;
        setUserCoords({ lat, lng });
        setNearbyDoctors(mockDoctors.sort((a, b) => a.distance - b.distance));
        setGpsLoading(false);
        setGpsError('Location access denied. Showing default location (New Delhi).');
        setTimeout(() => initMap(lat, lng), 300);
      }
    );
  };

  // ---- SYMPTOM ANALYSIS ----
  const handleAnalyze = () => {
    if (selectedSymptoms.length === 0) { setAnalysisError(t.selectAtLeastOne); return; }
    setAnalysisError('');
    setAnalysisLoading(true);
    setPredictions([]);
    setShowReport(false);
    setTimeout(() => {
      const results = analyzeSymptoms(selectedSymptoms);
      setPredictions(results);
      setAnalysisLoading(false);
      setCurrentPage('results');
      // Save to local scan history
      if (results.length > 0) {
        const entry = {
          id: 'SCAN-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
          timestamp: new Date().toISOString(),
          symptoms: selectedSymptoms,
          topDisease: results[0]?.name,
          probability: results[0]?.probability,
          riskLevel: getRiskLevel(results[0]?.probability),
          predictions: results.slice(0, 3)
        };
        const prev = (() => { try { return JSON.parse(localStorage.getItem('ct_history')) || []; } catch { return []; } })();
        const updated = [entry, ...prev].slice(0, 20);
        localStorage.setItem('ct_history', JSON.stringify(updated));
        setScanHistory(updated);
      }
      // Log scan to backend
      if (results.length > 0) {
        fetch('/api/log-scan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ symptoms: selectedSymptoms, primaryDisease: results[0]?.name, riskLevel: getRiskLevel(results[0]?.probability), region: 'Unknown' })
        }).catch(() => {});
      }
    }, 1800);
  };

  // ---- PDF REPORT ----
  const generateAndDownloadPDF = () => {
    if (typeof window.html2pdf === 'undefined') {
      setEmailStatus('⚠️ PDF engine not loaded yet. Please check your internet connection.');
      return;
    }
    const element = reportTemplateRef.current;
    const opt = {
      margin:       0.4,
      filename:     `CareTrack_Report_${reportId}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    window.html2pdf().from(element).set(opt).save();
  };

  // ---- EMAIL REPORT ----
  const handleEmailReport = async () => {
    const recipientEmail = user?.email || profile?.email;
    if (!recipientEmail) { 
      setEmailStatus('❌ No email found. Please log in or set your email in Health Profile.'); 
      return; 
    }
    if (typeof window.html2pdf === 'undefined') {
      setEmailStatus('⚠️ PDF engine not loaded yet. Please check your internet connection.');
      return;
    }
    setEmailLoading(true); 
    setEmailStatus(t.sendingEmail); 
    setEtherealLink('');

    const element = reportTemplateRef.current;
    const opt = {
      margin:       0.4,
      filename:     `CareTrack_Report_${reportId}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      const pdfBase64 = await window.html2pdf().from(element).set(opt).outputPdf('datauristring');
      const res = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: recipientEmail, 
          name: user?.name || profile?.fullName || 'Guest', 
          reportId, 
          symptoms: selectedSymptoms, 
          predictions: predictions.slice(0, 3), 
          riskLevel: predictions.length > 0 ? getRiskLevel(predictions[0].probability) : 'Low', 
          pdfBase64 
        })
      });
      const data = await res.json();
      if (data.success) {
        setEmailStatus(t.emailSuccess);
        if (data.previewUrl) setEtherealLink(data.previewUrl);
      } else { 
        setEmailStatus(t.emailError + ' ' + (data.error || '')); 
      }
    } catch (err) { 
      console.error(err);
      setEmailStatus('⚠️ Backend unreachable or PDF conversion failed.'); 
    }
    setEmailLoading(false);
  };

  // ---- ANALYTICS ----
  const fetchAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const res = await fetch('/api/analytics');
      const data = await res.json();
      if (data.success) setAnalytics(data);
    } catch { setAnalytics(null); }
    setAnalyticsLoading(false);
  };

  useEffect(() => { if (currentPage === 'dashboard') fetchAnalytics(); }, [currentPage]);

  // ---- AUTH ----
  const handleAuth = async (e) => {
    e.preventDefault(); setAuthError('');
    if (authMode === 'signup') {
      if (!authForm.name || !authForm.email || !authForm.password) { setAuthError('All fields are required.'); return; }
      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: authForm.name, email: authForm.email, password: authForm.password })
        });
        const data = await res.json();
        if (!data.success) {
          setAuthError(data.error || 'Signup failed.');
          return;
        }
        setUser(data.user);
        setShowAuthModal(false);
        setAuthForm({ name: '', email: '', password: '' });
      } catch (error) {
        setAuthError('Signup failed. Please try again.');
      }
    } else {
      if (!authForm.email || !authForm.password) { setAuthError('Email and password are required.'); return; }
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: authForm.email, password: authForm.password })
        });
        const data = await res.json();
        if (!data.success) {
          // Fallback: if user exists in localStorage (legacy local signup), allow login and try to migrate to backend
          try { const storedUser = JSON.parse(localStorage.getItem('ct_user') || 'null');
            if (storedUser && storedUser.email && storedUser.email.toLowerCase() === authForm.email.toLowerCase()) {
              setUser(storedUser);
              setShowAuthModal(false);
              setAuthForm({ name: '', email: '', password: '' });
              // Attempt silent migration to backend with a generated password
              (async () => {
                try {
                  const migrationPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
                  await fetch('/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: storedUser.name || 'User', email: storedUser.email, password: migrationPassword })
                  });
                } catch (e) { /* migration best-effort */ }
              })();
              return;
            }
          } catch (e) { /* ignore parse errors */ }

          setAuthError(data.error || 'Invalid login credentials.');
          return;
        }
        setUser(data.user);
        setShowAuthModal(false);
        setAuthForm({ name: '', email: '', password: '' });
      } catch (error) {
        setAuthError('Login failed. Please try again.');
      }
    }
  };

  const handleGuestLogin = () => {
    const guestUser = { name: 'Guest User', email: '', isGuest: true };
    setUser(guestUser);
    localStorage.setItem('ct_user', JSON.stringify(guestUser));
    setShowAuthModal(false);
  };

  const handleLogout = () => { setUser(null); localStorage.removeItem('ct_user'); };

  // ---- SAVE PROFILE ----
  const handleSaveProfile = async () => {
    if (!user || !user.email || user.isGuest) {
      setProfileSaved(false);
      return;
    }
    localStorage.setItem('ct_profile', JSON.stringify(profile));
    try {
      await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, profile })
      });
      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 3000);
    } catch {
      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 3000);
    }
  };

  // ---- CONTACT ----
  const handleContact = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) { setContactStatus(t.contactError); return; }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(contactForm) });
      const data = await res.json();
      if (data.success) { setContactStatus(t.contactSuccess); setContactForm({ name: '', email: '', subject: '', message: '' }); }
    } catch { setContactStatus('⚠️ Could not connect to server. Your message was noted locally.'); }
  };

  // ---- CHATBOT ----
  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setTimeout(() => {
      const reply = getChatbotReply(chatInput);
      setChatMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 700);
  };

  // ---- CATEGORIES ----
  const categories = ['All', ...new Set(allSymptoms.map(s => s.category))];
  const filteredSymptoms = allSymptoms.filter(s =>
    (activeCat === 'All' || s.category === activeCat) &&
    (symptomSearch === '' || s.name.toLowerCase().includes(symptomSearch.toLowerCase()))
  );

  const highestRisk = predictions.length > 0 ? getRiskLevel(predictions[0].probability) : null;

  // ========== RENDER ==========
  if (showSplash) {
    return (
      <div className="splash-container" style={{ opacity: splashFade ? 0 : 1 }}>
        {/* Animated background rings */}
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(20,184,166,0.1)', animation: 'pulseSlow 3s infinite' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: '1px solid rgba(20,184,166,0.15)', animation: 'pulseSlow 2.5s infinite 0.5s' }} />
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(20,184,166,0.2)', animation: 'pulseSlow 2s infinite 1s' }} />
        {/* Logo */}
        <div className="pulse-logo" style={{ fontSize: 80, marginBottom: 24 }}>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="44" fill="rgba(13,148,136,0.15)" stroke="#0d9488" strokeWidth="2" />
            <path d="M45 20 L45 70 M20 45 L70 45" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
            <path d="M28 45 L35 35 L42 50 L50 30 L57 45 L62 45" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="45" cy="45" r="6" fill="#0d9488" opacity="0.6" />
          </svg>
        </div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 42, fontWeight: 800, color: '#ffffff', letterSpacing: '-2px', marginBottom: 8 }}>CareTrack AI</h1>
        <p style={{ color: '#9ca3af', fontSize: 16, marginBottom: 40, textAlign: 'center', maxWidth: 400 }}>{translations.en.tagline}</p>
        <div className="splash-progress-track">
          <div className="splash-progress-bar" style={{ width: `${splashProgress}%` }} />
        </div>
        <p style={{ color: '#374151', fontSize: 13, marginTop: 16 }}>Loading healthcare intelligence... {Math.round(splashProgress)}%</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
          <svg width="36" height="36" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="44" fill="rgba(13,148,136,0.15)" stroke="#0d9488" strokeWidth="2" />
            <path d="M45 20 L45 70 M20 45 L70 45" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
            <path d="M28 45 L35 35 L42 50 L50 30 L57 45 L62 45" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 20, color: '#ffffff' }}>CareTrack <span style={{ color: '#0d9488' }}>AI</span></span>
        </div>
        <div className="nav-links" style={{ flexWrap: 'wrap' }}>
          {[['home','🏠 Home'],['analyzer','🔬 Analyzer'],['doctors','🗺️ Doctors'],['dashboard','📊 Govt Dashboard'],['publichealth','💚 Public Health'],['chatbot','🤖 Healthbot'],['history','📜 History'],['faq','❓ FAQ'],['contact','📬 Contact']].map(([page, label]) => (
            <span key={page} className={`nav-link ${currentPage === page ? 'active' : ''}`} onClick={() => setCurrentPage(page)} tabIndex={0} aria-label={label} onKeyDown={e => e.key === 'Enter' && setCurrentPage(page)}>{label}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {/* Language toggle */}
          <select value={lang} onChange={e => setLang(e.target.value)} className="form-select" style={{ width: 'auto', padding: '6px 10px', fontSize: 13 }} aria-label="Select language">
            <option value="en">EN</option>
            <option value="hi">हिंदी</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
          </select>
          {/* Dark / Light mode toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 13 }} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} aria-pressed={!darkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          {/* High contrast toggle */}
          <button onClick={() => setHighContrast(!highContrast)} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 13 }} title="Toggle High Contrast Mode" aria-pressed={highContrast}>
            ♿
          </button>
          {/* Mobile hamburger — visible only on mobile via CSS */}
          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Open navigation menu">☰</button>
          {user ? (
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: 13 }} onClick={() => setShowProfileModal(true)}>👤 {user.name?.split(' ')[0]}</button>
              <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: 13 }} onClick={handleLogout}>{t.logout}</button>
            </div>
          ) : (
            <button className="btn btn-primary" style={{ padding: '8px 20px' }} onClick={() => setShowAuthModal(true)}>{t.login}</button>
          )}
        </div>
      </nav>

      {/* ===== MOBILE NAV OVERLAY ===== */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">✕</button>
          {[['home','🏠 Home'],['analyzer','🔬 Analyzer'],['doctors','🗺️ Doctors'],['dashboard','📊 Govt Dashboard'],['publichealth','💚 Public Health'],['chatbot','🤖 Healthbot'],['history','📜 History'],['faq','❓ FAQ'],['contact','📬 Contact']].map(([page, label]) => (
            <span key={page} className={`nav-link ${currentPage === page ? 'active' : ''}`}
              onClick={() => { setCurrentPage(page); setMobileMenuOpen(false); }}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && (setCurrentPage(page), setMobileMenuOpen(false))}>
              {label}
            </span>
          ))}
        </div>
      )}

      {/* ===== AUTH MODAL ===== */}
      {showAuthModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
          <div className="glass-panel modal-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 id="auth-modal-title" style={{ fontSize: 22 }}>{authMode === 'login' ? t.login : t.signup}</h2>
              <button onClick={() => setShowAuthModal(false)} className="btn btn-secondary" style={{ padding: '4px 12px' }} aria-label="Close authentication modal">✕</button>
            </div>
            <form onSubmit={handleAuth}>
              {authMode === 'signup' && (
                <div style={{ marginBottom: 16 }}>
                  <label className="form-label" htmlFor="auth-name">{t.fullName}</label>
                  <input id="auth-name" className="form-input" type="text" placeholder="Enter your full name" value={authForm.name} onChange={e => setAuthForm({ ...authForm, name: e.target.value })} />
                </div>
              )}
              <div style={{ marginBottom: 16 }}>
                <label className="form-label" htmlFor="auth-email">{t.email}</label>
                <input id="auth-email" className="form-input" type="email" placeholder="your@email.com" value={authForm.email} onChange={e => setAuthForm({ ...authForm, email: e.target.value })} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label className="form-label" htmlFor="auth-password">{t.password}</label>
                <input id="auth-password" className="form-input" type="password" placeholder="••••••••" value={authForm.password} onChange={e => setAuthForm({ ...authForm, password: e.target.value })} />
              </div>
              {authError && <p style={{ color: '#ef4444', marginBottom: 12, fontSize: 14 }}>{authError}</p>}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: 12 }}>{authMode === 'login' ? t.login : t.signup}</button>
              <button type="button" className="btn btn-secondary" style={{ width: '100%', marginBottom: 12 }} onClick={handleGuestLogin}>{t.guestLogin}</button>
              <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 14 }}>
                {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <span style={{ color: '#0d9488', cursor: 'pointer', fontWeight: 600 }} tabIndex={0} onKeyDown={e => e.key==='Enter' && setAuthMode(authMode==='login'?'signup':'login')} onClick={() => { setAuthMode(authMode === 'login' ? 'signup' : 'login'); setAuthError(''); }}>
                  {authMode === 'login' ? t.signup : t.login}
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* ===== PROFILE MODAL ===== */}
      {showProfileModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="profile-modal-title">
          <div className="glass-panel modal-content" style={{ maxWidth: 700 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 id="profile-modal-title">{t.profile}</h2>
              <button onClick={() => setShowProfileModal(false)} className="btn btn-secondary" style={{ padding: '4px 12px' }} aria-label="Close profile modal">✕</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['fullName', t.fullName, 'text'], ['age', t.age, 'number'], ['email', t.email, 'email'], ['phone', t.phone, 'tel']].map(([key, label, type]) => (
                <div key={key}>
                  <label className="form-label" htmlFor={`profile-${key}`}>{label}</label>
                  <input id={`profile-${key}`} className="form-input" type={type} value={profile[key] || ''} onChange={e => setProfile({ ...profile, [key]: e.target.value })} />
                </div>
              ))}
              <div>
                <label className="form-label" htmlFor="profile-gender">{t.gender}</label>
                <select id="profile-gender" className="form-select" value={profile.gender || ''} onChange={e => setProfile({ ...profile, gender: e.target.value })}>
                  <option value="">Select</option>
                  <option>Male</option><option>Female</option><option>Other</option><option>Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="form-label" htmlFor="profile-blood">{t.bloodGroup}</label>
                <select id="profile-blood" className="form-select" value={profile.bloodGroup || ''} onChange={e => setProfile({ ...profile, bloodGroup: e.target.value })}>
                  <option value="">Select</option>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => <option key={bg}>{bg}</option>)}
                </select>
              </div>
              {[['height', t.height, 'number'], ['weight', t.weight, 'number'], ['emergencyContact', t.emergencyContact, 'tel'], ['address', t.address, 'text']].map(([key, label, type]) => (
                <div key={key}>
                  <label className="form-label" htmlFor={`profile-${key}`}>{label}</label>
                  <input id={`profile-${key}`} className="form-input" type={type} value={profile[key] || ''} onChange={e => setProfile({ ...profile, [key]: e.target.value })} />
                </div>
              ))}
              <div>
                <label className="form-label" htmlFor="profile-smoking">{t.smoking}</label>
                <select id="profile-smoking" className="form-select" value={profile.smoking || ''} onChange={e => setProfile({ ...profile, smoking: e.target.value })}>
                  <option value="">Select</option>
                  <option>Never</option><option>Former smoker</option><option>Current smoker</option>
                </select>
              </div>
              <div>
                <label className="form-label" htmlFor="profile-alcohol">{t.alcohol}</label>
                <select id="profile-alcohol" className="form-select" value={profile.alcohol || ''} onChange={e => setProfile({ ...profile, alcohol: e.target.value })}>
                  <option value="">Select</option>
                  <option>Never</option><option>Occasionally</option><option>Regularly</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <label className="form-label" htmlFor="profile-allergies">{t.allergies}</label>
              <textarea id="profile-allergies" className="form-textarea" rows={2} value={profile.allergies || ''} onChange={e => setProfile({ ...profile, allergies: e.target.value })} />
            </div>
            <div style={{ marginTop: 12 }}>
              <label className="form-label" htmlFor="profile-diseases">{t.existingDiseases}</label>
              <textarea id="profile-diseases" className="form-textarea" rows={2} value={profile.existingDiseases || ''} onChange={e => setProfile({ ...profile, existingDiseases: e.target.value })} />
            </div>
            <div style={{ marginTop: 12 }}>
              <label className="form-label" htmlFor="profile-family">{t.familyHistory}</label>
              <textarea id="profile-family" className="form-textarea" rows={2} value={profile.familyHistory || ''} onChange={e => setProfile({ ...profile, familyHistory: e.target.value })} />
            </div>
            {profileSaved && <p style={{ color: '#10b981', marginTop: 12, fontWeight: 600 }}>✅ {t.profileSaved}</p>}
            <button className="btn btn-primary" style={{ width: '100%', marginTop: 20 }} onClick={handleSaveProfile}>{t.saveProfile}</button>
          </div>
        </div>
      )}

      {/* ===== PAGES ===== */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>

        {/* ===== HOME PAGE ===== */}
        {currentPage === 'home' && (
          <div>
            {/* PWA Banner */}
            {pwaPrompt && !pwaInstalled && (
              <div className="pwa-banner" role="alert">
                <div>
                  <span style={{ fontWeight: 700, color: '#ffffff' }}>📱 Install CareTrack AI</span>
                  <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 4 }}>Add to your home screen for faster access and offline support.</p>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="btn btn-primary" style={{ padding: '8px 16px' }} onClick={() => { pwaPrompt.prompt(); pwaPrompt.userChoice.then(r => { if (r.outcome === 'accepted') setPwaInstalled(true); setPwaPrompt(null); }); }}>Install App</button>
                  <button className="btn btn-secondary" style={{ padding: '8px 16px' }} onClick={() => setPwaPrompt(null)}>Dismiss</button>
                </div>
              </div>
            )}
            {/* Hero */}
            <div className="hero-section" style={{ maxWidth: '100%', padding: '60px 20px', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 24, fontSize: 13, color: '#0d9488', fontWeight: 600 }}>
                🧬 AI-Powered Public Healthcare Platform
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 62px)', lineHeight: 1.15, marginBottom: 20, background: 'linear-gradient(135deg, #ffffff 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t.tagline}
              </h1>
              <p style={{ fontSize: 18, color: '#9ca3af', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.8 }}>
                {t.aboutQuote}
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ fontSize: 16, padding: '14px 32px' }} onClick={() => setCurrentPage('analyzer')} id="home-analyze-btn">
                  🔬 Analyze Symptoms
                </button>
                <button className="btn btn-secondary" style={{ fontSize: 16, padding: '14px 32px' }} onClick={() => setCurrentPage('doctors')}>
                  🗺️ Find Doctors
                </button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="dashboard-grid" style={{ marginTop: 40 }}>
              {[
                { icon: '🔬', title: 'AI Symptom Analyzer', desc: 'Select from 200+ symptoms. Our AI engine predicts top 5 matching conditions with probability scores.', page: 'analyzer', color: '#0d9488' },
                { icon: '🗺️', title: 'Nearby Doctor Locator', desc: 'Find verified doctors and hospitals in your vicinity using real GPS-based geolocation mapping.', page: 'doctors', color: '#6366f1' },
                { icon: '📋', title: 'Health Reports & PDF', desc: 'Generate a professional downloadable PDF report of your analysis. Auto-email delivery included.', page: 'analyzer', color: '#14b8a6' },
                { icon: '📊', title: 'Government Dashboard', desc: 'Anonymous disease trend monitoring and outbreak detection tools built for officials and NGOs.', page: 'dashboard', color: '#f59e0b' },
                { icon: '💊', title: 'Home Remedies Engine', desc: 'Get evidence-based home care advice, diet plans, and hydration guidelines for low-risk conditions.', page: 'analyzer', color: '#10b981' },
                { icon: '🤖', title: 'AI Health Chatbot', desc: 'Chat with our AI health assistant for quick answers to common health queries any time.', page: 'chatbot', color: '#8b5cf6' },
              ].map((card) => (
                <div key={card.title} className="glass-panel" style={{ padding: 28, cursor: 'pointer' }} onClick={() => setCurrentPage(card.page)}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{card.icon}</div>
                  <h3 style={{ fontSize: 19, marginBottom: 10, color: card.color }}>{card.title}</h3>
                  <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Public Health Stats */}
            <div className="glass-panel" style={{ padding: 32, marginTop: 40, textAlign: 'center' }}>
              <h2 style={{ marginBottom: 8 }}>Trusted by Communities Across India</h2>
              <p style={{ color: '#9ca3af', marginBottom: 32 }}>CareTrack AI is designed for government bodies, NGOs, hospitals, and citizens alike.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
                {[['200+', 'Tracked Symptoms'],['100+', 'Mapped Diseases'],['3', 'Languages Supported'],['5', 'Regions Monitored']].map(([num, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 42, fontWeight: 800, color: '#0d9488', fontFamily: 'Outfit, sans-serif' }}>{num}</div>
                    <div style={{ color: '#9ca3af', fontSize: 14, marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== ANALYZER PAGE ===== */}
        {currentPage === 'analyzer' && (
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>{t.analyzerHeader}</h1>
            <p style={{ color: '#9ca3af', marginBottom: 32 }}>{t.analyzerSub}</p>

            {/* Search */}
            <div className="glass-panel" style={{ padding: 24, marginBottom: 24 }}>
              <input id="symptom-search" className="form-input" type="search" placeholder={t.searchSymptomPlaceholder} value={symptomSearch} onChange={e => setSymptomSearch(e.target.value)} aria-label="Search symptoms" style={{ marginBottom: 16 }} />

              {/* Category filters */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {categories.map(cat => (
                  <button key={cat} className={`symptom-tag ${activeCat === cat ? 'selected' : ''}`} onClick={() => setActiveCat(cat)} aria-pressed={activeCat === cat}>{cat}</button>
                ))}
              </div>

              {/* Symptoms grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxHeight: 320, overflowY: 'auto', padding: 4 }}>
                {filteredSymptoms.map(s => (
                  <button key={s.id} className={`symptom-tag ${selectedSymptoms.includes(s.id) ? 'selected' : ''}`}
                    onClick={() => setSelectedSymptoms(prev => prev.includes(s.id) ? prev.filter(x => x !== s.id) : [...prev, s.id])}
                    aria-pressed={selectedSymptoms.includes(s.id)}>
                    {selectedSymptoms.includes(s.id) ? '✓ ' : '+ '}{s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected symptoms */}
            {selectedSymptoms.length > 0 && (
              <div className="glass-panel" style={{ padding: 20, marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <h3>{t.selectedSymptoms} ({selectedSymptoms.length})</h3>
                  <button className="btn btn-secondary" style={{ padding: '4px 12px', fontSize: 13 }} onClick={() => { setSelectedSymptoms([]); setPredictions([]); }}>{t.clearAll}</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {selectedSymptoms.map(sid => {
                    const sym = allSymptoms.find(s => s.id === sid);
                    return <span key={sid} className="symptom-tag selected" onClick={() => setSelectedSymptoms(prev => prev.filter(x => x !== sid))} style={{ cursor: 'pointer' }}>✕ {sym?.name || sid}</span>;
                  })}
                </div>
              </div>
            )}

            {analysisError && <p style={{ color: '#ef4444', marginBottom: 16 }}>{analysisError}</p>}
            <button id="analyze-btn" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 32px', width: '100%' }} onClick={handleAnalyze} disabled={analysisLoading}>
              {analysisLoading ? '🧬 Analyzing... Please wait...' : t.analyzeBtn}
            </button>
          </div>
        )}

        {/* ===== RESULTS PAGE ===== */}
        {currentPage === 'results' && (
          <div>
            <button className="btn btn-secondary" style={{ marginBottom: 24 }} onClick={() => setCurrentPage('analyzer')}>← Back to Analyzer</button>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>{t.resultsHeader}</h1>

            {/* HIGH RISK ALERT */}
            {highestRisk === 'High' && (
              <div className="emergency-card glass-panel" style={{ padding: 24, marginBottom: 24, borderRadius: 16 }} role="alert">
                <h2 style={{ color: '#ef4444', fontSize: 24, marginBottom: 8 }}>{t.highRiskAlert}</h2>
                <p style={{ color: '#fca5a5', marginBottom: 12 }}>{t.highRiskMessage}</p>
                <div style={{ background: 'rgba(239,68,68,0.1)', padding: 16, borderRadius: 8 }}>
                  <p style={{ color: '#fecaca', fontSize: 14 }}>{t.emergencyGuidance}</p>
                </div>
              </div>
            )}

            {/* Disease Predictions */}
            {predictions.length === 0 ? (
              <div className="glass-panel" style={{ padding: 40, textAlign: 'center' }}>
                <p style={{ color: '#9ca3af', fontSize: 18 }}>No matching diseases found for the selected symptoms. Try selecting more specific symptoms.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {predictions.map((pred, idx) => {
                  const risk = getRiskLevel(pred.probability);
                  const riskColor = getRiskColor(risk);
                  return (
                    <div key={pred.id} className="glass-panel" style={{ padding: 28 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                        <div>
                          <span style={{ color: '#9ca3af', fontSize: 13, fontWeight: 600 }}>#{idx + 1} Match</span>
                          <h2 style={{ fontSize: 22, marginTop: 4 }}>{pred.name}</h2>
                        </div>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                          <span style={{ background: `${riskColor}22`, color: riskColor, border: `1px solid ${riskColor}44`, borderRadius: 8, padding: '4px 14px', fontWeight: 700, fontSize: 14 }}>{risk} Risk</span>
                          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 32, color: riskColor }}>{pred.probability}%</span>
                        </div>
                      </div>

                      {/* Probability bar */}
                      <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4, marginBottom: 16, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pred.probability}%`, background: `linear-gradient(90deg, ${riskColor}88, ${riskColor})`, borderRadius: 4, transition: 'width 1s ease' }} />
                      </div>

                      <p style={{ color: '#d1d5db', marginBottom: 16, lineHeight: 1.7 }}><strong>{t.explanation}:</strong> {pred.description}</p>

                      {/* Remedies */}
                      {risk !== 'High' && pred.remedies && (
                        <details style={{ marginTop: 8 }}>
                          <summary style={{ cursor: 'pointer', color: '#0d9488', fontWeight: 600, marginBottom: 12, fontSize: 15 }}>💊 {t.homeRemedies}</summary>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 12 }}>
                            <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 12, padding: 16 }}>
                              <h4 style={{ color: '#10b981', marginBottom: 8, fontSize: 14 }}>🌿 {t.homeRemedies}</h4>
                              <ul style={{ paddingLeft: 16, margin: 0 }}>{pred.remedies.map((r, i) => <li key={i} style={{ color: '#d1d5db', fontSize: 13, marginBottom: 4 }}>{r}</li>)}</ul>
                            </div>
                            {pred.diet && <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 12, padding: 16 }}>
                              <h4 style={{ color: '#f59e0b', marginBottom: 8, fontSize: 14 }}>🥗 {t.dietGuidance}</h4>
                              <ul style={{ paddingLeft: 16, margin: 0 }}>{pred.diet.map((d, i) => <li key={i} style={{ color: '#d1d5db', fontSize: 13, marginBottom: 4 }}>{d}</li>)}</ul>
                            </div>}
                            {pred.hydration && <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 12, padding: 16 }}>
                              <h4 style={{ color: '#818cf8', marginBottom: 8, fontSize: 14 }}>💧 {t.hydrationGuidance}</h4>
                              <ul style={{ paddingLeft: 16, margin: 0 }}>{pred.hydration.map((h, i) => <li key={i} style={{ color: '#d1d5db', fontSize: 13, marginBottom: 4 }}>{h}</li>)}</ul>
                            </div>}
                          </div>
                        </details>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Disclaimer */}
            <div className="glass-panel" style={{ padding: 20, marginTop: 24, borderColor: 'rgba(245,158,11,0.3)' }}>
              <p style={{ color: '#fbbf24', fontSize: 13, lineHeight: 1.7 }}>⚠️ {t.disclaimer}</p>
            </div>

            {/* Report Generation */}
            {predictions.length > 0 && (
              <div className="glass-panel" style={{ padding: 28, marginTop: 24 }}>
                <h3 style={{ marginBottom: 20 }}>📋 {t.generateReport}</h3>
                <div style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', borderRadius: 12, padding: 20, marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <div><span style={{ color: '#9ca3af', fontSize: 13 }}>{t.reportId}</span><p style={{ fontWeight: 700, color: '#0d9488' }}>{reportId}</p></div>
                    <div><span style={{ color: '#9ca3af', fontSize: 13 }}>{t.date}</span><p style={{ fontWeight: 600 }}>{new Date().toLocaleString()}</p></div>
                    <div><span style={{ color: '#9ca3af', fontSize: 13 }}>Patient</span><p style={{ fontWeight: 600 }}>{user?.name || profile?.fullName || 'Guest User'}</p></div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button id="download-pdf-btn" className="btn btn-primary" onClick={generateAndDownloadPDF}>📥 {t.downloadPdf}</button>
                  <button id="email-report-btn" className="btn btn-secondary" onClick={handleEmailReport} disabled={emailLoading}>{emailLoading ? '📤 Sending...' : `📧 ${t.emailPdf}`}</button>
                </div>
                {emailStatus && (
                  <div style={{ marginTop: 16, padding: 14, background: emailStatus.includes('✅') ? 'rgba(16,185,129,0.1)' : emailStatus.includes('⚠️') ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)', borderRadius: 8 }}>
                    <p style={{ color: emailStatus.includes('✅') ? '#10b981' : '#f59e0b', fontSize: 14 }}>{emailStatus}</p>
                    {etherealLink && <a href={etherealLink} target="_blank" rel="noreferrer" style={{ color: '#0d9488', fontWeight: 700, fontSize: 14, display: 'block', marginTop: 8 }}>🔗 Click here to preview email in Ethereal inbox →</a>}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ===== DOCTORS & MAP PAGE ===== */}
        {currentPage === 'doctors' && (
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>{t.doctorHeader}</h1>
            <p style={{ color: '#9ca3af', marginBottom: 24 }}>{t.mapSub}</p>

            <div className="glass-panel" style={{ padding: 24, marginBottom: 24 }}>
              <button id="gps-locate-btn" className="btn btn-primary" style={{ fontSize: 15, padding: '12px 28px' }} onClick={handleGPSLocate} disabled={gpsLoading}>
                {gpsLoading ? '⏳ Locating...' : `📍 ${t.gpsBtn}`}
              </button>
              {gpsError && <p style={{ color: '#f59e0b', marginTop: 12, fontSize: 14 }}>⚠️ {gpsError}</p>}
              {userCoords && <p style={{ color: '#9ca3af', marginTop: 12, fontSize: 13 }}>📍 Location detected: {userCoords.lat.toFixed(4)}, {userCoords.lng.toFixed(4)}</p>}
            </div>

            {/* Leaflet Map */}
            {userCoords && (
              <div className="glass-panel" style={{ padding: 4, marginBottom: 24 }}>
                <div id="leaflet-map" ref={mapRef} className="map-container" aria-label="Interactive map showing nearby doctors and hospitals" />
              </div>
            )}

            {/* Doctor Cards */}
            {nearbyDoctors.length > 0 && (
              <div>
                {[{ label: t.priority1, max: 20 }, { label: t.priority2, max: 50 }, { label: t.priority3, max: Infinity }].map(({ label, max }) => {
                  const docs = nearbyDoctors.filter(d => d.distance <= max && (max === 20 ? true : d.distance > (max === 50 ? 20 : 50)));
                  if (docs.length === 0) return null;
                  return (
                    <div key={label} style={{ marginBottom: 32 }}>
                      <h3 style={{ color: '#0d9488', marginBottom: 16, fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                        {max <= 20 ? '🟢' : max <= 50 ? '🟡' : '🔴'} {label}
                      </h3>
                      <div className="dashboard-grid">
                        {docs.map(doc => (
                          <div key={doc.id} className="glass-panel" style={{ padding: 20 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                              <div>
                                <h4 style={{ marginBottom: 4 }}>{doc.name}</h4>
                                <span style={{ background: doc.type === 'Government' ? 'rgba(16,185,129,0.15)' : doc.type === 'Emergency' ? 'rgba(239,68,68,0.15)' : 'rgba(99,102,241,0.15)', color: doc.type === 'Government' ? '#10b981' : doc.type === 'Emergency' ? '#ef4444' : '#818cf8', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>{doc.type}</span>
                              </div>
                              <span style={{ color: '#0d9488', fontWeight: 700, fontSize: 18 }}>{doc.distance} km</span>
                            </div>
                            <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 4 }}>🩺 {doc.specialization}</p>
                            <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 4 }}>🏥 {doc.hospital}</p>
                            <p style={{ color: '#0d9488', fontSize: 14, fontWeight: 600 }}>📞 {doc.phone}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {!userCoords && (
              <div className="glass-panel" style={{ padding: 48, textAlign: 'center' }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🗺️</div>
                <h3 style={{ marginBottom: 8 }}>Tap "Detect My GPS Location"</h3>
                <p style={{ color: '#9ca3af' }}>Allow location access to find doctors and hospitals near you.</p>
              </div>
            )}
          </div>
        )}

        {/* ===== GOVT DASHBOARD ===== */}
        {currentPage === 'dashboard' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
              <div>
                <h1 style={{ fontSize: 30, marginBottom: 4 }}>{t.govtDashboardHeader}</h1>
                <p style={{ color: '#9ca3af' }}>{t.govtDashboardSub}</p>
              </div>
              <button className="btn btn-primary" onClick={fetchAnalytics} disabled={analyticsLoading}>
                {analyticsLoading ? '🔄 Fetching...' : '🔄 Refresh Data'}
              </button>
            </div>

            {analyticsLoading && <div className="glass-panel" style={{ padding: 48, textAlign: 'center' }}><div style={{ fontSize: 48, marginBottom: 12 }}>⏳</div><p style={{ color: '#9ca3af' }}>Loading government analytics...</p></div>}

            {!analyticsLoading && !analytics && (
              <div className="glass-panel" style={{ padding: 48, textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔌</div>
                <h3>Backend Server Not Running</h3>
                <p style={{ color: '#9ca3af', marginTop: 8 }}>Start the development server with <code style={{ background: '#12182c', padding: '2px 8px', borderRadius: 4, color: '#0d9488' }}>npm run dev</code> to view real-time analytics.</p>
              </div>
            )}

            {analytics && (
              <div>
                {/* Outbreak Status */}
                <div className={`glass-panel ${analytics.outbreakStatus.alertTriggered ? 'emergency-card' : ''}`} style={{ padding: 24, marginBottom: 24 }} role="alert">
                  <h3 style={{ marginBottom: 12 }}>{t.outbreakStatus}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 32 }}>{analytics.outbreakStatus.alertTriggered ? '🚨' : '✅'}</span>
                    <div>
                      <p style={{ fontWeight: 700, color: analytics.outbreakStatus.alertTriggered ? '#ef4444' : '#10b981', fontSize: 18 }}>{analytics.outbreakStatus.alertMessage}</p>
                      <p style={{ color: '#9ca3af', fontSize: 14, marginTop: 4 }}>Severity: {analytics.outbreakStatus.severity}</p>
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="dashboard-grid" style={{ marginBottom: 24 }}>
                  <div className="glass-panel" style={{ padding: 24 }}>
                    <p style={{ color: '#9ca3af', fontSize: 14 }}>{t.totalScans}</p>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 48, fontWeight: 800, color: '#0d9488' }}>{analytics.totalScans}</p>
                  </div>
                  <div className="glass-panel" style={{ padding: 24 }}>
                    <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 12 }}>{t.diseaseDistribution}</p>
                    {Object.entries(analytics.diseaseDistribution).sort(([, a], [, b]) => b - a).slice(0, 5).map(([disease, count]) => (
                      <div key={disease} style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                          <span style={{ color: '#d1d5db' }}>{disease}</span>
                          <span style={{ color: '#0d9488', fontWeight: 700 }}>{count}</span>
                        </div>
                        <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, marginTop: 4, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${(count / analytics.totalScans) * 100}%`, background: 'linear-gradient(90deg, #0d9488, #14b8a6)', borderRadius: 3 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="glass-panel" style={{ padding: 24 }}>
                    <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 12 }}>{t.regionalDistribution}</p>
                    {Object.entries(analytics.regionalDistribution).map(([region, count]) => (
                      <div key={region} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ color: '#d1d5db', fontSize: 14 }}>{region}</span>
                        <span style={{ background: 'rgba(13,148,136,0.15)', color: '#0d9488', padding: '2px 10px', borderRadius: 12, fontSize: 13, fontWeight: 700 }}>{count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Scans */}
                <div className="glass-panel" style={{ padding: 24 }}>
                  <h3 style={{ marginBottom: 16 }}>{t.recentScansTitle}</h3>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }} role="grid">
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          {['Time', 'Primary Disease', 'Risk Level', 'Region'].map(h => (
                            <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#9ca3af', fontWeight: 600 }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {analytics.recentScans.map((scan, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '10px 16px', color: '#9ca3af' }}>{new Date(scan.timestamp).toLocaleString()}</td>
                            <td style={{ padding: '10px 16px', color: '#ffffff', fontWeight: 600 }}>{scan.primaryDisease}</td>
                            <td style={{ padding: '10px 16px' }}>
                              <span style={{ color: getRiskColor(scan.riskLevel), background: `${getRiskColor(scan.riskLevel)}22`, padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{scan.riskLevel}</span>
                            </td>
                            <td style={{ padding: '10px 16px', color: '#9ca3af' }}>{scan.region}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===== PUBLIC HEALTH PAGE ===== */}
        {currentPage === 'publichealth' && (
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>💚 Public Health Centre</h1>
            <p style={{ color: '#9ca3af', marginBottom: 32 }}>Daily health tips, seasonal alerts, vaccination awareness, and more for the community.</p>
            <div className="dashboard-grid">
              {[
                { icon: '🌡️', title: 'Seasonal Disease Alert', color: '#ef4444', content: 'Monsoon season alert: High risk of Dengue, Malaria, and Cholera. Use mosquito repellents, wear full-sleeve clothes, and ensure drinking water is boiled.' },
                { icon: '💉', title: 'Vaccination Awareness', color: '#6366f1', content: 'Stay up-to-date with immunizations. COVID-19, Flu, Hepatitis B, Typhoid, and Polio vaccines are available at all government health centers free of charge.' },
                { icon: '🩸', title: 'Blood Donation Drive', color: '#ef4444', content: 'Blood donation saves lives. Donate every 3 months if eligible. Visit your nearest blood bank or government hospital. One donation can save up to 3 lives.' },
                { icon: '🫀', title: 'Organ Donation Awareness', color: '#0d9488', content: 'Register as an organ donor today. One organ donor can save up to 8 lives. Contact the National Organ and Tissue Transplant Organisation (NOTTO) to pledge.' },
                { icon: '☀️', title: 'Daily Health Tips', color: '#f59e0b', content: 'Today\'s tip: Walk at least 30 minutes daily, drink 8 glasses of water, eat a rainbow of vegetables, sleep 7-8 hours, and practice 5 minutes of deep breathing.' },
                { icon: '🧠', title: 'Mental Health Resources', color: '#8b5cf6', content: 'You are not alone. iCall helpline: 9152987821 | VANDREVALA helpline: 1860-2662-345 (24/7). Mental health is as important as physical health. Reach out today.' },
                { icon: '🏃', title: 'Fitness Campaign', color: '#10b981', content: 'Join the "Fit India Movement". Regular exercise reduces the risk of heart disease, diabetes, and depression by up to 50%. Start small, stay consistent.' },
                { icon: '🚫', title: 'Anti-Tobacco Campaign', color: '#f97316', content: 'Smoking kills 1 million Indians every year. Quit tobacco to drastically reduce your risk of lung cancer, heart disease, and stroke. Call quitline: 1800-11-2356.' },
              ].map((card) => (
                <div key={card.title} className="glass-panel" style={{ padding: 24 }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{card.icon}</div>
                  <h3 style={{ color: card.color, marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7 }}>{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== AI CHATBOT PAGE ===== */}
        {currentPage === 'chatbot' && (
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>🤖 AI Health Assistant</h1>
            <p style={{ color: '#9ca3af', marginBottom: 24 }}>Ask me anything about health symptoms, remedies, or general wellness guidance.</p>
            <div className="glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 560 }}>
              {/* Chat messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {chatMessages.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ maxWidth: '80%', padding: '12px 18px', borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px', background: msg.role === 'user' ? 'linear-gradient(135deg, #0d9488, #14b8a6)' : 'rgba(18,24,44,0.95)', border: msg.role === 'bot' ? '1px solid rgba(20,184,166,0.2)' : 'none', color: '#ffffff', fontSize: 15, lineHeight: 1.6 }}>
                      {msg.role === 'bot' && <span style={{ fontSize: 18, marginRight: 8 }}>🤖</span>}
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              {/* Input */}
              <div style={{ padding: 20, borderTop: '1px solid rgba(20,184,166,0.15)', display: 'flex', gap: 12 }}>
                <input id="chatbot-input" className="form-input" style={{ flex: 1 }} type="text" placeholder="Ask about fever, cough, heart health, anxiety..." value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleChatSend()} aria-label="Chat message input" />
                <button id="chatbot-send-btn" className="btn btn-primary" onClick={handleChatSend} aria-label="Send message">Send →</button>
              </div>
            </div>
            {/* Quick prompts */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
              {["I have a fever", "Cough remedies", "Anxiety tips", "COVID symptoms", "Heart pain advice"].map(prompt => (
                <button key={prompt} className="symptom-tag" onClick={() => { setChatInput(prompt); setTimeout(handleChatSend, 50); }}>{prompt}</button>
              ))}
            </div>
          </div>
        )}

        {/* ===== FAQ PAGE ===== */}
        {currentPage === 'faq' && (
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>{t.faqTitle}</h1>
            <p style={{ color: '#9ca3af', marginBottom: 32 }}>{t.faqSub}</p>
            <div className="glass-panel" style={{ overflow: 'hidden' }}>
              {faqData.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                  <button className="faq-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} id={`faq-trigger-${i}`} aria-controls={`faq-content-${i}`}>
                    <span>{faq.q}</span>
                    <span style={{ color: '#0d9488', fontSize: 20, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div id={`faq-content-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`} style={{ padding: '0 20px 20px', color: '#9ca3af', fontSize: 15, lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== CONTACT PAGE ===== */}
        {currentPage === 'contact' && (
          <div>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>{t.contactTitle}</h1>
            <p style={{ color: '#9ca3af', marginBottom: 32 }}>{t.contactSub}</p>
            <div className="contact-grid">
              <div className="glass-panel" style={{ padding: 32 }}>
                <form onSubmit={handleContact}>
                  {[['name', t.fullName, 'text'], ['email', t.email, 'email'], ['subject', t.subject, 'text']].map(([key, label, type]) => (
                    <div key={key} style={{ marginBottom: 16 }}>
                      <label className="form-label" htmlFor={`contact-${key}`}>{label}</label>
                      <input id={`contact-${key}`} className="form-input" type={type} value={contactForm[key]} onChange={e => setContactForm({ ...contactForm, [key]: e.target.value })} required />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label className="form-label" htmlFor="contact-message">{t.message}</label>
                    <textarea id="contact-message" className="form-textarea" rows={5} value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} required />
                  </div>
                  {contactStatus && <p style={{ color: contactStatus.includes('success') || contactStatus.includes('✅') ? '#10b981' : '#ef4444', marginBottom: 12, fontSize: 14 }}>{contactStatus}</p>}
                  <button id="contact-submit-btn" type="submit" className="btn btn-primary" style={{ width: '100%' }}>{t.submitMessage}</button>
                </form>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ icon: '🏥', title: 'Health Ministry Integration', desc: 'CareTrack AI is designed for integration with national health authorities and state-level public health departments.' }, { icon: '🤝', title: 'NGO Partnerships', desc: 'We welcome collaborations with health NGOs, rural healthcare programs, and community health workers for expanded outreach.' }, { icon: '🔬', title: 'Research & Academia', desc: 'Universities and research institutions can access anonymized aggregate health trend data for epidemiological research.' }, { icon: '🌐', title: 'Open API Access', desc: 'REST API endpoints are available for integration with existing hospital management systems and telemedicine platforms.' }].map(item => (
                  <div key={item.title} className="glass-panel" style={{ padding: 20 }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                    <h4 style={{ color: '#0d9488', marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== HISTORY PAGE ===== */}
        {currentPage === 'history' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
              <div>
                <h1 style={{ fontSize: 32, marginBottom: 4 }}>📜 Scan History</h1>
                <p style={{ color: '#9ca3af' }}>Your last {scanHistory.length} AI diagnostic scans — stored locally on this device.</p>
              </div>
              {scanHistory.length > 0 && (
                <button className="btn btn-secondary" style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
                  onClick={() => { localStorage.removeItem('ct_history'); setScanHistory([]); }}>
                  🗑️ Clear All History
                </button>
              )}
            </div>

            {scanHistory.length === 0 ? (
              <div className="glass-panel" style={{ padding: 60, textAlign: 'center' }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>📋</div>
                <h3 style={{ marginBottom: 8 }}>No Scan History Yet</h3>
                <p style={{ color: '#9ca3af', marginBottom: 24 }}>Run your first AI Symptom Analysis and your results will automatically appear here.</p>
                <button className="btn btn-primary" onClick={() => setCurrentPage('analyzer')}>🔬 Start Symptom Analyzer</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {scanHistory.map((entry, idx) => (
                  <div key={entry.id} className="glass-panel" style={{ padding: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                          <span style={{ color: '#9ca3af', fontSize: 13 }}>#{scanHistory.length - idx} — {entry.id}</span>
                          <span style={{
                            background: `${getRiskColor(entry.riskLevel)}22`,
                            color: getRiskColor(entry.riskLevel),
                            border: `1px solid ${getRiskColor(entry.riskLevel)}44`,
                            borderRadius: 8, padding: '2px 10px', fontSize: 12, fontWeight: 700
                          }}>{entry.riskLevel} Risk</span>
                        </div>
                        <h3 style={{ fontSize: 20, marginBottom: 6 }}>{entry.topDisease}</h3>
                        <p style={{ color: '#9ca3af', fontSize: 14 }}>
                          {new Date(entry.timestamp).toLocaleString()} &nbsp;·&nbsp; {entry.symptoms.length} symptom{entry.symptoms.length !== 1 ? 's' : ''} selected
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 36, fontWeight: 800, color: getRiskColor(entry.riskLevel) }}>
                          {entry.probability}%
                        </span>
                        <button className="btn btn-primary" style={{ padding: '6px 16px', fontSize: 13 }}
                          onClick={() => { setPredictions(entry.predictions); setSelectedSymptoms(entry.symptoms); setCurrentPage('results'); }}>
                          View Results →
                        </button>
                      </div>
                    </div>
                    {entry.predictions.length > 1 && (
                      <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 10 }}>Other predicted conditions:</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          {entry.predictions.slice(1).map(p => (
                            <span key={p.id} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '3px 12px', fontSize: 13, color: '#d1d5db' }}>
                              {p.name} ({p.probability}%)
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid rgba(20,184,166,0.1)', background: 'rgba(7,10,19,0.9)', padding: '40px 20px', textAlign: 'center', marginTop: 60 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <svg width="28" height="28" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="44" fill="rgba(13,148,136,0.15)" stroke="#0d9488" strokeWidth="2" />
            <path d="M45 20 L45 70 M20 45 L70 45" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 18, color: '#ffffff' }}>CareTrack AI</span>
        </div>
        <p style={{ color: '#9ca3af', fontSize: 13, marginBottom: 8 }}>Smarter Symptom Analysis. Faster Health Decisions.</p>
        <p style={{ color: '#374151', fontSize: 12 }}>© 2026 CareTrack AI Public Health Initiative. For educational and awareness purposes only.</p>
        <p style={{ color: '#374151', fontSize: 12, marginTop: 4 }}>Not a substitute for professional medical advice. Always consult a certified healthcare professional.</p>
      </footer>

      {/* Hidden template for PDF generation */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <div ref={reportTemplateRef} style={{
          width: '800px',
          padding: '40px',
          background: '#ffffff',
          color: '#111111',
          fontFamily: 'Arial, sans-serif'
        }}>
          {/* Header */}
          <div style={{
            background: '#0d9488',
            color: '#ffffff',
            padding: '24px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            <h1 style={{ margin: 0, fontSize: '26px' }}>
              🏥 CareTrack AI — Clinical Assessment Report
            </h1>
            <p style={{ margin: '6px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
              Smarter Symptom Analysis. Faster Health Decisions.
            </p>
          </div>

          {/* Patient Details */}
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#0d9488', marginTop: 0, borderBottom: '2px solid #f3f4f6', paddingBottom: '8px', fontSize: '18px' }}>
              Patient Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px', lineHeight: '1.6' }}>
              <div><strong>Name:</strong> {user?.name || profile?.fullName || 'Guest User'}</div>
              <div><strong>Email:</strong> {user?.email || profile?.email || 'N/A'}</div>
              <div><strong>Age:</strong> {profile?.age || 'N/A'} yrs | <strong>Gender:</strong> {profile?.gender || 'N/A'}</div>
              <div><strong>Blood Group:</strong> {profile?.bloodGroup || 'N/A'}</div>
              <div><strong>Report ID:</strong> {reportId}</div>
              <div><strong>Date:</strong> {new Date().toLocaleString()}</div>
            </div>
          </div>

          {/* Reported Symptoms */}
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#0d9488', marginTop: 0, borderBottom: '2px solid #f3f4f6', paddingBottom: '8px', fontSize: '18px' }}>
              Reported Symptoms ({selectedSymptoms.length})
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
              {selectedSymptoms.map(sid => {
                const s = allSymptoms.find(sym => sym.id === sid);
                return (
                  <span key={sid} style={{
                    background: '#f3f4f6',
                    color: '#1f2937',
                    padding: '4px 10px',
                    borderRadius: '16px',
                    fontSize: '13px',
                    fontWeight: 500
                  }}>
                    {s?.name || sid}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Predictions */}
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#0d9488', marginTop: 0, borderBottom: '2px solid #f3f4f6', paddingBottom: '8px', fontSize: '18px' }}>
              AI Disease Predictions (Top 5)
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginTop: '8px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0', color: '#6b7280' }}># Condition</th>
                  <th style={{ padding: '8px 0', color: '#6b7280', textAlign: 'center' }}>Risk Level</th>
                  <th style={{ padding: '8px 0', color: '#6b7280', textAlign: 'right' }}>Probability</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((p, idx) => {
                  const risk = getRiskLevel(p.probability);
                  const riskColor = getRiskColor(risk);
                  return (
                    <tr key={p.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <td style={{ padding: '10px 0', fontWeight: 600 }}>{idx + 1}. {p.name}</td>
                      <td style={{ padding: '10px 0', textAlign: 'center' }}>
                        <span style={{
                          background: `${riskColor}15`,
                          color: riskColor,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          border: `1px solid ${riskColor}33`
                        }}>
                          {risk} Risk
                        </span>
                      </td>
                      <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 'bold', color: riskColor }}>
                        {p.probability}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Remedies and advice */}
          {predictions.length > 0 && predictions[0].remedies && (
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: '#0d9488', marginTop: 0, borderBottom: '2px solid #f3f4f6', paddingBottom: '8px', fontSize: '18px' }}>
                Home Care Advice & Recommendations (for {predictions[0].name})
              </h3>
              <div style={{ marginTop: '12px' }}>
                <h4 style={{ color: '#10b981', margin: '8px 0 4px 0', fontSize: '14px' }}>🌿 Home Remedies</h4>
                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                  {predictions[0].remedies.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
              {predictions[0].diet && (
                <div style={{ marginTop: '12px' }}>
                  <h4 style={{ color: '#f59e0b', margin: '8px 0 4px 0', fontSize: '14px' }}>🥗 Dietary Guidelines</h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                    {predictions[0].diet.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              )}
              {predictions[0].hydration && (
                <div style={{ marginTop: '12px' }}>
                  <h4 style={{ color: '#6366f1', margin: '8px 0 4px 0', fontSize: '14px' }}>💧 Hydration Guidance</h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                    {predictions[0].hydration.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Emergency Alert (if high risk) */}
          {highestRisk === 'High' && (
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
              color: '#991b1b'
            }}>
              <h3 style={{ color: '#dc2626', marginTop: 0, fontSize: '18px' }}>
                🚨 High Risk Alert - Urgent Actions Recommended
              </h3>
              <p style={{ fontSize: '14px', margin: '6px 0 12px 0', fontWeight: 600 }}>
                A high probability correlation has been identified. Please seek professional medical evaluation immediately.
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                <li>Do not engage in strenuous physical activity.</li>
                <li>Proceed to the nearest clinic or public health center.</li>
                <li>Prepare a list of your current medications and health history.</li>
              </ul>
            </div>
          )}

          {/* Footer / Disclaimer */}
          <div style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '16px',
            fontSize: '11px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Medical Disclaimer:</strong> CareTrack AI provides symptom matching insights for educational awareness only. It is not a substitute for professional medical advice, clinical diagnosis, prescription, or treatment. Always consult a certified healthcare professional.
            </p>
            <p style={{ margin: 0, textAlign: 'center', fontWeight: 'bold' }}>
              © 2026 CareTrack AI Public Health Initiative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
