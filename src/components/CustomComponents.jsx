import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CustomButton2 = () =>{
  return (
    <button type="button" className="text-gray-900 hover:text-white border border-highlight hover:bg-hightiht focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-700 dark:hover:bf-blue-500">
      Hello 
    </button>
  )
}

export const MainContent = ({ children }) => {
  return (
    <div className="px-2 md:px-7 sm:ml-72">
      <div className="">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>

      {children}
    </div>
  );
};

export const NotificationView = () => {
  const viewRef = useRef();
  const view = viewRef.current;

  useEffect(() => {
    if (view) {
      view.scrollTop = view.scrollHeight;
    }
  }, [view]);

  return (
    <div
      className="custom-className-scrollbar w-80 h-20 overflow-auto px-5 py-2 border-[#46CEFF] rounded-lg"
      style={{ scrollbarWidth: "thin" }}
      ref={viewRef}
    >


    </div>
  );
};


export const QuickNotification = ()=>{
  return (
    <div className="flex p-1 mb-1 text-xs text-blue-800 border-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"> 

    <span className="sr-only"></span>
    <div>
      <span className="font-medium"> alert</span>
    </div>
    </div>
  )
}