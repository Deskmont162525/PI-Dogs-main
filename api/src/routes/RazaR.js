const { Router } = require('express');
const { Raza } = require('../db');
const axios = require('axios');
const {
    API_KEY, API_KEY_OPCI, API_KEY_OPCI1
  } = process.env;


const router = Router();


router.get('/all', async (req, res) => {

    try {
        const dataBDR = await Raza.findAll({});
        const dataApiR = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const dataApiFilt = dataApiR.data.map((e) => {
            return e.breed_group;
        });

        const resulFilt = new Set(dataApiFilt);

        let resultFiltDupli = [...resulFilt]; 
        resultFiltDupli = resultFiltDupli.filter((e) =>{
            return e !== "" && e !== undefined;
        })

        const dataInfoOrd = resultFiltDupli.map((e) => {
            return {
                name: e
            }
        })
        
        if(dataBDR.length === 0){
            await Raza.bulkCreate(dataInfoOrd);            
            res.json(dataBDR)
        }
        res.json(dataBDR)

    } catch (e) {
        console.log(e)
    }
})


router.post('/razaAdd', async (req, res) => {

    const {Name} = req.body;
    console.log("si hay ", Name)
    try {
        const createRaza = await Raza.create({
            name: Name
        })
        res.json(createRaza)
    } catch (e) {
        console.log(e);
    }
});




module.exports = router;