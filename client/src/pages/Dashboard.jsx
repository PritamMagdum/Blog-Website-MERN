import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComponent from "../components/DashboardComponent";

export default function Dashboard() {
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar or Left Section*/}
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {/* Profile or Right Section */}
      {tab === "profile" && <DashProfile />}

      {/* All Posts */}
      {tab === "posts" && <DashPosts />}

      {/* All Users */}
      {tab === "users" && <DashUsers />}

      {/* All Comments */}
      {tab === "comments" && <DashComments />}

      {/* Admin Dashboard */}
      {tab === "dash" && <DashboardComponent />}
    </div>
  );
}
