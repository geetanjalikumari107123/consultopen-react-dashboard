"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Image from "next/image";

type ChatMessage = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

export default function AIChatbox() {
  const [chat, setChat] = useState<string>("");
  const [message, setMessage] = useState<ChatMessage[]>([]);

  const suggestions: string[] = [
    "What are the future benefits of choosing PCM in 11th?",
    "How to balance board exams and competitive prep?",
  ];

  const handleSend = (messageText: string = chat) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
    };

    setMessage((prev) => [...prev, userMessage]);
    setChat("");

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "This is a mock AI response based on your question.",
        sender: "ai",
      };

      setMessage((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <Card className="p-4 min-h-125 bg-pink-50 flex flex-col">
      <Image
  src="/images/ai-logo.svg"
  alt="AI Logo"
  width={50}
  className="object-contain"
/>

      <div className="flex-1 overflow-y-auto my-6 space-y-3">
        {message.map((msg) => (
          <div
            key={msg.id}
            className={`w-fit max-w-[50%] px-4 py-3 rounded-xl text-sm wrap-break-word ${
              msg.sender === "user"
                ? "ml-auto bg-gray-100 text-black"
                : "bg-white border border-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 mb-4 flex-wrap">
        {suggestions.map((item) => (
          <Button
            key={item}
            variant="outline"
            className="flex border border-gray-300 text-sm hover:bg-white transition"
            onClick={() => handleSend(item)}
            icon={<ArrowUpRight size={16} className="text-gray-600 ml-2" />}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="relative">
        <textarea
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          rows={2}
          placeholder="Type your specific question here..."
          className="w-full border border-gray-300 p-4 pr-14 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
        />

        <button
          type="button"
          onClick={() => handleSend()}
          className="absolute right-3 bottom-1 -translate-y-1/2 p-2 rounded-md text-white"
          style={{
            background:
              "linear-gradient(135.33deg, #1B9BA2 -22.8%, #F69E0A 22.96%, #EC4899 60.37%, #1B9BA2 105.88%)",
          }}
        >
          <Send size={18} />
        </button>
      </div>
    </Card>
  );
}
