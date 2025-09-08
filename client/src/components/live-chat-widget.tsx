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
        className="fixed bottom-6 right-6 bg-transparent hover:bg-gray-50 transition-colors z-40 flex flex-col items-center space-y-1 p-2 rounded-lg"
        data-testid="button-live-chat"
      >
        {/* Speech bubble icon with three dots */}
        <div className="relative bg-white rounded-full p-3 shadow-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5C21 16.194 16.97 20 12 20C10.73 20 9.527 19.752 8.44 19.305L3 21L4.696 15.56C4.248 14.473 4 13.27 4 12C4 7.306 8.03 3.5 12 3.5C16.97 3.5 21 6.806 21 11.5Z" fill="white" stroke="#e5e5e5" strokeWidth="1"/>
            {/* Three dots */}
            <circle cx="9" cy="12" r="1.5" fill="#6b7280"/>
            <circle cx="12" cy="12" r="1.5" fill="#6b7280"/>
            <circle cx="15" cy="12" r="1.5" fill="#6b7280"/>
          </svg>
        </div>
        <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">LIVE<br />CHAT</span>
      </button>
    </>
  );
}