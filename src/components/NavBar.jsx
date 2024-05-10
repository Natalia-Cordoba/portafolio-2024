import { NAV_ITEMS } from "../data/navItems.js"

export const NavBar = () => {
    return (
        <nav className="flex backdrop-blur bg-violet-500/70 dark:bg-violet-950/50 fixed bottom-2 left-0 right-0 z-10 mx-auto max-w-fit rounded-full px-4 py-2 gap-3">
        {
          NAV_ITEMS.map((link, index) => (
            <a
              key={index}
              href={link.url}>
              <img src={link.icon} alt={link.title} />
            </a>
          ))
        }
      </nav>
    )
}