const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  // Retornar JSON si el cliente solicita explícitamente application/json
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.status(200).json({
      status: 'success',
      message: 'Hola Mundo desde DevOps CI/CD!'
    });
  }

  // Página Web HTML con diseño moderno
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hola Mundo - DevOps CI/CD</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
      <style>
        :root {
          --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%);
          --card-bg: rgba(30, 41, 59, 0.7);
          --card-border: rgba(255, 255, 255, 0.1);
          --primary-glow: #6366f1;
          --accent-cyan: #06b6d4;
          --accent-green: #10b981;
          --text-main: #f8fafc;
          --text-muted: #94a3b8;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Outfit', sans-serif;
          background: var(--bg-gradient);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          overflow-x: hidden;
          padding: 1.5rem;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 0;
          animation: float 10s ease-in-out infinite alternate;
        }
        .orb-1 {
          width: 350px;
          height: 350px;
          background: var(--primary-glow);
          top: 10%;
          left: 15%;
        }
        .orb-2 {
          width: 300px;
          height: 300px;
          background: var(--accent-cyan);
          bottom: 10%;
          right: 15%;
          animation-delay: -5s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, 30px) scale(1.1); }
        }

        .container {
          position: relative;
          z-index: 10;
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          max-width: 650px;
          width: 100%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                      0 0 40px rgba(99, 102, 241, 0.15);
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--accent-green);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-green);
          box-shadow: 0 0 10px var(--accent-green);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        h1 {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        p.description {
          color: var(--text-muted);
          font-size: 1.125rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .pipeline-flow {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          margin-bottom: 2.5rem;
        }

        .step-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 1rem 0.75rem;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-3px);
        }

        .step-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .step-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .footer-info {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(15, 23, 42, 0.8);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-info span {
          color: var(--accent-cyan);
        }
      </style>
    </head>
    <body>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>

      <div class="container">
        <div class="badge">
          <span class="status-dot"></span>
          Sistema En Línea
        </div>

        <h1>Hola Mundo desde DevOps CI/CD! 🚀</h1>
        
        <p class="description">
          Aplicación web construida con Node.js, empaquetada en Docker y desplegada automáticamente mediante <strong>GitHub Actions</strong> y <strong>Render</strong>.
        </p>

        <div class="pipeline-flow">
          <div class="step-card">
            <div class="step-icon">⚡</div>
            <div class="step-title">Node.js</div>
          </div>
          <div class="step-card">
            <div class="step-icon">🧪</div>
            <div class="step-title">Jest Tests</div>
          </div>
          <div class="step-card">
            <div class="step-icon">🐳</div>
            <div class="step-title">Docker Hub</div>
          </div>
          <div class="step-card">
            <div class="step-icon">☁️</div>
            <div class="step-title">Render</div>
          </div>
        </div>

        <div class="footer-info">
          <div>Estado: <span>200 OK</span></div>
          <div>Entorno: <span>Producción</span></div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
