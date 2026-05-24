"use client";
import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

export default function AIChatbox() {
  const [chat, setChat] = useState("");

  return (
    <div className="p-4 min-h-100 bg-pink-50 flex flex-col rounded-md border border-gray-200">
      
      <img src="images/ai-logo.svg" alt="" className="w-50 object-contain" />

      <div className="mt-auto">

        <div className="flex justify-end gap-4 mb-4 flex-wrap">
          <a href="#" className="flex border border-gray-300 rounded-4xl items-center px-5 py-2 text-sm">
            What are the future benefits of choosing PCM in 11th?
            <ArrowUpRight size={16} className="text-gray-600 ml-2"/>
          </a>

          <a href="#" className="flex border border-gray-300 rounded-4xl items-center px-5 py-2 text-sm">
            How to balance board exams and competitive prep?
            <ArrowUpRight size={16} className="text-gray-600 ml-2"/>
          </a>
        </div>

        <div className="relative">
          
          <textarea
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            rows="2"
            placeholder="Type your specific question here..."
            className="w-full border border-gray-300 p-4 pr-14 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <button
            className="absolute right-3 bottom-1 -translate-y-1/2 p-2 rounded-md text-white"
            style={{
              background: "linear-gradient(135.33deg, #1B9BA2 -22.8%, #F69E0A 22.96%, #EC4899 60.37%, #1B9BA2 105.88%)"
            }}
          >
            <Send size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}