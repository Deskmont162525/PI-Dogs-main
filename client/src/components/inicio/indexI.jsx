import React from 'react';
import './styleI.css';

export default function Inicio(){
    return (
      <a href="/dogs" className="mi-boton">
        <main className="paper">
  <section className="paper-left">
    <section className="paper-left-front">
      <div className="paper-lock">
        <h2 className="Ih2">Start Henry Dog!</h2>
        <span>Hover to Open Now</span>
      </div> 
    </section>
    <section className="paper-left-back">
      <h3 className="Ih3">Henry Dogs</h3>
      <p className="paper-spacer">to</p>
      <h5 className="Ih5">Antonio Foronda</h5>      
      <div className="paper-misc"></div>
    </section>
  </section>
  <section className="paper-main">
    <section className="paper-top-label">
      <h3 className="paper-heading">Henry Dogs´s Map</h3>
      <h5 className="paper-subheading">Proyecto Individual, 2021</h5>
    </section>
    <div className="map-container">
      <article className="map-legend">
        <div className="map-legend-dot"></div>
        <section className="map-popup">
          <h5 className="Ih5">Dogs City</h5>
          <img src="https://cdn2.thedogapi.com/images/B1d5me547.jpg" alt="" />
          <p>City ​​of abundant nature</p>
        </section>
      </article>
      
      <article className="map-legend">
        <div className="map-legend-dot"></div>
        <section className="map-popup">
          <h5 className="Ih5">Dogs City</h5>
          <img src="https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg" alt="" />
          <p>City ​​of abundant water.</p>
        </section>
      </article>
      
      <article className="map-legend">
        <div className="map-legend-dot"></div>
        <section className="map-popup">
          <h5 className="Ih5">Dogs City</h5>
          <img src="https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg" alt="" />
          <p>City ​​of abundant thunder.</p>
        </section>
      </article>
      
      <article className="map-legend">
        <div className="map-legend-dot"></div>
        <section className="map-popup">
          <h5 className="Ih5">Dogs City</h5>
          <img src="https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg" alt=""/>
          <p>City ​​of abundant wind.</p>
        </section>
      </article>
      
      <article className="map-legend">
        <div className="map-legend-dot"></div>
        <section className="map-popup">
          <h5 className="Ih5">Dogs City</h5>
          <img src="https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg" alt=""/>
          <p>City ​​of abundant fire</p>
        </section>
      </article>
    </div>
  </section>
  <section className="paper-right">
    <section className="paper-right-front">      
    </section>
    <section className="paper-left-back">
      <h3 className="Ih3">Click</h3>  
      <p className="paper-spacer">to</p>
      <h5 className="Ih5">Start</h5> 
    </section>
  </section>
</main>
</a>

    )
    
}