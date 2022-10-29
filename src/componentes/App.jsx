import '../estilos/css/app.css';
import Nav from './Nav';
import Historias from './Historias';
import Publicacion from './Publicacion';
import PerfilSugerencia from './PerfilSugerencia';
import PersonaSugerencia from './PersonaSugerencia';


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
              descripcion='Man City win group & Dortmund through with draw'
              comentarios='534'
              fecha='18 HORAS'
            />                         
          </section>
          <section className='section-sugerencias'>
            <PerfilSugerencia 
              nombre='juaanpenalba'
              subNombre='Jυαи'
            />
            <div className='sugerencias-personas'>
              <div className='sugerencias'>
                <span>Sugerencias para ti</span>
                <div>Ver todo</div>
              </div>
              <div className='contenedor-personas'>
                <PersonaSugerencia 
                  nombre='manuel_bustos22'
                  descripcion='Nuevo en instagram'
                />
                <PersonaSugerencia 
                  nombre='santitraverso_'
                  descripcion='josebelsito_ y 67 más siguen esta cuenta'
                />
                <PersonaSugerencia 
                  nombre='requetelindalenceria'
                  descripcion='Nuevo en Instagram'
                />
                <PersonaSugerencia 
                  nombre='male_ortiz_1802'
                  descripcion='aleexchang_ y 4 más siguen esta cuenta'
                />
                <PersonaSugerencia 
                  nombre='tomiberr____2'
                  descripcion='lauta_bett y 8 más siguen esta cuenta'
                />
              </div>
            </div>
            <div className='sugerencias-footer'>
              <div className='sugerencias-footer-info'>
                <ul>
                  <li>
                    <a>Informacion</a>
                  </li>
                  <li>
                    <a>Ayuda</a>
                  </li>
                  <li>
                    <a>Prensa</a>
                  </li>
                  <li>
                    <a>API</a>
                  </li>
                  <li>
                    <a>Empleo</a>
                  </li>
                  <li>
                    <a>Privacidad</a>
                  </li>
                  <li>
                    <a>Condiciones</a>
                  </li>
                  <li>
                    <a>Ubicaciones</a>
                  </li>
                  <li>
                    <a>Idioma</a>
                  </li>
                </ul>                
              </div>
              <div className='sugerencias-footer-licencia'>
                <div>© 2022 INSTAGRAM FROM META</div>
              </div>
            </div>
          </section>
        </main>
      </section>
      <footer className='app-footer'>
        <div className='contenido-footer'>
          <div className='footer-info'>
            <div>
              <a>Meta</a>
            </div>
            <div>
              <a>Informacion</a>
            </div>
            <div>
              <a>Blog</a>
            </div>
            <div>
              <a>Empleo</a>
            </div>
            <div>
              <a>Ayuda</a>
            </div>
            <div>
              <a>API</a>
            </div>
            <div>
              <a>Privacidad</a>
            </div>
            <div>
              <a>Condiciones</a>
            </div>
            <div>
              <a>Cuentas destacadas</a>
            </div>
            <div>
              <a>Hashtags</a>
            </div>
            <div>
              <a>Ubicaciones</a>
            </div>
            <div>
              <a>Instagram Lite</a>
            </div>
            <div>
              <a>Subir contactos y personas no usuarios</a>
            </div>
          </div>
          <div className='footer-licencia'>
            <div>
              Español (España)
            </div>
            <div>© 2022 Instagram from Meta</div>
          </div>
        </div>
      </footer>                  
    </div>
  );
}

export default App;
