export default function Navigation({ items }) {
  return (
    <nav>
      {items.map((item, index) => (
        <a key={index} href={item.url}>{item.text}</a>
      ))}
    </nav>
  )
}
