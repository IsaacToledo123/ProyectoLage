import React from 'react';

const chatProto = () => {
  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
          <div className="relative">
            <span className="absolute text-green-500 right-0 bottom-0">
              <svg width="20" height="20">
                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
              </svg>
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
              <span className="text-gray-700 mr-3">Entrenador</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
          <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Can be verified on any platform using docker
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                  Your error message says permission denied, npm global installs must be given root privileges.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  Command was run with root privileges. I'm sure about that.
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I've update the description so it's more obviously now
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  FYI https://askubuntu.com/a/700266/510172
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Check the line above (it ends with a # so, I'm running it as root)
                  <pre># npm install -g @vue/devtools</pre>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                  Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white">
                  Are you using sudo?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  It seems like you are from Mac OS world. There is no /Users/ folder on linux ?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  I have no issue with any other packages installed with root permission globally.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                  yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I also have this issue, Here is what I was doing until now: #1076
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  even i am facing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
          </span>
          <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
        
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span className="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chatProto;
