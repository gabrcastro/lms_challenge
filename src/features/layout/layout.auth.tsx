import { PlaySquareIcon } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export default function LayoutAuth() {
  return (
    <main className="w-full h-full flex">
      <div className="hidden md:flex w-full bg-blue-500 items-center justify-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg text-neutral-50 font-semibold md:text-base absolute top-0 left-0 mt-5 ml-10"
        >
          <PlaySquareIcon className="h-6 w-6" />
          <span className="">MegaNews LMS</span>
        </NavLink>
        <img src="/public/learning.png" alt="" className="w-[60%] h-[60%]" />
      </div>
      <div className="w-full md:w-2/3">
        <Outlet />
      </div>
    </main>
  );
}
