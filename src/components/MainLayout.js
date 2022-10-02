import { Layout } from "antd";
import React from "react";
import Banner from "./banner/Banner";
import ContentComp from "./Content";
import DataGrid from "./dataGrid/DataGrid";
import AppHeader from "./header/Header";
import SearchBar from "./searchbar/SearchBar";
const { Header, Content, Footer } = Layout;
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
      <Footer>footer</Footer>
    </Layout>
  );
};

export default MainLayout;
