import React from "react";
import { Layout, Menu, Icon, Button, Drawer } from "antd";
import useMedia from "react-media-hook2";

const { Sider } = Layout;
const { SubMenu } = Menu;
export default function MainSider(props) {
  const { collapse } = props;
  const setCollapse = (val) => {
    props.onCollapse(val);
  };
  const isMobile = useMedia({
    onChange: (val) => {
      setCollapse(false);
    },
    query: "(max-width: 599px)"
  })[0];
  return (
    <>
      {isMobile ? (
        <Drawer
          closable={false}
          visible={!collapse}
          placement={"left"}
          width={200}
          className="ant-pro-sider-menu"
          onClose={() => setCollapse(true)}
          style={{ padding: 0, height: "100vh" }}
        >
          <Sider
            collapsible
            collapsed={isMobile ? false : collapse}
            breakpoint={"lg"}
            onCollapse={(val) => {
              setCollapse(val);
            }}
          >
            <div className="ant-pro-sider-menu-logo">asd</div>
            <MainMenu />
          </Sider>
        </Drawer>
      ) : (
        <Sider
          collapsible
          collapsed={collapse}
          breakpoint={"lg"}
          onCollapse={(val) => {
            setCollapse(val);
          }}
        >
          <div className="ant-pro-sider-menu-logo">asd</div>

          <MainMenu />
        </Sider>
      )}
    </>
  );
}

export function MainMenu(props) {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            <span>榜单中台</span>
          </span>
        }
      >
        <Menu.Item key="3">榜单注册信息</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
