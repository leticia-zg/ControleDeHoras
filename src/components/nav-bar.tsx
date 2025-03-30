import Link from "next/link";

interface NavBarProps {
  active: "benefícios" | "dúvidas";
}

export default function NavBar(props: NavBarProps) {
  const { active } = props;

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Benefícios", href: "#benefits" },  
    { label: "Dúvidas", href: "#faq" }, 
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-800 p-6 z-10 shadow-lg flex justify-between items-center">
      <h1 className="text-3xl font-bold text-orange-600">EasyPoint</h1>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.label} className="text-white">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button className="bg-orange-600 text-white p-2 rounded">Comece agora</button>
    </nav>
  );
}
