import { RiHome6Line ,RiLayoutTopLine } from "react-icons/ri";
import { AiOutlineMail, AiFillSetting, AiOutlineFile } from "react-icons/ai";
import { BsChat, BsCheck2Square , BsBarChartFill} from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FiUsers , FiToggleLeft, FiMenu, FiHeadphones} from "react-icons/fi";
import { BiCheckbox ,BiSolidComponent } from "react-icons/bi";
import { TbFileTypography } from "react-icons/tb";
import { LiaIconsSolid, LiaIdCardSolid } from "react-icons/lia";
import {LuBox ,LuTable2} from 'react-icons/lu'
import {CgFileDocument } from 'react-icons/cg'

export const navigations = [
  {
    name: "Dashboards",
    icon: <RiHome6Line size={"25px"} />,
    children: [
      { name: "Analytics", icon: "", path: "/dashboard/analytics" },
      { name: "eCommerce", icon: "", path: "/dashboard/eCommerce" },
      { name: "CRM", icon: "", path: "/dashboard/crm" },
    ],
  },
  {
    title: "APPS & PAGES",
    name: "Email",
    icon: <AiOutlineMail size={"25px"} />,
    path: "/apps/email",
  },

  {
    name: "Chat",
    icon: <BsChat size={"25px"} />,
    path: "/app/email",
  },

  {
    name: "Calendar",
    icon: <CiCalendarDate size={"25px"} />,
    path: "/app/calendar",
  },
  {
    name: "invoice",
    icon: <FaFileInvoiceDollar size={"25px"} />,
    children: [
      { name: "List", icon: "", path: "/invoice/list" },
      { name: "Preview", icon: "", path: "/invoice/preview" },
      { name: "Edit", icon: "", path: "/invoice/edit" },
      { name: "Add", icon: "", path: "/invoice/add" },
    ],
  },

  {
    name: "User",
    icon: <FiUsers size={"25px"} />,

    children: [
      { name: "List", icon: "", path: "/user/list" },
      { name: "view", icon: "", path: "/user/view" },
    ],
  },

  {
    name: "Roles & Permissions",
    icon: <AiFillSetting size={"25px"} />,
    children: [
      { name: "Roles", icon: "", path: "/roles-permissions/roles" },
      { name: "Permissions", icon: "", path: "/roles-permissions/permissions" },
    ],
  },

  {
    name: "Pages",
    icon: <AiOutlineFile size={"25px"} />,
    children: [
      { name: "Help Center", icon: "", path: "/pages/help-center" },
      { name: "User Profile", icon: "", path: "/pages/user-profile" },
      { name: "Account Setting", icon: "", path: "/pages/account-setting" },
      { name: "Pricing", icon: "", path: "/pages/pricing" },
      { name: "FAQ", icon: "", path: "/pages/faq" },
      { name: "Miscellaneous", icon: "", path: "/pages/miscellaneous" },
    ],
  },

  {
    name: "Authentication",
    icon: <AiFillSetting size={"25px"} />,
    // children: [
    //   { name: "Roles", icon: "",
    //   children: [
    //     { name: "Roles", icon: "", path: "/poles-permissions/roles" },
    //     { name: "Permissions", icon: "", path: "/poles-permissions/permissions" },
    //   ],
    // },
    //   { name: "Permissions", icon: "", path: "/poles-permissions/permissions" },
    // ],
  },

  {
    name: "Wizard Examples",
    icon: <AiFillSetting size={"25px"} />,
    children: [
      { name: "Checkout", icon: "", path: "/wizard-examples/checkout" },
      {
        name: "Property Listing",
        icon: "",
        path: "/wizard-examples/property-listing",
      },
      { name: "Create Deal", icon: "", path: "/wizard-examples/create-deal" },
    ],
  },

  {
    name: "Dialog Examples",
    icon: <BiCheckbox size={"25px"} />,
    path: "/app/dialog-examples",
  },

  {
    title: "UI ELEMENTS",
    name: "Typography",
    icon: <TbFileTypography size={"25px"} />,
    path: "/ui-elements/typography",
  },

  {
    name: "Icons",
    icon: <LiaIconsSolid size={"25px"} />,
    path: "/ui-elements/icons",
  },

  {
    name: "Cards",
    icon: <LiaIdCardSolid size={"25px"} />,
    children: [
      { name: "Basic", icon: "", path: "/cards/basic" },
      {
        name: "Advance",
        icon: "",
        path: "/cards/advance",
      },
      { name: "Statistics", icon: "", path: "/cards/statistics" },
      { name: "Widgets", icon: "", path: "/cards/widgets" },
      { name: "Actions", icon: "", path: "/cards/actions" },
    ],
  },

  {
    name: "Components",
    icon: <BiSolidComponent size={"25px"} />,
    children: [
      { name: "Alert", icon: "", path: "/components/alert" },
      { name: "Avatar", icon: "", path: "/components/avatar" },
      { name: "Badge", icon: "", path: "/components/badge" },
      { name: "Button", icon: "", path: "/components/button" },
      { name: "Chip", icon: "", path: "/components/chip" },
      { name: "Dialog", icon: "", path: "/components/dialog" },
      { name: "Expansion Panel", icon: "", path: "/components/expansion-panel" },
      { name: "List", icon: "", path: "/components/list" },
      { name: "Menu", icon: "", path: "/components/menu" },
      { name: "Pagination", icon: "", path: "/components/pagination" },
      { name: "Progress Circular", icon: "", path: "/components/progress-circular" },
      { name: "Progress Linear", icon: "", path: "/components/progress-linear" },
      { name: "Snackbar", icon: "", path: "/components/snackbar" },
      { name: "Tabs", icon: "", path: "/components/tabs" },
      { name: "Timeline", icon: "", path: "/components/timeline" },
      { name: "Tooltip", icon: "", path: "/components/tooltip" },
    ],
  },

  {
    name: "Extensions",
    icon: <LuBox size={"25px"} />,
    children: [
      { name: "Tour", icon: "", path: "/extensions/tour" },
    ],
  },

  // FORMS & TABLES
  {
    title: "FORMS & TABLES",
    name: "Form Elements",
    icon: <FiToggleLeft size={"25px"} />,
    children: [
      { name: "Autocomplete", icon: "", path: "/form-elements/autocomplete" },
      { name: "Checkbox", icon: "", path: "/form-elements/checkbox" },
      { name: "Combobox", icon: "", path: "/form-elements/combobox" },
      { name: "Date Time Picker", icon: "", path: "/form-elements/date-time-picker" },
      { name: "File Input", icon: "", path: "/form-elements/file-input" },
      { name: "Radio", icon: "", path: "/form-elements/radio" },
      { name: "Custom Input", icon: "", path: "/form-elements/custom-input" },
      { name: "Range Slider", icon: "", path: "/form-elements/range-slider" },
      { name: "Rating", icon: "", path: "/form-elements/rating" },
      { name: "Select", icon: "", path: "/form-elements/select" },
      { name: "Slider", icon: "", path: "/form-elements/slider" },
      { name: "Switch", icon: "", path: "/form-elements/switch" },
      { name: "Textarea", icon: "", path: "/form-elements/textarea" },
      { name: "Textfield", icon: "", path: "/form-elements/textfield" },
    ],
  },

  {
    name: "Form Layouts",
    icon: <RiLayoutTopLine size={"25px"} />,
    path: "/form/form-layouts",
  },

  {
    name: "Form Validation",
    icon: <BsCheck2Square size={"25px"} />,
    path: "/form/form-validation",
  },

  {
    name: "Tables",
    icon: <LuTable2 size={"25px"} />,
    children: [
      { name: "Simple Table", icon: "", path: "/tables/simple-table" },
      { name: "Data Table", icon: "", path: "/tables/data-table" },
      
    ],
  },

  // CHARTS

  {
    title:"CHARTS",
    name: "Charts",
    icon: <BsBarChartFill size={"25px"} />,
    children: [
      { name: "Apex Chart", icon: "", path: "/charts/apex-chart" },
      { name: "Chartjs", icon: "", path: "/charts/Chartjs" },

    ],
  },
  // OTHERS
  {
    title:'OTHERS',
    name: "Access Control",
    icon: <AiFillSetting size={"25px"} />,
   path:"/others/access-control"
  },

  {

    name: "Nav Levels",
    icon: <FiMenu size={"25px"} />,
    children: [
      { name: "Level 2.1", icon: "" ,path:"/nav-levels/level-2-1"},
      { name: "Level 2.2", icon: "",path:"/nav-levels/level-2-2"},
      { name: "Level 3.1", icon: "", path:"/nav-levels/level-3-1"},
      { name: "Level 3.2", icon: "", path:"/nav-levels/level-3-2"},
    ],
  },

  {
    name: "Disabled Menu",
    icon: <AiFillSetting size={"25px"} />,
   path:"/others/disabled-menu"
  },

  {
    name: "Raise Support",
    icon: <FiHeadphones size={"25px"} />,
   path:"/others/raise-support"
  },

  {
    name: "Documentation",
    icon: <CgFileDocument size={"25px"} />,
   path:"others/documentation"
  },


];
