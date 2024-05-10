export function ModeloLinks({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className='flex rounded-full p-2 gap-1 font-semibold text-white bg-violet-500/60 dark:bg-violet-900/50 backdrop-blur border border-violet-500 dark:border-violet-900 hover:bg-violet-500 hover:dark:bg-violet-900'
      >
        {children}
      </a>
    );
  }
