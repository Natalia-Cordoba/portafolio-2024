import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { SobreMi } from './components/SobreMi.jsx'
import { Proyectos } from './components/Proyectos.jsx'
import { Experiencia } from './components/Experiencia.jsx'
import { Inicio } from './components/Inicio.jsx'
import { Contacto } from './components/Contacto.jsx'
import { Tecnologias } from './components/Tecnologias.jsx'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
    <div className='min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-black dark:text-white md:text-lg'>
      <main className='scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
        <Header />
        <NavBar />
        <Inicio />
        <Experiencia />
        <Proyectos />
        <Tecnologias />
        <SobreMi />
        <Contacto />
        <Footer />
      </main>
    </div>
  )
}

export default App
