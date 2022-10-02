import { Layout } from "antd";
import React from "react";
import Banner from "./banner/Banner";
import ContentComp from "./Content";
import AppHeader from "./header/Header";
const { Header, Content } = Layout;
const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Banner />
        <ContentComp />
      </Content>
    </Layout>
  );
};

export default MainLayout;
