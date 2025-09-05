import { MessageCircle } from 'lucide-react';

export default function ChatWidget() {
  return (
    <div className="chat-widget" data-testid="chat-widget">
      <button 
        className="bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl flex items-center space-x-2 font-medium"
        data-testid="button-live-chat"
      >
        <MessageCircle className="w-5 h-5" fill="white" />
        <span className="text-sm font-semibold tracking-wide">LIVE CHAT</span>
      </button>
    </div>
  );
}
