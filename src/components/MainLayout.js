import { Layout } from "antd";
import React from "react";
import Banner from "./banner/Banner";
import AppHeader from "./header/Header";
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Banner />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default MainLayout;
