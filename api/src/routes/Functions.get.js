require('dotenv').config();

const { Dog, Temperament, Raza } = require('../db.js');
const axios = require('axios');
const {
    API_KEY
  } = process.env;

const BASE_URL = 'https://api.thedogapi.com/v1';
const GET_DOGS_ALL = BASE_URL + '/breeds';
const GET_DOGS_SEARCH_ALL = GET_DOGS_ALL+ '/search?q=';
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;



// todas las funciones get para el dogs rutas 

// filtrar los datos que llegan de la base de datos 
async function filtrarInfoBd(dataBd) {
    
    var dataBdFilt = dataBd.map((e) => {
        return {
            ID: e.dataValues.ID,
            Nombre: e.dataValues.Nombre,
            Altura: e.dataValues.Altura,
            Peso: e.dataValues.Peso,
            Anos_de_vida: e.dataValues.Anos_de_vida,
            Imagen: e.dataValues.Imagen,
            razaId: e.raza.name,
            temperaments: e.temperaments.map((el) => {
                return el.name
            }).toString()
        }
    })
    return dataBdFilt 
};

// filtrar todos los datos que llegan desde la api
async function filtrarInfoApi(dataApi) {
    var datFilt = dataApi.data.map((e) =>{
        return {
            ID: e.id,
            Nombre: e.name,
            Altura: e.height.metric,
            Peso: e.weight.metric,
            Anos_de_vida: e.life_span,
            Imagen: e.image.url,
            razaId: e.breed_group,
            temperaments: e.temperament 
        }
    });    
    return datFilt;
};


// get toda la data de la api
async function getDataApiTotal() {
    const getDataApi = await axios.get(GET_DOGS_ALL);    
    var datFilt = await filtrarInfoApi(getDataApi);
    
    return datFilt;
};

// get toda la info de la api por search name
async function getDataApiSearch(q) {
    const apiDataSearch = await axios.get(GET_DOGS_SEARCH_ALL + q);
    const infoTotal = await getDataApiTotal();
    
    const infoCompleta = await apiDataSearch.data.map((e) => {
        return infoTotal.filter(el => el.Nombre === e.name)
    }).flat();    
    return infoCompleta;
    
};

// get toda la info de la bd
async function getDataBdTotal() {
    const dataBD = await Dog.findAll({
        include: [
            {
                model: Temperament                
            },
        
            {
                model: Raza               
            }
        ]       
    });

    var dataBdFilt = await filtrarInfoBd(dataBD); 
    return dataBdFilt    
};

// get toda la info de la bd por search name
async function getDataBdSearch(q) {
    const dbDogsName = await Dog.findAll({
        where: {
            [Op.or]: [{
                Nombre: {
                        [Op.like]: '%'+q+'%'
                    }
                }, {
                Nombre: {
                        [Op.like]: q+'%'
                    }}]
            
          },
        include: [ {
            model: Temperament
        },{
            model: Raza
        }
    ]  
    });
    var dataBdFiltSearch = await filtrarInfoBd(dbDogsName); 
    return dataBdFiltSearch;
};

// get toda la info de la api por search id
async function getDataTotalByIdApi(idDogs) {
    
    const infoTotal = await getDataApiTotal(); 
    const infoCompleta = infoTotal.filter(function (e) { 
        return e.ID == idDogs; 
    });      
       
    return infoCompleta;    
};

// get toda la info de la bd por search id
async function getDataTotalByIdBd(idDogs) {
   
    dataBdId = await Dog.findByPk(idDogs,{
        include: [{
                model:Temperament,
                attributes: ['name']
            },{
                model: Raza,
                attributes:['name']
            }
        ]    
    });
    
    var dataBdFilt =[{

        ID: dataBdId.dataValues.ID,
        Nombre: dataBdId.dataValues.Nombre,
        Altura: dataBdId.dataValues.Altura,
        Peso: dataBdId.dataValues.Peso,
        Anos_de_vida: dataBdId.dataValues.Anos_de_vida,
        Imagen: dataBdId.dataValues.Imagen,
        razaId: dataBdId.raza.name,
        temperaments: dataBdId.temperaments.map((el) => {
            return el.name
        }).toString()
    }]
    
    return dataBdFilt

};

// function getDta() {
//     axios.get(GET_DOGS_ALL)
//     .then(res => {
//         return res.json(res)
//     })
    
// }

module.exports = { 
    getDataApiTotal, 
    getDataApiSearch, 
    getDataBdTotal, 
    getDataBdSearch,
    getDataTotalByIdApi,
    getDataTotalByIdBd

};
