const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Señal SIGTERM recibida: Cerrando servidor HTTP de forma limpia...');
  server.close(() => {
    console.log('Servidor HTTP cerrado.');
    process.exit(0);
  });
});
