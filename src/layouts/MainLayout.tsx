import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* 这里可以放导航栏等公共组件 */}
      <main>
        <Outlet />
      </main>
      {/* 这里可以放页脚等公共组件 */}
    </div>
  );
};

export default MainLayout; 