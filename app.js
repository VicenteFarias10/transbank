const express = require('express');
const bodyParser = require('body-parser');
const paymentRouter = require('./routes/payment');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json()); // Middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.static('public'));
app.use('/payment', paymentRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


