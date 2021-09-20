import './App.css'
import BackgroundSection from './components/background-section/background-section.js'
import Cards from './components/tab-section/tab-section.js'
import { useState } from 'react'

function App() {
  const [indice, setIndice] = useState(0)
  return (
    <>
      <BackgroundSection/>
      <section className="section-tabs">
        <div className="tab-list">
          <div className="scroll">
            <button className="tab-btn" onClick={()=> setIndice(0)} className= {indice === 0 ? " active" : "tab-btn" }>👩‍💻 Tecnologias</button>
            <button className="tab-btn" onClick={()=> setIndice(1)} className= {indice === 1 ? " active" : "tab-btn" }>🧘🏼‍♀️ Hobbies</button>
            <button className="tab-btn" onClick={()=> setIndice(2)} className= {indice === 2 ? " active" : "tab-btn" }>🎥 Top Filmes</button>
          </div>
        </div>
      </section>
      <Cards indice={indice}/>
    </>
  );
}

export default App;
