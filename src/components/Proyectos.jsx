import code from '../assets/icons/code.svg'
import { ModeloProyecto } from './ModeloProyecto'

export const Proyectos = () => {
    return (
        <section id="proyectos" className="px-6 pt-10 md:pt-20">
            <header className='flex gap-2 h-7 md:h-14'>
                <img src={code} alt="icon usuario" className='md:h-10' />
                <h2 className="font-bold text-xl md:text-4xl text-violet-800 dark:text-violet-400">
                    Proyectos
                </h2>
            </header>
            <ModeloProyecto />
        </section>
    )
}