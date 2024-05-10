import { PROJECTS } from "../data/proyectos.js"
import { ModeloLinks } from './ModeloLinks.jsx'
import github from '../assets/icons/github.svg'
import link from '../assets/icons/link.svg'

export const ModeloProyecto = () => {
    return (
        <article className="max-w-xs mx-auto md:max-w-2xl">
            {PROJECTS.map(({ title, description, image, tags, linkSitio, githubCode }) => {
                return (
                    <article key={title} className="my-5 p-3 border-2 border-slate-400 dark:border-slate-800 rounded-md bg-slate-300 dark:bg-slate-900">
                        <h3 className="font-bold text-violet-800 dark:text-violet-400 text-xl text-center mb-3">{title}</h3>
                        <section className="md:flex">
                            <picture className="md:w-1/2 md:mx-4 md:my-auto">
                                <img className="hover:animate-pulse w-full shadow-md shadow-slate-600" src={image} alt="miniatura de proyecto" />
                            </picture>
                            <article className="pt-4 md:pt-0 md:w-1/2 md:my-auto">
                                <div className="mt-1 flex gap-1 px-3 md:flex">
                                    {tags.map((tag, index) => (
                                        <div key={index} className="flex gap-1 bg-slate-100 dark:bg-slate-600 py-0.5 px-1 rounded-md text-sm">
                                            <img src={tag.icon} alt={tag.name} className="w-3" />
                                            {tag.name}
                                        </div>
                                    ))}
                                </div>
                                <h5 className="px-3 mt-1">{description}</h5>
                            </article>
                        </section>
                        <ul className="flex justify-center gap-1 md:gap-4 mt-2 md:mt-4">
                            <ModeloLinks href={githubCode}>
                                <img src={github} alt="icono github" />
                                Código
                            </ModeloLinks>
                            <ModeloLinks href={linkSitio}>
                                <img src={link} alt="icono link" />
                                Sitio
                            </ModeloLinks>
                        </ul>
                    </article>
                )
            })
            }
        </article>
    )
}

