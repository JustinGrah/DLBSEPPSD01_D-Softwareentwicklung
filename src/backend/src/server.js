import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Umgebungsvariablen laden
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Test-Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend ist erreichbar!'
  });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
});
