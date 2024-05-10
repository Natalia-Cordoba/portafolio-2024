import { ThemeButton } from "./ThemeButton.jsx"

export const Header = () => {
  return (
    <header className="flex justify-between pt-6">
      <h1>nataliacordoba.dev</h1>
      <ThemeButton />
    </header>
  )
}