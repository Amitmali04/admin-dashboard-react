import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { GoDot } from "react-icons/go";

function CustomSideBarButton({ navigations }) {
  const [rotaleDown, setRotaleDown] = useState(false);

  return (
    <li
      onClick={() => {
        setRotaleDown(!rotaleDown);
      }}
    >
      <NavLink
        to={navigations.path ?? ""}
        className="flex justify-between items-center w-full p-2 transition duration-75 rounded-sm group text-[#4B4B4B] hover:bg-[#EEEEEE] hover:text-[#414141]"
      >
        <div className="flex justify-between items-center">
          <span>{navigations.icon} </span>
          <span className="ml-3">{navigations.name}</span>
        </div>
        {navigations.children?.length > 0 && (
          <AiOutlineRight
            size={"20px"}
            className={!rotaleDown ? "rotate-90" : ""}
          />
        )}
      </NavLink>
    </li>
  );
}

function CustomSideBarButtonMultiLavel({ navigations }) {
  console.log(navigations);
  const [showChildren, setShowChildren] = useState(false);
  return (
    <li>
      <button
        onClick={() => {
          setShowChildren(!showChildren);
        }}
        className="flex items-center w-full p-2  rounded-sm group text-[#4B4B4B] hover:bg-[#EEEEEE] hover:text-[414141]"
        aria-controls={navigations.name}
        data-collapse-toggle={navigations.name}
      >
       
        <span>{navigations.icon}</span>
        <span
          className="flex-1 ml-3 text-left whitespace-nowrap capitalize"
          sidebar-toggle-item
        >
          {navigations.name}
        </span>
        {navigations.children?.length > 0 && (
          <AiOutlineRight
            size={"20px"}
            className={showChildren ? "rotate-90" : ""}
          />
        )}
      </button>

      {navigations.children?.length && showChildren ? (
        <ul
          id={navigations.name}
          className="py-2 space-x-2 mt-[-2] bg-[#f8f8f8]"
        >
          <li>
            {navigations.children.map((navList) => (
              <NavLink
                activeClassName="active"
                to={navList.path ?? ""}
                className="flex items-center w-full p-2 transition duration-75 group rounded-sm text-[#4B4B4B] hover:bg-[#EEEEEE] hover:text-[414141]"
              >
                <span>
                  <GoDot size={"25px"}/>
                </span>
                <span className="ml-3">{navList.name}</span>
              </NavLink>
            ))}
          </li>
        </ul>
      ) : (
        ""
      )}
    </li>
  );
}

export function CustomSideBar({ navigations }) {
  console.log(navigations);
  const [localNavigation, setLocalNavigation] = useState(navigations);
  const [toggleButton, setToggleButton] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  const sidebarToggle = (
    <button
      data-drawer-target="logo-sidebar"
      aria-controls="logo-sidebar"
      className="absolute inline-flex items-center p-2 text-sm text-gray-500 rounded-lg right-1 top-1 dark:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 h-8 ml-5 my-[25px]"
    >
      <span className="sr-only">Close sidebar</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        role="button"
        tag="i"
        className="text-2xl"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
        </g>
      </svg>
    </button>
  );

  const compamyIcon = (
    <div
      data-drawer-target="logo-sidebar"
      aria-controls="logo-sidebar"
      className="h-8 ml-5 my-[25px] flex gap-4 items-center"
    >
      <svg
        width="32"
        height="22"
        viewBox="0 0 34 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z"
          fill="currentColor"
        ></path>
        <path
          opacity="0.06"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z"
          fill="#161616"
        ></path>
        <path
          opacity="0.06"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z"
          fill="#161616"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z"
          fill="currentColor"
        ></path>
      </svg>

      <h1 class="text-3xl capitalize font-bold">vuexy</h1>
    </div>
  );

  const scrollableMenuArea = (
    <div className="h-full px-3 pb-4 overflow-y-auto bg-main-bg dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {localNavigation?.map((navList) => (
          <>
           
              {navList.title?.length>0 ?  <p className="text-sm ml-3 p-2 my-5 text-[#919191]"> {navList.title}  </p>: <p className="hidden"> {navList.title}  </p> }
           
            {navList.children?.length ? (
              <CustomSideBarButtonMultiLavel navigations={navList} />
            
            ) : (
              <CustomSideBarButton navigations={navList} />
             
            )}
          </>
        ))}

        <div className="h-[250px]"></div>
      </ul>
    </div>
  );

  return (
    <aside
      id="logo-sidebar"
      aria-hidden="true"
      className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full drop-shadow-sidebar bg-main-bg sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 border-r-2 boder-gray-200 drawer-side"
    >
      {sidebarToggle}
      {compamyIcon}
      {scrollableMenuArea}
    </aside>
  );
}
