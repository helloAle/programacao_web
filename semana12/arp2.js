// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre
// 09/05

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let appointments = [];

// Rota para cadastrar um agendamento
app.post('/appointments', (req, res) => {
  const { patientName, date } = req.body;
  const appointment = { patientName, date };
  appointments.push(appointment);
  res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`);
});

// Rota para listar todos os agendamentos
app.get('/appointments', (req, res) => {
  res.status(200).json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
