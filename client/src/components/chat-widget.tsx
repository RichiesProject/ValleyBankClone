import { useState } from 'react';
import { X } from 'lucide-react';

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="chat-widget" data-testid="chat-widget">
      <div className="bg-white rounded-xl shadow-xl border border-gray-300 p-4 max-w-xs">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">WV</span>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-900" data-testid="text-chat-bank-name">
                Hi! I'm here to assist you.
              </h4>
              <p className="text-xs text-gray-600" data-testid="text-chat-help-message">
                Need help? Click here to chat with me anytime.
              </p>
            </div>
          </div>
          <button 
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            onClick={() => setIsVisible(false)}
            data-testid="button-close-chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
