import '../estilos/css/app.css';

function PerfilHistoria({nombre, tipo}) {
    return (
      <div className='perfil-historia'>
          <div className='contenedor-perfil'>
            <div className={`foto-perfil ${tipo}`}>
                <img src={require(`../assets/imgs/perfiles/perfil-${nombre}.jpg`)}></img>
            </div>
            <span className='nombre'>{nombre}</span>
          </div>
      </div>
    );
  }
  
  export default PerfilHistoria;