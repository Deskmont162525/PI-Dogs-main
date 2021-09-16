import './styleD.css';
import CardDogs from '../dogCard/indexDC';


export default function Dogs({dataDogs}){  
    
    return(
        <div>
        <div className="body-container">
            <div className="container">
               { 
                    dataDogs.map(({ID, Nombre, Imagen, Peso, razaId, Altura, temperaments},i) => {
                        return <CardDogs 
                            key={i}
                            id={ID}
                            Nombre={Nombre}
                            Imagen={Imagen}
                            Peso={Peso}
                            Raza={razaId}
                            Altura={Altura}
                            temperaments={temperaments}
                        />
                   })                
                
                }
            </div>
        </div>
        </div>
    )
}