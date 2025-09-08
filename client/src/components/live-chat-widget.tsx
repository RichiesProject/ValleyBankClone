import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: ''
  });

  const handleChatClick = () => {
    setIsOpen(!isOpen);
  };

  const handleStartChat = () => {
    setIsChatStarted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsChatStarted(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-96 h-[600px] z-[10000] flex flex-col" data-testid="chat-window">
          {/* Header */}
          <div className="bg-slate-800 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
            <div className="text-sm font-medium">Willamette Valley Bank</div>
            <button 
              onClick={handleClose}
              className="text-white hover:text-gray-300 p-1"
              data-testid="button-close-chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!isChatStarted ? (
            /* Initial Welcome Screen */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              {/* Bank Logo */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#2c3e50"/>
                    <path d="M4 12c0-1.5 1-3 2.5-4.5C8 6 10 5 12 5s4 1 5.5 2.5C19 9 20 10.5 20 12" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M4 16c2-1 4-1.5 6-1s4 1 6 0.5c2-0.5 4-1.5 4-2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M8 18c1.5-0.5 3-0.5 4 0s3 0.5 4.5 0" stroke="white" strokeWidth="1.2" fill="none"/>
                  </svg>
                </div>
                <div className="text-lg font-bold text-slate-800">
                  Willamette Valley Bank
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold text-slate-800 mb-8">How can we help?</h2>
              
              <button 
                onClick={handleStartChat}
                className="bg-slate-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-slate-700 transition-colors w-full max-w-xs"
                data-testid="button-start-chat"
              >
                Start Chat
              </button>

              {/* Footer */}
              <div className="mt-auto pt-6 text-xs text-gray-500 flex items-center justify-between w-full">
                <div className="flex items-center space-x-1">
                  <span>Powered by</span>
                  <span className="font-medium">eltropy</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 underline">
                  Co-browse Code
                </button>
              </div>
            </div>
          ) : (
            /* Chat Interface with Form */
            <div className="flex-1 flex flex-col">
              {/* Chat Header with ORION */}
              <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">🤖</span>
                  </div>
                  <span className="font-medium text-slate-800">ORION</span>
                </div>
                <button 
                  onClick={handleClose}
                  className="bg-slate-800 text-white px-3 py-1 rounded text-sm hover:bg-slate-700"
                  data-testid="button-end-chat"
                >
                  End
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 bg-gray-50">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    You have reached us outside of our normal business hours. We request you to please try again during our normal business hours.
                  </p>
                  <div className="text-xs text-gray-500 mt-2">09:17 AM</div>
                </div>

                <div className="bg-gray-200 rounded-lg p-3 mb-4">
                  <h3 className="font-medium text-slate-800 mb-3">After Business Hours Message</h3>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    data-testid="input-name"
                  />
                  
                  <div className="flex space-x-2">
                    <select className="px-3 py-3 border border-gray-300 rounded-lg bg-white">
                      <option>🇺🇸</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="+1"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    data-testid="input-email"
                  />
                  
                  <textarea
                    placeholder="Comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange('comments', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    data-testid="textarea-comments"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Live Chat Button - Bank Style */}
      <div
        onClick={handleChatClick}
        className="fixed bottom-6 right-6 cursor-pointer hover:opacity-90 transition-opacity z-[9999] flex flex-col items-center"
        data-testid="button-live-chat"
      >
        {/* Background container matching bank style */}
        <div className="bg-gray-800 rounded-lg p-3 flex flex-col items-center shadow-lg">
          {/* White speech bubble with dots - simplified */}
          <div className="bg-white rounded-full w-8 h-6 flex items-center justify-center mb-2">
            <div className="flex space-x-0.5">
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
          
          {/* LIVE CHAT text */}
          <div className="text-center leading-tight">
            <div className="text-cyan-400 text-[10px] font-bold tracking-wide">LIVE</div>
            <div className="text-white text-[10px] font-bold tracking-wide">CHAT</div>
          </div>
        </div>
      </div>
    </>
  );
}