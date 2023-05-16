// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Alexandre
// 09/05

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Definindo modelo para a entidade "Nave"
const Nave = {
  id: Number,
  name: String,
  model: String,
  planet: { type: Number, ref: 'Planeta' },
  species: [{ type: Number, ref: 'Especie' }]
};

// Definindo modelo para a entidade "Planeta"
const Planeta = {
  id: Number,
  name: String,
  climate: String,
  population: Number,
  ships: [{ type: Number, ref: 'Nave' }]
};

// Definindo modelo para a entidade "Espécie"
const Especie = {
  id: Number,
  name: String,
  classification: String,
  ships: [{ type: Number, ref: 'Nave' }]
};

// Simulando dados das entidades
const naves = [
  { id: 1, name: 'Millennium Falcon', model: 'YT-1300', planet: 1, species: [1, 2] },
  { id: 2, name: 'X-wing', model: 'T-65 X-wing', planet: 2, species: [3] }
];

const planetas = [
  { id: 1, name: 'Tatooine', climate: 'Arid', population: 200000, ships: [1] },
  { id: 2, name: 'Hoth', climate: 'Frozen', population: 0, ships: [2] }
];

const especies = [
  { id: 1, name: 'Human', classification: 'Mammal', ships: [1] },
  { id: 2, name: 'Wookiee', classification: 'Mammal', ships: [1] },
  { id: 3, name: 'Droid', classification: 'Artificial', ships: [2] }
];

// Consulta uma nave e suas informações relacionadas
app.get('/nave/:id', (req, res) => {
  const nave = naves.find(n => n.id === parseInt(req.params.id));
  if (!nave) return res.status(404).send('Nave não encontrada');
  const planeta = planetas.find(p => p.id === nave.planet);
  const especiesRelacionadas = especies.filter(e => nave.species.includes(e.id));
  nave.planet = planeta;
  nave.species = especiesRelacionadas;
  res.send(nave);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
