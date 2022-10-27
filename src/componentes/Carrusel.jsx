
import '../estilos/css/app.css';
import '../estilos/css/carrusel.css';

function Carrusel({ perfilNombre }) {
  return (
    <div className='carrusel'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/*
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="boton active" aria-current="true" aria-label="Slide 1"></button>
          <button className="boton" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button className="boton" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require(`../assets/imgs/publicaciones/publicacion-${perfilNombre}.jpg`)} className="d-block w-100" alt="..."></img>
          </div>
          {/*
          <div claclassNamess="carousel-item">
            <img src="https://cdn-1.motorsport.com/images/amp/YKEBly10/s1000/sebastien-loeb-isabelle-galmic.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://cdn-1.motorsport.com/images/amp/YKEBly10/s1000/sebastien-loeb-isabelle-galmic.jpg" className="d-block w-100" alt="..."></img>
          </div>
          */}
        </div>
        {/* 
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
        */}
      </div>
    </div>
  );
}

export default Carrusel;