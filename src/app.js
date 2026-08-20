const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.status(200).json({
      status: 'success',
      message: 'Hola Mundo desde DevOps CI/CD!'
    });
  }

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hola Mundo desde DevOps CI/CD</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #f1f5f9;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .card {
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 50px 40px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
          max-width: 520px;
          width: 100%;
        }

        h1 {
          color: #0f172a;
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.3;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Hola Mundo desde DevOps CI/CD!</h1>
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
