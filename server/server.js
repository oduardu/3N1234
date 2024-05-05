const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const database = require('../server/secret-keys')

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`🔥 - Server is RUNNING! \nURL: localhost:${port}`)
})

app.get(['/', '/index'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.get('/cursos', async (req, res) => {
  try {
    const cursos = await database.any('SELECT * FROM cursos');
    res.json(cursos);
  } catch (error) {
    res.status(500).send('Erro ao buscar cursos.');
  }
})

app.get('/cursos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const curso = await database.oneOrNone('SELECT * FROM cursos WHERE id = $1', [parseInt(id)]);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).send('Curso não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar curso');
  }
})

app.post('/cursos', async (req, res) => {
  const { nome, turno, id_campus } = req.body;
  try {
    await database.none('INSERT INTO cursos (nome, turno, id_campus) VALUES ($1, $2, $3)', [nome, turno, id_campus]);
    res.status(201).send('Curso adicionado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao adicionar curso.');
  }
})

app.put('/cursos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, turno, id_campus } = req.body;
  try {
    const result = await database.result('UPDATE cursos SET nome = $1, turno = $2, id_campus = $3 WHERE id = $4', [nome, turno, id_campus, parseInt(id)]);
    if (result.rowCount > 0) {
      res.send('Curso atualizado com sucesso');
    } else {
      res.status(404).send('Curso não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao atualizar curso');
  }
})

app.delete('/cursos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await database.result('DELETE FROM cursos WHERE id = $1', [parseInt(id)]);
    if (result.rowCount > 0) {
      res.send('Curso removido com sucesso');
    } else {
      res.status(404).send('Curso não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao remover curso');
  }
})

app.get('/ccrs', async (req, res) => {
  try {
    const ccrs = await database.any('SELECT * FROM ccrs');
    res.json(ccrs);
  } catch (error) {
    res.status(500).send('Erro ao buscar CCRs');
  }
})

app.get('/ccrs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ccr = await database.oneOrNone('SELECT * FROM ccrs WHERE id = $1', [id]);
    if (ccr) {
      res.json(ccr);
    } else {
      res.status(404).send('CCR não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar CCR');
  }
})

app.post('/ccrs', async (req, res) => {
  const { id, nome } = req.body;
  try {
    await database.none('INSERT INTO ccrs (id, nome) VALUES ($1, $2)', [id, nome]);
    res.status(201).send('CCR adicionado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao adicionar CCR');
  }
})

app.put('/ccrs/:id', async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    const result = await database.result('UPDATE ccrs SET nome = $1 WHERE id = $2', [nome, id]);
    if (result.rowCount > 0) {
      res.send('CCR atualizado com sucesso');
    } else {
      res.status(404).send('CCR não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao atualizar CCR');
  }
})

app.delete('/ccrs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await database.result('DELETE FROM ccrs WHERE id = $1', [id]);
    if (result.rowCount > 0) {
      res.send('CCR removido com sucesso');
    } else {
      res.status(404).send('CCR não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao remover CCR');
  }
})

app.get('/curso-ccrs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const ccrs = await database.any('SELECT * FROM ccrs WHERE curso_id = $1', [parseInt(id)]);
    res.json(ccrs);
  } catch (error) {
    res.status(500).send('Erro ao buscar CCRs do curso');
  }
})
