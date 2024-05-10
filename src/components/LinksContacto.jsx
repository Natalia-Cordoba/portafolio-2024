import linkedIn from '../assets/icons/linkedIn.svg'
import github from '../assets/icons/github.svg'
import cv from '../assets/icons/cv.svg'
import { ModeloLinks } from './ModeloLinks.jsx'
import { BotonEmail } from './BotonEmail.jsx'

export const LinksContacto = () => {
    return (
        <section className='md:flex gap-4'>
            <BotonEmail />
            <ul className='flex gap-2 pt-3 md:pt-0'>
                <ModeloLinks href="https://www.linkedin.com/in/nataliamcordoba/">
                    <img src={linkedIn} alt="icono linkedIn" />
                </ModeloLinks>
                <ModeloLinks href="https://github.com/Natalia-Cordoba">
                    <img src={github} alt="icono github" />
                </ModeloLinks>
                <ModeloLinks href="https://drive.google.com/file/d/1dT9VIypFcFKYnTXbN9yJr-olymrzGQGi/view?usp=sharing">
                    <img src={cv} alt="icono cv" />
                    CV
                </ModeloLinks>
            </ul>
        </section>
    )
}
