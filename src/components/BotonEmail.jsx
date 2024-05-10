import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Toaster, toast } from 'react-hot-toast'
import email from '../assets/icons/email.svg'
import copy from '../assets/icons/copy.svg'

export const BotonEmail = () => {
    const notify = () => toast.success('Correo Copiado', {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        }
    })

    return (
        <section className='flex items-center'>
                <a
                    href="mailto:nataliacorrdoba@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex rounded-l-full p-1 custom-media:p-2 gap-1 font-semibold text-white bg-violet-500/60 dark:bg-violet-900/50 backdrop-blur border border-violet-500 dark:border-violet-900 hover:bg-violet-500 hover:dark:bg-violet-900'
                >
                    <img src={email} alt="icono email"/>
                    nataliacorrdoba@gmail.com
                </a>
                <CopyToClipboard text="nataliacorrdoba@gmail.com">
                    <div>
                        <button onClick={notify} className='flex rounded-r-full p-1.5 custom-media:p-2.5 md:p-2 gap-1 font-semibold text-white bg-violet-500/60 dark:bg-violet-900/50 backdrop-blur border border-violet-500 dark:border-violet-900 hover:bg-violet-500 hover:dark:bg-violet-900'>
                            <img src={copy} alt="icono copy" className='md:w-6'/>
                        </button>
                        <Toaster />
                    </div>
                </CopyToClipboard>
        </section>
    )
}