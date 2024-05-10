import person from '../assets/icons/person.svg'

export const SobreMi = () => {
    return (
        <section id='sobre-mi' className="px-6 pt-10 md:pt-20">
            <header className='flex gap-2 h-7 md:h-14'>
                <img src={person} alt="icon usuario" className='md:h-10' />
                <h2 className="font-bold text-xl md:text-4xl pb-2 text-violet-800 dark:text-violet-400">Sobre mí</h2>
            </header>
            <article className='md:flex flex-row-reverse items-center'>
                <article>
                    <p className="pb-2 dark:[&>strong]:text-violet-400 [&>strong]:text-violet-700 [&>strong]:font-semibold dark:text-gray-300">
                        Mi nombre es Natalia Córdoba, tengo 30 años y soy de la ciudad de Necochea, provincia de Buenos Aires. Estudié <strong>Psicopedagogía</strong> y luego realicé la <strong>formación docente</strong>. Después de un tiempo ejerciendo en escuelas, me interesé por el mundo de la <strong>Programación</strong>. Desde entonces disfruto creando experiencias web, que se centren en el diseño y la experiencia de usuario.
                    </p>
                    <p className="pb-2 dark:[&>strong]:text-violet-400 [&>strong]:text-violet-700 [&>strong]:font-semibold dark:text-gray-300">
                        Destaco de mi profesión anterior las <strong>habilidades blandas</strong> que pude adquirir.
                        Actualmente estoy estudiando Programación Backend, mientras continúo formándome en <strong>Desarrollo Front-end</strong>. Mi objetivo es convertirme en Desarrolladora Full-Stack, especializada en Front-end.
                    </p>
                </article>
            </article>
        </section>
    )
} 