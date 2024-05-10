import contact from '../assets/icons/contact.svg'
import { LinksContacto } from './LinksContacto'

export const Contacto = () => {
    return (
        <section id="contacto" className='px-6 pt-10 md:pt-20 pb-6 md:pb-10'>
            <header className='flex gap-2 h-7 md:h-14 mb-4'>
                <img src={contact} alt="icono contacto" className='md:h-10' />
                <h2 className="font-bold text-xl md:text-4xl pb-2 text-violet-800 dark:text-violet-400">Contacto</h2>
            </header>
            <LinksContacto />
        </section>
    )
} 