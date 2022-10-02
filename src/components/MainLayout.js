import { Layout } from "antd";
import React from "react";
import AppHeader from "./header/Header";
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content> cotnetn cotnent</Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default MainLayout;
