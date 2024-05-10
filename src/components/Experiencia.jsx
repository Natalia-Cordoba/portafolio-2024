import work from '../assets/icons/work.svg'

export const Experiencia = () => {
    return (
        <section id='experiencia' className='flex-col px-6 pt-10 md:pt-20'>
            <header className='flex gap-2 h-7 md:h-14'>
                <img src={work} alt="icon laptop" className='md:h-10' />
                <h2 className="font-bold text-xl md:text-4xl pb-2 text-violet-800 dark:text-violet-400">Experiencia laboral</h2>
            </header>
            <p className='pt-2'>Aún no tengo experiencia laboral tradicional en la industria, pero he adquirido habilidades valiosas a través de proyectos personales y académicos.</p>
        </section>
    )
}