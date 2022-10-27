
import '../estilos/css/app.css';
import PerfilHistoria from './PerfilHistoria';

function Historias() {
  return (
    <div className='historias'>
      <div className='contenido-historias'>
        <PerfilHistoria 
          nombre='florservini'
          tipo='normal'
        />
        <PerfilHistoria 
          nombre='_lucia_p'
          tipo='normal'
        />
        <PerfilHistoria 
          nombre='leo_copello'
          tipo='normal'
        />
        <PerfilHistoria 
          nombre='luchy_gui'
          tipo='mejores'
        />
        <PerfilHistoria 
          nombre='jaz.alexander'
          tipo='normal'
        />
        <PerfilHistoria 
          nombre='martirodriguez'
          tipo='visto'
        />
      </div>
    </div>
  );
}

export default Historias;