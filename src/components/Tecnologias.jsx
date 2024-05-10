import pc from '../assets/icons/pc.svg'
import { TAGS } from '../data/tags.js'

export const Tecnologias = () => {
    return (
        <section id="tecnologias" className="px-6 pt-10 md:pt-20">
            <header className='flex gap-2 h-7 md:h-14'>
                <img src={pc} alt="icono pc" className='md:h-10'/>
                <h2 className="font-bold text-xl md:text-4xl text-violet-800 dark:text-violet-400">
                    Tecnologías
                </h2>
            </header>
            <article className='flex flex-wrap justify-center pt-2 gap-4 m-3 md:mx-6'>
                {
                    Object.values(TAGS).map(({ name, icon }) => {
                        return (
                            <div key={name} className='flex flex-col justify-evenly items-center text-center h-20 w-20 md:h-24 md:w-24 p-2 border-2 border-slate-400 dark:border-slate-600 rounded-md text-md'>
                                <picture>
                                    <img src={icon} alt={name} className='w-5'/>
                                </picture>
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}