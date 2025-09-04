import { useState } from 'react';
import { X } from 'lucide-react';

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="chat-widget" data-testid="chat-widget">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center space-x-3 mb-3">
          <img 
            src="https://d1lvyn09g7nf92.cloudfront.net/Willamette-Valley-Bank-475139159/sbr/logo_1735234240.png?Expires=1757028272&Signature=UE8oaLnoqX1~vTpRK7Ur9mQd1vPVgNJVp4va3q14uPHInr3rI3QiYE3rfYGKQfnNtcbgUllmtloG80Oi3zOxR~xeryh37qtmRq1vBRg7S88TY7muvSHVbkPZyPp9pchIWdPaOO9A8es4wLdl9csb27-E9zI7kJe0lPNXTPXT3jBIAwTgcYm8mg9K8yK7hl3nQ7WMNYrxAN9QezW15oFuyYcomcx-wVckBFCo33YnECc3HKiwuzDHV~rlbh~V-upBNvPSKy9HAkh27LD9PQcw3MkuARNGQoH8-ITcgYp6AWxIRYC0mV5g1SDs7v8mNHwXTHpOoWUp2qTFStDRDcOHlw__&Key-Pair-Id=APKAJ2NIENK5IQFNL4CQ" 
            alt="Willamette Valley Bank" 
            className="w-8 h-8 rounded-full"
            data-testid="img-chat-logo"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-sm text-gray-900" data-testid="text-chat-bank-name">
              Willamette Valley Bank
            </h4>
            <p className="text-xs text-gray-600" data-testid="text-chat-help-message">
              How can we help?
            </p>
          </div>
          <button 
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setIsVisible(false)}
            data-testid="button-close-chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <img 
              src="https://d1lvyn09g7nf92.cloudfront.net/Willamette-Valley-Bank-475139159/sbr/botAvatar_1735234240.png?Expires=1757028272&Signature=eUQn60IDx9~SaRnN5ea3cF7N-hgzW4NdKMk7yVT-WjcwLbm4J5crk5jA1XFOMRSBtskwXuifp4yO~2MVb9TesMR98KazX-b8q2PW5FI-NiMIIX9bm~cmG98xd0jHHp-gaOeMHn8nkSe085nQ6MENFYNnUltduNy2EUK3VOHVG4GRYr4LymbKG-gCQbzzWAYhJLo1tAIbUic9eUvrCbCs8U7SWQF~vDfF47XTZzqD4uyVqT6wV57CHIpnfyYlqXRGnEedUjcgCfeMONaIw78AjZHN5D0EB0zzClzndOl9CtImX-4xqWfMFK2koM1IlUw20g4M8nKYjluC~FubFRJzTw__&Key-Pair-Id=APKAJ2NIENK5IQFNL4CQ" 
              alt="Chat Assistant" 
              className="w-6 h-6 rounded-full"
              data-testid="img-chat-bot-avatar"
            />
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 max-w-xs">
              <p data-testid="text-chat-bot-message">
                Hi! I'm here to assist you. Need help? Click here to chat with me anytime.
              </p>
            </div>
          </div>
        </div>
        <button 
          className="w-full bg-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors mt-3"
          data-testid="button-start-chat"
        >
          Start Chat
        </button>
        <div className="text-xs text-gray-500 text-center mt-2">
          <a 
            href="https://eltropy.com/" 
            className="hover:text-gray-700 flex items-center justify-center space-x-1"
            data-testid="link-powered-by-eltropy"
          >
            <span>Powered by</span>
            <span className="font-medium">Eltropy</span>
          </a>
        </div>
      </div>
    </div>
  );
}
