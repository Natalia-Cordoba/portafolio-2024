import animacion from '../assets/images/animacion.png'
import intro from '../assets/icons/intro.svg'
import mappin from '../assets/icons/mappin.svg'
import { LinksContacto } from './LinksContacto.jsx'

export const Inicio = () => {
    return (
        <section id='inicio' className="h-screen flex flex-col px-6 justify-center gap-4">
            <header className="flex py-2 gap-4 items-center md:justify-start">
                <img
                    className=''
                    src={animacion}
                    alt="Foto de Natalia Córdoba"
                />
            </header>
            <article>
                <header className='flex gap-2 h-7 md:h-14'>
                    <img src={intro} alt="icon laptop" className='md:h-10'/>
                    <h2 className="font-bold text-xl md:text-4xl pb-2 text-violet-800 dark:text-violet-400 block whitespace-nowrap border-r-2 border-solid border-black dark:border-white w-[13ch] animate-typing overflow-hidden"
                    >
                        Hola, soy Nati!
                    </h2>
                </header>
                <p className='md:text-2xl pt-2'>Desarrolladora Front-end. Estudiante de Desarrollo FullStack.</p>
                <figure className='flex gap-1'>
                    <img src={mappin} alt="icono map-pin" />
                    <p className='md:text-2xl'>Argentina</p>
                </figure>
                <p>Disponible para trabajar</p>         
            </article>
            <LinksContacto />
            <img src={mappin} alt="" className='w-12 absolute bottom-0 left-1/2 animate-bounce'/>
        </section>
    )
} 