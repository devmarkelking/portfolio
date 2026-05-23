import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Ensure in-memory database of received inquiries for elite, real-world operation!
interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'Received' | 'Refining-Response' | 'Processed';
}

const contactInquiries: ContactInquiry[] = [
  {
    id: "setup-welcomer",
    name: "System",
    email: "system@architect.php",
    message: "Live server initialized! Enter your details above to test Mark's communication queue.",
    timestamp: new Date().toISOString(),
    status: 'Processed'
  }
];

// Lazy-initialization function for GoogleGenAI to prevent startup crashes if GEMINI_API_KEY is not defined yet.
let aiInstance: any = null;
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY is missing from environment variables. Running in simulation mode.");
    return null;
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiInstance;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API 1: Healthcheck
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Architect Server live." });
  });

  // API 2: Contact form submission with simulation status cycle
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newInquiry: ContactInquiry = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      status: 'Received'
    };

    contactInquiries.push(newInquiry);

    // Auto update status to simulating response preparation
    setTimeout(() => {
      const idx = contactInquiries.findIndex(item => item.id === newInquiry.id);
      if (idx !== -1) {
        contactInquiries[idx].status = 'Refining-Response';
      }
    }, 3000);

    res.status(201).json({ 
      success: true, 
      message: "Message dispatched to Mark's digital queues.",
      inquiry: newInquiry
    });
  });

  // List inquiries (allows user to see their messages in real-time)
  app.get("/api/contact/messages", (req, res) => {
    res.json(contactInquiries);
  });

  // API 3: Gemini Chat portfolio agent proxy
  app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "A valid list of messages is required." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Simulate intelligent fallback if API key is not present yet
      const lastUserMsg = messages[messages.length - 1]?.text || "";
      const lowercaseMsg = lastUserMsg.toLowerCase();
      let simulatedAnswer = "";

      if (lowercaseMsg.includes("laravel") || lowercaseMsg.includes("php")) {
        simulatedAnswer = "I have over 7 years of deep PHP experience, specifically building robust backends with **Laravel** (up to version 11) and **Magento 2**. I focus on PSR clean layout patterns, Varnish optimization, and dependency injection.";
      } else if (lowercaseMsg.includes("magento") || lowercaseMsg.includes("commerce")) {
        simulatedAnswer = "Yes! **Magento 2 Enterprise e-commerce** is my chief specialism. I handle custom module development, backend API integrations, multi-store layouts, database query optimizations, and Redis caching architectures.";
      } else if (lowercaseMsg.includes("project") || lowercaseMsg.includes("portfolio")) {
        simulatedAnswer = "I've included two major featured projects in my catalog: **TrailReadyParts E-commerce** (custom Magento 2 enterprise store with real-time ERP syncing) and **Good Price Pharmacy E-commerce** (handling upgrades, custom prescription workflows, and zero downtime CI/CD).";
      } else {
        simulatedAnswer = `Hello! I am Mark Elking's custom virtual profile assistant. (Note: Gemini API key is currently in sandbox/simulation mode). I can confirm that Mark has 7+ years of web engineering experience in PHP, Magento 2, Laravel, WordPress, and React. He resides in Manila, Philippines. How can I help you find out more about his credentials?`;
      }

      return res.json({ text: simulatedAnswer, simulated: true });
    }

    try {
      const systemInstruction = `You are Mark Elking's digital twin AI portfolio assistant. You represent Mark Elking, a highly skilled Senior PHP & Magento 2 Developer with over 7 years of deep professional experience. Mark earned his BS in Information Technology in 2017 and lives in Manila, Philippines. 

Be highly professional, informative, technically accurate, warm, and helpful. Write clear, structured responses with markdown formatting. Speak in the first person ("I", "my") as Mark Elking, or as his automated twin assistant representing his skills.

Essential Resume Facts:
- Experience: 7+ years of professional web engineering. Currently building high-performance e-commerce platforms. Master of custom Magento 2 module design, complex systems architecture, API integrations, and database performance.
- Tech Stack:
  * Backend: PHP 8.x, Magento 2, Laravel, CodeIgniter, MySQL, Redis, REST APIs, Node.js.
  * Frontend: React, Next.js, Tailwind CSS, Alpine.js, TypeScript, JavaScript, HTML5, CSS3, WordPress custom layouts.
  * Tools & Infrastructure: Docker containers, Git/GitHub versioning, Varnish Cache, REST integrations, Linux VPS management, CI/CD automated test runners.
- Core Accomplishments:
  * TrailReadyParts: Designed and built a custom Magento 2 store from Figma drafts. Developed regional shipping logic, Varnish caches, and real-time ERP warehouse inventory syncing. Conversion rate improved by 22%.
  * Good Price Pharmacy (Australia): Extended existing Magento modules for a massive pharmacy store chain. Developed zero-downtime deployment runs, automated prescription validations, high compatibility emails, and cleaned legacy module queries.

Answer any query accurately. Do not invent facts beyond these profiles. If asked about salary, rates, or availability, mention that we should schedule a direct consultation or send a message via the Contact Form.`;

      // Structure messages correctly for @google/genai SDK
      // Using gemini-3.5-flash as recommended for basic Q&A
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: messages.map((m: any) => ({
          role: m.role || 'user',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ text: response.text || "" });
    } catch (err: any) {
      console.error("Gemini call error:", err);
      return res.status(500).json({ error: "Failed to communicate with portfolio assistant: " + err.message });
    }
  });

  // Vite IntegrationMiddleware for dev or static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
