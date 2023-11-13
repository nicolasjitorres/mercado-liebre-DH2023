const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public")); //Se utiliza para obtener archivos estaticos como pueden ser imagenes o estilos, a traves de una ruta especifica.

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}...`);
});

// HOME
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

// REGISTER
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

// LOGIN
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

