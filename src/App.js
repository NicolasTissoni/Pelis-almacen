import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";
import { useState } from 'react';

function App() {

    const [listState, setListState] = useState([]);

    return (
        <div className="layout">
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                
                <h1>MisPelis</h1>
            </header>

            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            <section id="content" className="content">
                <Listado listState={listState} setListState={setListState} />
            </section>

            <aside className="lateral">
                <Buscador listState={listState} setListState={setListState} />
                <Crear listState={listState} />
            </aside>

            <footer className="footer">
                &copy; - Proyecto en React - 
            </footer>

        </div>
    );
};

export default App;
