import './styleDC.css';
import { Link } from 'react-router-dom';


export default function CardDogs({id, Nombre, Imagen, Peso, Raza, Altura, temperaments}){
    
    return(
        <div className="card">
            <div className="imgBx">
                <img className="imgEst" src={Imagen} alt="" />
            </div>
            <div className="contentC">
                <div>
                <h2>{Nombre}</h2>
                
                <p>Peso: {Peso}</p>
                <p>Grupo Raza: {Raza}</p>
                <p>Altura:  {Altura}</p> 
                <p>Temperaments:  {temperaments}</p>                
                </div>
                <button className="btn1">
					<Link to={`/dogs/detail/${id}`}>
						<span className="buy">Ver detalle</span>
					</Link>
				</button>
            </div>
        </div>
    )




}