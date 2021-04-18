import React from "react";
import classNames from "../utils/classNames";
import Footer from "./molecules/Footer";
import Sidebar from "./templates/Sidebar";

interface LayoutProps {
  title?: string;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="h-screen">
      <Sidebar />
      <div
        className={classNames(
          "min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 lg:ml-sidebar"
        )}
      >
        <div>{children}</div>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
