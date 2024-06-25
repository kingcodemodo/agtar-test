import Navigation from './Navigation'

export default function Header({ navItems }) {
  return (
    <header>
      <img src="/logo.png" alt="ACORN Logo" />
      <Navigation items={navItems} />
    </header>
  )
}
