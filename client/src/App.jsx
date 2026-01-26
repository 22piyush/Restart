import React from "react";

function App() {
  return (
    <>
      <div className="h-full">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="bg- h-[60px] flex-shrink-0 bg-black text-white">
            Header
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="h-[300px] bg-red-500 text-gray-900">App</div>
            <div className="h-[300px] bg-red-500">App</div>
            <div className="h-[300px] bg-red-500">App</div>
            <div className="h-[300px] bg-red-500">App</div>
            <div className="h-[300px] bg-red-500">App</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
