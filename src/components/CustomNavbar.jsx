import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { MdTranslate } from "react-icons/md";

// export function NavbarResponsiveFeatures() {
//   // ! becarefull
//   //      const { authUser, authLogOut } = useUserAuth();
//   //      const navigate = useNavigate();
//   const [notifications, setNotifications] = useState([
//     { message: "khabo", category: "eating" },
//   ]);

//   const handleButtonClick = () => {
//     // Handle button click logic here
//     console.log("Button clicked!");
//   };
//   const [showHideClass, setShowHideClass] = useState(false);

//   return (
//     <div className="flex justify-between items-center  border-0">
//       <div
//         className="mb-3 cursor-pointer md:mb-0 md:ml-3 flex justify-between items-center"
//         onClick={() => {
//           setShowHideClass(!showHideClass);
//         }}
//       >
//         {/* {showHideClass ? (
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline focus:outline-none">
//             <div className="absolute  top-20 right-10  border rounded-lg shadow w-auto dark:bg-gray-700 dark:divide-gray-600">
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white divide-y divide-gray-400">
//                 <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
//                   <div>Jese Leos</div>{" "}
//                   <div className="font-medium truncate">name@email.com</div>
//                 </div>

//                 <div
//                   className="py-2 mr-3 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="avatarButton"
//                 >
//                   <div>
//                     <a
//                       href="#"
//                       className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Change password
//                     </a>
//                   </div>
//                 </div>

//                 <div className="py-1">
//                   <a
//                     href="#"
//                     className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Log out
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null} */}

//         <div
//           data-dropdown-toggle="userDropdown"
//           data-dropdown-placement="bottom-start"
//           className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#FFE0B2] rounded-full dark:bg-gray-600"
//         >
//           <span className="font-medium text-gray-600 dark:text-gray-300">
//             <img
//               src={
//                 "https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-1-129659bb.png"
//               }
//               alt="profile"
//             />
//           </span>

//           <div className="mb-3 md:mb-0">
//         <button
//           type="button"
//           className="relative inline-flex items-center p-2 mb-2 mr-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 "
//         >
//           <FaRegBell className="w-8 h-8" />
//           <span className="sr-only">Notifications</span>
//           <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white border-2 border-white rounded-full bg-[#E10000] top-1 right-1 dark:border-gray-900"></div>
//         </button>
//       </div>

//         </div>

//       </div>

//       <li className="mb-3 md:mb-0">
//         <button
//           type="button"
//           className="relative inline-flex items-center p-2 mb-2 mr-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 "
//         >
//           <FaRegBell className="w-8 h-8" />
//           <span className="sr-only">Notifications</span>
//           <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white border-2 border-white rounded-full bg-[#E10000] top-1 right-1 dark:border-gray-900"></div>
//         </button>{" "}
//       </li>

//     </div>
//   );
// }

export function NavbarResponsiveFeatures() {
  const [profileShow, setProfileShow] = useState(false);

  return (
    <div className="flex justify-between items-center bottom-0 p-3 mt-2">
      <div className="flex justify-between items-center bottom-0 h-10">
        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <FiSearch className="w-8 h-8" />
          <span className="font-medium text-xl ml-3 text-gray-600 dark:text-gray-300">
            Search
          </span>
        </button>
      </div>

      <div className="flex bottom-0 cursor-pointer justify-between items-center h-10 gap-2">
        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <MdTranslate className="w-8 h-8" />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <HiOutlineViewGridAdd className="w-8 h-8" />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg text-navbar-text hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <FaRegBell className="w-8 h-8" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white border-2 border-white rounded-full bg-[#E10000] top-1 right-1 dark:border-gray-900"></div>
        </button>
        <button
          onClick={() => {
            setProfileShow(!profileShow);
          }}
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="relative inline-flex items-center hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 w-10 h-10 overflow-hidden bg-[#FFE0B2] rounded-full dark:bg-gray-600"
        >
          <img
            src={
              "https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-1-129659bb.png"
            }
            alt="profile"
          />

          {profileShow ? (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline focus:outline-none">
              <div className="absolute  top-24 sm:top-32 sm:absolute right-10  border rounded-lg shadow w-auto dark:bg-gray-700 dark:divide-gray-600">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white divide-y divide-gray-400">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Jese Leos</div>{" "}
                    <div className="font-medium truncate">name@email.com</div>
                  </div>

                  <div
                    className="py-2 mr-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <div>
                      <a
                        href="#"
                        className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Change password
                      </a>
                    </div>
                  </div>

                  <div className="py-1">
                    <a
                      href="#"
                      className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
}

export const CustomHeaderV1 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sideMobileMenu, setSideMobileMenu] = useState(false);
  return (
    <header className="sticky top-4 z-50 m-0 w-full border boder-gray-200 bg-main-bg rounded-lg bg-white">
      <div className="px-3 py-2 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between mx-auto">
          <button
            onClick={() => {
              setMobileMenu();
            }}
            data-collapse-toggle="navbar-default"
            type="button"
            className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`w-full mx-4 grow md:block md:w-auto`}
            id="navbar-default"
          >
            <NavbarResponsiveFeatures
            // searchFunction={searchFunction}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
