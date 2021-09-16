import './styleFD.css';
import imgDogs from './dog.png'
import { useSelector} from 'react-redux';
import React, {useState} from 'react';
import {postDogAdd, imagesArray} from '../../actions/index';


export default function FormDogs() {

    //creo variable para quitar duplicados 
    var temperamentsArrayFilt = [];
    // razas
    const razas = useSelector(state => state.razas);
    //temperaments
    const tempera = useSelector(state => state.temperaments);
    // perros
    const [Dog, setDog] = useState("");
    // creo el estado de los temperaments nuevos
    const [temperamentsNew, settemperamentsNew] = useState("");
    // creo el estado de los temperaments nuevos y enviarlos al post
    const [temperamentsArray, settemperamentsArray] = useState([]);
    // creo el estado de los temperaments nuevos y enviarlos al mostrarlos
    const [temperViw, settemperViw] = useState([]);
    //creo las constantes para el select Image
    const [value, setvalue] = useState('');
    //creo las constantes para el Input Image
    const [value1, setvalue1] = useState('I');
    //creo las constantes para el select Raza
    const [value2, setvalue2] = useState('R');
    //creo la constante para el titulo de la lista de temperaments
    const [titleView, settitleView] = useState('Selecciona los Temperaments');
    

    //const para imprimir el select temperaments
    const OptionsRaza = razas.map((e,i) => {
        return (
            <option key={i} value={e.id}>{e.name}</option>
        )
    });

    // funcion constante para el select order
    const onSelectChangeRaza = (value2) =>{       
        
        setvalue2(value2.target.value); 
        setDog((prevState)=>{
            return {
                ...prevState,
            RazaId: value2.target.value 
            }
          });    
    };
    
    const OptionsTempe = tempera.map((tempe,i) => {
        return (
            <option key={i} value={tempe.id} >{tempe.name}</option>
        )
    });

    //imagenes pre para insertar 
    const OptionsImage = imagesArray.map((ima,i) => {
        return (
            <option key={i} value={ima.url}>{ima.name}</option>
        )
    });

    // funcion constante para el select Image
    const onSelectChangeImage = (value1) =>{       
        setvalue("");
        setvalue1(value1.target.value);
        setDog((prevState) => {
            return {
              ...prevState,
              Imagen: value1.target.value
            }
          });    
    };

    // funcion constante para el select Image
    const onInputChangeFormImage = (value) =>{ 
        setvalue1(value.target.value);
        setvalue(value.target.value);
         
        setDog((prevState) => {
            return {
              ...prevState,
              Imagen: value.target.value
            }
          });         

    };

    //funcion para almacenar los cambios de los datos del formulario
    function onInputChangeForm (e){
        setDog((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value
          }
        });
  
    };
      
    function onSelectChangeNew (temperamentsNew, ) {
            settitleView("List Temperamens");
            temperamentsArray.push(parseInt(temperamentsNew.target.value));
            temperViw.push({
                id:temperamentsNew.target.value,
                name: temperamentsNew.target.options[temperamentsNew.target.selectedIndex].text
            });
            settemperamentsNew(temperamentsNew.target.value);

            //filtro para no mostrar repetidos en la lista y no agregarlos al post
            temperamentsArrayFilt = temperamentsArray.filter((item,index)=>{
                return temperamentsArray.indexOf(item) === index;
            });
            settemperamentsArray(temperamentsArrayFilt);

            setDog((prevState) => {
                return {
                ...prevState,
                [temperamentsNew.target.name]: temperamentsArrayFilt
                } 
            }); 
            
    }; 
    
    //filtro para no mostrar repetidos en la lista de temperaments 
    var hash = {};
    let temperViwFilt = temperViw.filter(function(current) {
        var exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
    });



    // funcion para eliminar de la lista
    function deletedList(e) {
        //elimino de la lista view
        var i = temperViwFilt.indexOf( e.target.value.substr(3) );
        temperViwFilt.splice( i, 1 );

        //elimino de la lista envio post
        var k = temperamentsArray.indexOf( e.target.value.substr(3) );
        temperamentsArray.splice( k, 1 );

        settemperViw(temperViwFilt);
        settemperamentsArray(temperamentsArray);
    };


    async function handelSubmit(e) {
        e.preventDefault();
        await postDogAdd(Dog);       

        alert("se agrego correctamente soy el mejor");
        

    };

    // muestro la lista de temperament seleccionados por user
    var lista = temperViwFilt.map((e, i) => {
        return (
            <label key={i}>
                
                <input type="buttom" className="btn-send" value={e.id + "  " + e.name}
                readOnly
                onClick={deletedList} />
        </label>
        )
    });

      
    return (
       
        <div className="body3"> 
            <header className="encabezado1">
                <img className="logo-tally" src={imgDogs} alt="No hay imangen " title="Logo Dogs" />
            </header>
            <div className="wrap1">

                <form className="box-form" method="post" onSubmit={handelSubmit} encType="multipart/form-data">
                    <span className="tittle-form">
                        Dogs Insert
                    </span>
                    <div><br />
                    <a className="btn-send" href="/dogs"  >Regresar al Listado</a>
                    </div>

                    <div className="form-group">
                        <input type="text" name="Nombre" className="inputF control-inputFs"  required="required" onChange={onInputChangeForm} />
                        <label htmlFor="user" className="control-label">
                        Nombre
                        </label>
                        <i className="bar"></i>
                    </div>
                    
                    <div className="form-group">
                        <input type="text" name="Altura" className="inputF control-inputFs"   required="required" onChange={onInputChangeForm} placeholder="Max - Min "/>
                        <label htmlFor="user" className="control-label">
                        Altura
                        </label>
                        <i className="bar"></i>
                    </div>

                    <div className="form-group">
                        <input type="text" name="Peso" className="inputF control-inputFs"  required="required" onChange={onInputChangeForm} placeholder="Max - Min "/>
                        <label htmlFor="user" className="control-label">
                        Peso
                        </label>
                        <i className="bar"></i>
                    </div>

                    <div className="form-group">
                        <input type="text" name="Anos_de_vida" className="inputF control-inputFs"   required="required" onChange={onInputChangeForm}/>
                        <label htmlFor="user" className="control-label">
                        Años de vida
                        </label>
                        <i className="bar"></i>
                    </div> 
                    <div className="list">
                        <h2 className="title">{titleView}</h2>
                        {lista}
                    </div>
                    <div className="form-group">
                        <select className="form-control" 
                            value={value1}
                            onChange={onSelectChangeImage}         
                            > <option>To Image</option>
                            {OptionsImage}
                        </select>
                        <select className="form-control" 
                            value={value2}
                            onChange={onSelectChangeRaza}         
                            > <option>To Group Raza</option>
                            {OptionsRaza}
                        </select>
                        <select className="form-control" name="temperaments"
                            value={temperamentsNew}
                            onChange={onSelectChangeNew}         
                            > <option>To Temperaments</option>
                            {OptionsTempe}
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Imagen" className="inputF control-inputFs " value={value} onChange={onInputChangeFormImage} placeholder="Pon tu url o selecciona una "/>
                        <label htmlFor="user" className="control-label">
                        Imagen
                        </label>
                        <i className="bar"></i>
                    </div>
                    <div className="form-group">
                        <img className="img2 title" src={value1} alt="selecciona una imagen" />
                    </div>            

                    <div>
                        <input type="submit" className="btn-send" value="Enviar" />
                    </div>  
                </form>
            </div>
        </div>
    
       

    )
    
}