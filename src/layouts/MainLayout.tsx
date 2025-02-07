import { Outlet } from "react-router-dom";
import { Button } from "antd";
const MainLayout = () => {
  return (
    <div>
      {/* logout */}
      <div className="flex justify-end w-full">
        <Button
          type="link"
          onClick={() => {
            localStorage.removeItem("token");
            //@ts-ignore
            window.navigate("/login");
          }}
        >
          退出登录
        </Button>
      </div>
      <main>
        <Outlet />
      </main>
      {/* 这里可以放页脚等公共组件 */}
    </div>
  );
};

export default MainLayout;
