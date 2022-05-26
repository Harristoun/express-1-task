const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send(["you", "i", "we"]);
});

app.post("/users", (req, res) => {
  res.send("Юзер Добавлен");
});

app.get("/admim", (req, res) => {
  res.send("Не хватает прав доступа");
});

  app.delete('users/:id', (req, res)=> {
      res.json(`юзер с id: ID удален ${req.params.id}`)
  })


  app.patch('users/:id', (req,res)=> {
      res.json(`Юзер с if: ID изменен ${req.params.id}`)
  })


  app.get('admin/:id', (req,res) =>{
      res.json(`Не хватает прав доступа ${req.params.id}`)
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

