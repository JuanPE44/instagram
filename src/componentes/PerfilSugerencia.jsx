
import '../estilos/css/app.css';

function PerfilSugerencia({nombre, subNombre}) {
  return (
    
    <div className='sugerencias-perfil'>
        <div className='perfil-img'>
            <img src={require(`../assets/imgs/perfiles/perfil-${nombre}.jpg`)}></img>
        </div>      
    <div className='perfil-nombres'>
      <div className='nombre'>{nombre}</div>
      <div className='subNombre'>{subNombre}</div>
    </div>
    <div className='perfil-cambiar'>
        <button>Cambiar</button>
    </div>
  </div>
  );
}

export default PerfilSugerencia;