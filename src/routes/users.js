import express from 'express';

const router = express.Router();

// In-memory store — demo only, not for production
const users = [];

// Regex de validación de email (RFC 5322 simplificado)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /users — crea un usuario
router.post('/', (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name es requerido' });
    }

    if (!email) {
      return res.status(400).json({ error: 'Email es requerido' });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    const user = { id: users.length + 1, name, email };
    users.push(user);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// GET /users — lista todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// GET /users/:id — obtiene un usuario por ID
router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(user);
});

export default router;
