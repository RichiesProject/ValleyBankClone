import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);

  const handleChatClick = () => {
    setIsOpen(!isOpen);
    if (!isChatStarted) {
      setIsChatStarted(true);
    }
  };

  return (
    <>
      {/* Chat bubble */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl border border-gray-200 w-80 z-50" data-testid="chat-bubble">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Hi! I'm here to assist you.</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              data-testid="button-close-chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-3">
              Need help? Click here to chat with me anytime.
            </p>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors w-full"
              data-testid="button-start-chat"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Live Chat Button */}
      <button
        onClick={handleChatClick}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors z-40 flex items-center space-x-2"
        data-testid="button-live-chat"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">LIVE CHAT</span>
      </button>
    </>
  );
}