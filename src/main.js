import React from "react";

import { Layout, Button } from "antd";
import MainContent from "./MainContent";
import MainSider from "./MainSider";

const { Header, Sider, Content, Footer } = Layout;

function Main(props) {
  const [collapse, setCollapse] = React.useState(true);
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <MainSider collapse={collapse} onCollapse={val => setCollapse(val)} />
        <Layout>
          <Header>
            <Button onClick={() => setCollapse(!collapse)} type={"dashed"}>
              Collapse
            </Button>
          </Header>
          <MainContent />
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
