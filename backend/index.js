const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("API funcionando en local 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde Express API 🚀" });
});


// Aquí luego agregaremos:
// - endpoints para BD
// - subida de archivos
// - etc.

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor Express escuchando en puerto ${PORT}`);
});