import { useState } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleToggleEmail = () => {
    setIsEmailOpen((prev) => !prev)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Enviando...")

    setTimeout(() => {
      setStatus("Mensagem enviada com sucesso!")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => {
        setStatus("")
        setIsEmailOpen(false)
      }, 2000)
    }, 1000)
  }

  return (
    <div className={`container ${isEmailOpen ? "active" : ""}`}>
      {/* CARD PRINCIPAL */}
      <section className="card">
        <Main onToggleEmail={handleToggleEmail} isEmailOpen={isEmailOpen} />
        <Footer />
      </section>

      {/* PAINEL ESTILO GMAIL */}
      <div className={`email-panel ${isEmailOpen ? "open" : ""}`}>
        <div className="gmail-header">
          <span>Nova Mensagem</span>
          <button className="close-btn" onClick={handleToggleEmail}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="gmail-form">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Escreva sua mensagem..."
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <div className="gmail-footer">
            <button type="submit" className="send-btn">
              Enviar
            </button>
            {status && <span className="status-msg">{status}</span>}
          </div>
        </form>
      </div>
    </div>
  )
}