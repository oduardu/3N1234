const express = require('express')
const app = express()
const port = 3001
const database = require('./database')
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`🔥 - Server is RUNNING! \nURL: localhost:${port}`)
})

app.get(['/', '/index'], (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.get('/cursos', (req, res) => {
  res.json(database.cursos)
})

app.get('/cursos/:id', (req, res) => {
  const { id } = req.params
  const curso = database.cursos.find(curso => curso.id === parseInt(id))
  if (curso) {
    res.json(curso)
  } else {
    res.status(404).send('Curso não encontrado')
  }
})

app.post('/cursos', (req, res) => {
  console.log(req.body);
  const { id, nome, turno, id_campus } = req.body
  const novoCurso = { id, nome, turno, id_campus }
  database.cursos.push(novoCurso)
  res.status(201).send('Curso adicionado com sucesso')
})

app.put('/cursos/:id', (req, res) => {
  const { id } = req.params
  const { nome, turno, id_campus } = req.body
  const index = database.cursos.findIndex(curso => curso.id === parseInt(id))
  if (index !== -1) {
    database.cursos[index] = { id: parseInt(id), nome, turno, id_campus }
    res.send('Curso atualizado com sucesso')
  } else {
    res.status(404).send('Curso não encontrado')
  }
})

app.delete('/cursos/:id', (req, res) => {
  const { id } = req.params
  const index = database.cursos.findIndex(curso => curso.id === parseInt(id))
  if (index !== -1) {
    database.cursos.splice(index, 1)
    res.send('Curso removido com sucesso')
  } else {
    res.status(404).send('Curso não encontrado')
  }
})

app.get('/ccrs', (req, res) => {
  res.json(database.ccrs)
})

app.get('/ccrs/:id', (req, res) => {
  const { id } = req.params
  const ccr = database.ccrs.find(ccr => ccr.id === id)
  if (ccr) {
    res.json(ccr)
  } else {
    res.status(404).send('CCR não encontrado')
  }
})

app.post('/ccrs', (req, res) => {
  const { id, nome } = req.body
  const novoCCR = { id, nome }
  database.ccrs.push(novoCCR)
  res.status(201).send('CCR adicionado com sucesso')
})

app.put('/ccrs/:id', (req, res) => {
  const { id } = req.params
  const { nome } = req.body
  const index = database.ccrs.findIndex(ccr => ccr.id === id)
  if (index !== -1) {
    database.ccrs[index] = { id, nome }
    res.send('CCR atualizado com sucesso')
  } else {
    res.status(404).send('CCR não encontrado')
  }
})

app.delete('/ccrs/:id', (req, res) => {
  const { id } = req.params
  const index = database.ccrs.findIndex(ccr => ccr.id === id)
  if (index !== -1) {
    database.ccrs.splice(index, 1)
    res.send('CCR removido com sucesso')
  } else {
    res.status(404).send('CCR não encontrado')
  }
})
