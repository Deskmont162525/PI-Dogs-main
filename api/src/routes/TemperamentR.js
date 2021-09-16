const { Router } = require('express');
const { Temperament } = require('../db');
const axios = require('axios');
const {
    API_KEY, API_KEY_OPCI, API_KEY_OPCI1
  } = process.env;

const router = Router();

router.get('/all', async (req, res) => {

    try {
        const temperamentBd = await Temperament.findAll({});
        const getDataTempe = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const datFilt = getDataTempe.data.map((e) =>{
            return e.temperament
        }).toString()

        const resulFilt = new Set(datFilt.split(',').sort());

        let resultFiltDupli = [...resulFilt]; 
        
        const dataInfoOrd = resultFiltDupli.map((e) => {
            return {
                name: e
            }
        })

        if(temperamentBd.length === 0){
            await Temperament.bulkCreate(dataInfoOrd.filter((e) => {
                return e.name !== "";
            }));
            res.json(temperamentBd)
        }
        res.json(temperamentBd)

    } catch (e) {
        console.log(e)
    }
})


module.exports = router;