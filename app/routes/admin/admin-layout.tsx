import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems, MobileSidebar } from "../../../components";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";
import type { Route } from "./+types/dashboard";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) return redirect("/sign-in");

    let existingUser = await getExistingUser(user.$id);

    if (!existingUser) {
      existingUser = await storeUserData();
    }

    if (existingUser?.status !== "admin") return redirect("/");

    return existingUser;
  } catch (e) {
    console.log("Error in clientLoader", e);
    return redirect("/sign-in");
  }
}

const AdminLayout = ({ loaderData }: { loaderData: Route.ComponentProps }) => {
  const user = loaderData;

  return (
    <div className="admin-layout">
      <MobileSidebar />

      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems handleClick={() => {}} />
        </SidebarComponent>
      </aside>

      <aside className="children">
        <Outlet context={{ user }} />
      </aside>
    </div>
  );
};

export default AdminLayout;
