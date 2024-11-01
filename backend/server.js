import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;

const app = express();
app.use(cors());
app.use(json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "usuario" && password === "1234") {
    res.json({ username: "usuario", role: "user", token: "abc123" });
  } else {
    res.status(401).json({ error: "Credenciales incorrectas" });
  }
});

app.listen(5000, () => {
  console.log("Servidor backend escuchando en el puerto 5000");
});
