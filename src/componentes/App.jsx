import '../estilos/css/app.css';
import Nav from './Nav';
import Historias from './Historias';
import Publicacion from './Publicacion';


function App() {
  return (
    <div className="app">
      <Nav />
      <section className='app-section'>
        <main className='main'>
          <section className='section'>
            <Historias />
            <Publicacion 
              perfilNombre='433'
              tipoHistoria='normal'
              lugar='Dortmund'
              likes='10'
              descripcion={'Verificado Man City win group & Dortmund through with draw'}
            />            
          </section>
        </main>
      </section>                  
    </div>
  );
}

export default App;
