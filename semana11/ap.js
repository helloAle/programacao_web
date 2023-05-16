const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Classe para a camada de modelo - Espécie
class Especie {
  constructor(id, nome, classificacao) {
    this.id = id;
    this.nome = nome;
    this.classificacao = classificacao;
  }
}

// Classe para a camada de modelo - Planeta
class Planeta {
  constructor(id, nome, clima, populacao) {
    this.id = id;
    this.nome = nome;
    this.clima = clima;
    this.populacao = populacao;
  }
}

// Classe para a camada de modelo - Nave
class Nave {
  constructor(id, nome, modelo, planetaId, especies) {
    this.id = id;
    this.nome = nome;
    this.modelo = modelo;
    this.planetaId = planetaId;
    this.especies = especies;
  }
}

// Simulando dados das entidades
let especies = [
  new Especie(1, 'Humano', 'Mamífero'),
  new Especie(2, 'Wookiee', 'Mamífero'),
  new Especie(3, 'Droide', 'Artificial'),
];

let planetas = [
  new Planeta(1, 'Tatooine', 'Árido', 200000),
  new Planeta(2, 'Hoth', 'Congelado', 0),
];

let naves = [
  new Nave(1, 'Millennium Falcon', 'YT-1300', 1, [1, 2]),
  new Nave(2, 'X-wing', 'T-65 X-wing', 2, [3]),
];

// Classe para a camada de controller - Espécie
class EspecieController {
  static listar(req, res) {
    res.status(200).json(especies);
  }

  static cadastrar(req, res) {
    const { nome, classificacao } = req.body;
    const id = especies.length + 1;
    const especie = new Especie(id, nome, classificacao);
    especies.push(especie);
    res.status(201).send(`Espécie ${nome} cadastrada com sucesso.`);
  }
}

// Classe para a camada de controller - Planeta
class PlanetaController {
  static listar(req, res) {
    res.status(200).json(planetas);
  }

  static cadastrar(req, res) {
    const { nome, clima, populacao } = req.body;
    const id = planetas.length + 1;
    const planeta = new Planeta(id, nome, clima, populacao);
    planetas.push(planeta);
    res.status(201).send(`Planeta ${nome} cadastrado com sucesso.`);
  }
}

// Classe para a camada de controller - Nave
class NaveController {
  static listar(req, res) {
    res.status(200).json(naves);
  }

  static cadastrar(req, res) {
    const { nome, modelo, planetaId, especies } = req.body;
    const id = naves.length + 1;
    const nave = new Nave(id, nome, modelo, planetaId, especies);
    naves.push(nave);
    res.status(201).send(`Nave ${nome} cadastrada com sucesso.`);
}
}

// Rotas para Espécie
app.get('/especies', EspecieController.listar);
app.post('/especies', EspecieController.cadastrar);

// Rotas para Planeta
app.get('/planetas', PlanetaController.listar);
app.post('/planetas', PlanetaController.cadastrar);

// Rotas para Nave
app.get('/naves', NaveController.listar);
app.post('/naves', NaveController.cadastrar);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });