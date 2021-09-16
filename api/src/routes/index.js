const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const temperamentsr = require('./TemperamentR');
const dogsr = require('./DogR');
const razaR = require('./RazaR');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/temperaments', temperamentsr);
router.use('/dogs', dogsr);
router.use('/razas', razaR);



module.exports = router;
