import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(true);

  return (
    <div className="chatbot">
      <div className="chat-header" onClick={() => setOpen(!open)}>
        🤖 Support Bot
      </div>
      {open && (
        <div className="chat-body">
          <p>Hello! How can I help you today?</p>
          <div className="chat-input">
            <input placeholder="Type..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}