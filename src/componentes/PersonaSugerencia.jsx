
import '../estilos/css/app.css';

function PersonaSugerencia({nombre, descripcion}) {
  return (
    <div className='persona'>
      <div className='persona-img'>
        <img src={require(`../assets/imgs/perfiles/perfil-${nombre}.jpg`)}/>
      </div>
      <div className='persona-info'>
        <div className='nombre'>{nombre}</div>
        <div className='descripcion'>{descripcion}</div>
      </div>
      <div className='persona-seguir'>
        <button>Seguir</button>
      </div>
    </div>
  );
}

export default PersonaSugerencia;