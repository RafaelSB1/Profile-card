// export default function Main() {
//     return(
//         <>
//         <header>
//             <section>
//                 <img src="..\profile.jfif" className="profile-image"/>
//                 <h2 className="name-text">Rafael Barbosa</h2>
//                 <p className="ocupation-text">Engenheiro Químico</p>
//                 <a href=""><p className="link-text">http://localhost:5173/</p></a>
//             </section>
//             <section className="buttons-space">
//                 <button className="email-button" onClick={BusinessCard}>
//                     <i className="fa-solid fa-envelope icon"></i>
//                     <span>Email</span>
//                 </button>
//                 <button className="linkedin-button">
//                     <i className="fa-brands fa-linkedin icon"></i>
//                     <span>LinkedIn</span>
//                 </button>
//             </section>
//         </header>
//         <main>
//             <div>
//                 <h5 className="subtitle">Sobre</h5>
//                 <p className="normal-text">
//                     Sou Engenheiro químico e atualmente estou aprendendo
//                     desenvolvimento web e automatizações com Python. Este é um exemplo
//                     de código realizado durante meus aprendizados.
//                 </p>
//             </div>
//             <div>
//                 <h5 className="subtitle">Interesses</h5>
//                 <p className="normal-text">
//                     Fanático por café, apaixonado por música, instrumentista,
//                     consumidor de vídeos do Youtube, caminhadas no fim da tarde.
//                 </p>
//             </div>

//         </main>
//         </>
//     )
// };

export default function Main({ onToggleEmail, isEmailOpen }) {
  return (
    <>
      <header>
        <section>
          <img src="./profile.png" className="profile-image" alt="Profile" />
          <h2 className="name-text">Rafael Barbosa</h2>
          <p className="ocupation-text">Engenheiro Químico</p>
          <a href="http://localhost:5173/">
            <p className="link-text">http://localhost:5173/</p>
          </a>
        </section>
        <section className="buttons-space">
          <button className="email-button" onClick={onToggleEmail}>
            <i className="fa-solid fa-envelope icon"></i>
            <span>{isEmailOpen ? "Fechar" : "Email"}</span>
          </button>
          <button className="linkedin-button" onClick={abrirLinkedIn}>
            <i className="fa-brands fa-linkedin icon"></i>
            <span>LinkedIn</span>
          </button>
        </section>
      </header>
      <main>
        <div>
          <h5 className="subtitle">Sobre</h5>
          <p className="normal-text">
            Sou Engenheiro químico e atualmente estou aprendendo desenvolvimento
            web e automatizações com Python. Este é um exemplo de código realizado
            durante meus aprendizados.
          </p>
        </div>
        <div>
          <h5 className="subtitle">Interesses</h5>
          <p className="normal-text">
            Fanático por café, apaixonado por música, instrumentista, consumidor de
            vídeos do Youtube, caminhadas no fim da tarde.
          </p>
        </div>
      </main>
    </>
  )
}

function abrirLinkedIn() {
    window.open("https://www.linkedin.com/in/rafael-silva-barbosa-44224a204/")
}