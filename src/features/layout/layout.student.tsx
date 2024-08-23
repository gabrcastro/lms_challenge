import { NavBarComponent } from "@/components/navbar.component";
import { Outlet } from "react-router-dom";

export default function LayoutStudent() {
  return (
    <div className="w-full h-full overflow-hidden">
      <NavBarComponent />
      <main className="w-full h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
