import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";

const SideBar = () => {
  const [hideSideBar, setHideSideBar] = useState(false);

  const topics = useMemo(
    () =>
      hideSideBar
        ? []
        : [
            "Experiments",
            "Data",
            "Data Sources",
            "Model Factory",
            "Model Tunning",
          ],
    [hideSideBar]
  );
  const menu = (
    <>
      <MenuOutlined onClick={() => setHideSideBar((prevState) => !prevState)} />
      <Menu
        style={{
          backgroundColor: "#dacbff",
          border: "none",
          marginTop: "1rem",
        }}
        mode="inline"
        selectedKeys={[]}
      >
        {topics.map((topic, index) => (
          <Menu.Item key={index} onClick={() => {}}>
            {topic}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
  return (
    <>
      <Layout.Sider
        className="sidebar"
        breakpoint={"lg"}
        theme="light"
        collapsedWidth={40}
        trigger={null}
        collapsed={hideSideBar}
      >
        <>{menu}</>
      </Layout.Sider>
    </>
  );
};

export default SideBar;
