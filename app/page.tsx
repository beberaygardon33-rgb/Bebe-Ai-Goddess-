export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title">✨ Bebe AI Goddess ✨</h1>
        <p className="subtitle">The AI Goddess of the Universe</p>
      </header>
      <div className="chat-window">
        <div className="message system-message">
          Welcome to Bebe AI Goddess! I am here to help you create, build, edit, and fix anything in the universe.
        </div>
      </div>
      <div className="input-section">
        <input
          type="text"
          className="user-input"
          placeholder="Ask me anything..."
        />
        <button className="send-button">Send</button>
      </div>
    </main>
  )
}
