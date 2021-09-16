import './styleL.scss';

export default function Loading (){


    return (
        <div className="content-L">
            
            <div className="fancy-spinner">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="dot"></div>
            </div>
            
            <div className="loading2">

                <p className="pFount">Loading</p>
                <p className="imgP pFount">.</p>
                <p className="imgP pFount">.</p>
                <p className="imgP pFount">.</p>
            </div>
            
            <div className="loading">
    
                <img className= "imgL" src="https://www.elimparcial.com/__export/1554418666924/sites/elimparcial/img/2019/01/28/1967709-N.JPG_1902800913.jpg" alt="" />

                <img className= "imgL" src="https://static1.abc.es/Media/201505/21/lobo-perro-ancestro--644x362.jpg" alt="" />
            
                <img className= "imgL" src="https://thumbs.dreamstime.com/z/pares-de-los-perros-esquimales-siberianos-19465025.jpg" alt="" />
            
                
            </div>
           
        </div>
    )

}