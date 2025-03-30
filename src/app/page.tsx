import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default function Home() {
  const benefits = [
    { img: "/images/registro.png", title: "Registro Simplificado", text: "Registre suas horas de forma rápida e eficiente." },
    { img: "/images/relatorio.png", title: "Relatórios Automáticos", text: "Gere relatórios detalhados sem complicações." },
    { img: "/images/controle-de-acesso.png", title: "Acesso Facilitado", text: "Gerencie seu tempo em qualquer dispositivo." }
  ]
  const faqItems = [
    { question: "O sistema é gratuito?", answer: "Sim, oferecemos um plano gratuito com funcionalidades essenciais." },
    { question: "Posso acessar no celular?", answer: "Sim, a plataforma é totalmente responsiva." },
    { question: "Preciso de internet para usar o sistema?", answer: "Sim, uma conexão à internet é necessária para registrar e acessar suas horas e relatórios." },
    { question: "Como posso alterar ou excluir um registro de horas?", answer: "Você pode editar ou excluir registros de horas diretamente na sua dashboard, clicando sobre o item e selecionando a opção desejada." },
    { question: "Posso integrar o sistema com outras plataformas?", answer: "Atualmente, o sistema não oferece integração direta com outras plataformas, mas estamos trabalhando para adicionar essa funcionalidade em breve." },
  ]

  return (
    <>
      <NavBar active="benefícios"/>
      <main>
        <header id ="inicio" className="py-60 px-20 text-white relative bg-[url('/images/fundo.png')] bg-no-repeat bg-center bg-cover bg-opacity-100 h-[350px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold pt-20">Controle de Horas Profissional</h1>
            <p className="p-2">Gerencie suas horas com eficiência e praticidade.</p>
            <button className="bg-orange-600 text-white p-2 rounded shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:bg-orange-400">Comece agora</button>
          </div>
        </header>
        <section id="benefits" className="py-16 px-5 max-w-[1200px] mx-auto bg-neutral-900 text-center rounded-2xl shadow-lg mt-15">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">Benefícios</h2>
          <ul className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="bg-neutral-800 p-6 rounded-lg shadow-md max-w-xs">
                <img src={benefit.img} alt={benefit.title} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-600">{benefit.title}</h3>
                <p className="text-white">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </section>
        <section id="faq" className="mx-auto text-center max-w-[1200px] my-15 bg-neutral-900 rounded-2xl p-15 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">Dúvidas Frequentes</h2>
          {faqItems.map((item, index) => (
            <details key={index} className="mb-4 bg-neutral-800 rounded" >
              <summary className="cursor-pointer text-lg font-semibold text-orange-600 p-3 ">{item.question}</summary>
              <p className="text-gray-300 p-3">{item.answer}</p>
            </details>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
