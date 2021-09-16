require('dotenv').config();

const {
    getDataApiTotal, 
    getDataApiSearch, 
    getDataBdTotal, 
    getDataBdSearch,
    getDataTotalByIdApi,
    getDataTotalByIdBd
 } = require('./Functions.get')
const { Router } = require('express');
const { Dog, Raza } = require('../db.js');
const { v4: uuidv4 } = require('uuid');


const router = Router();


// get all data concat 
router.get('/all', async (req, res) => {

    const dataApiTotal = await getDataApiTotal();
    const dataBdTotal = await getDataBdTotal(); 
    const infoTotal = dataBdTotal.concat(dataApiTotal);

    res.status(200).json(infoTotal);
});


router.get('/search', async (req,res) => {
    
    const {q} = req.query  
        
    try {
        console.log("entro al search ", q)
            const dataInfoApi = await getDataApiSearch(q);
            const dbDogsName = await getDataBdSearch(q);  
                         

            if(dbDogsName.length === 0 && dataInfoApi.length === 0){
                res.send("No hay resultados para tu busqueda")
            }else{
                const dataTotalN = dbDogsName.concat(dataInfoApi);
                res.status(200).json(dataTotalN);
            }  
    } catch (e) {
        console.log(e);
    }
})

router.get('/detail/:idRaza', async (req, res) => {

    
    const IdRaza = req.params.idRaza;
    var infoTotal = [];

    try {

        if(typeof IdRaza === "string" && IdRaza.length > 10){

            infoTotal =  await getDataTotalByIdBd(IdRaza);           
        } else{
            infoTotal = await getDataTotalByIdApi(IdRaza);
        }       
        
        res.json(infoTotal);
        
    } catch (e) {
        console.log(e);
    }
});

router.post('/', async (req, res) => {
    
       
    try { 
        const {RazaId, temperaments, Nombre, Altura, Peso, Anos_de_vida, Imagen } = req.body;
        
        //console.log("datos", RazaId, temperaments, Nombre, Altura, Peso, Anos_de_vida, Imagen)
        const createdDog = await Dog.create({
            ID: uuidv4(),            
            Nombre,
            Altura, 
            Peso, 
            Anos_de_vida,
            Imagen,
            razaId: RazaId

          }, {
            include: [ Raza ]
            
        });
        const createdDogWhitT = await createdDog.setTemperaments(temperaments);
       
        res.json(createdDogWhitT)

    } catch (e) {
        console.log(e)
        res.status(500).send("Algo salio mal :( ");
    }   
})


module.exports = router;