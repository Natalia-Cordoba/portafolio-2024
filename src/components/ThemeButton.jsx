import { useEffect, useState } from "react"
import sun from '../assets/icons/sun.svg'
import moon from '../assets/icons/moon.svg'

export const ThemeButton = () => {
    const [theme, setTheme] = useState(
        () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return 'dark'
        }
            return 'light'
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleClick = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <img
            src={theme === 'light' ? moon : sun}
            alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    )
}