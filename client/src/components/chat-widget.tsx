export default function ChatWidget() {
  return (
    <div className="chat-widget" data-testid="chat-widget">
      <div className="flex flex-col items-center space-y-2">
        {/* White speech bubble with dots */}
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-gray-200">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Dark LIVE CHAT button */}
        <button 
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl font-semibold text-sm transform hover:scale-110 hover:-translate-y-2 hover:rotate-1"
          data-testid="button-live-chat"
        >
          LIVE CHAT
        </button>
      </div>
    </div>
  );
}
