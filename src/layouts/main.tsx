import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { SettingOutlined, BarChartOutlined, ProductOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from "react";
import type { MenuItems } from "../types";

const { Header, Content, Sider, Footer } = Layout;

export default function BlankLayout() {
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  // parent
  const sideItems: MenuItems[] = [
    {
      name: 'Dashboard',
      icon: React.createElement(BarChartOutlined),
      route: '/option1'
    },
    {
      name: 'Customers',
      icon: React.createElement(UserOutlined),
      route: '/option2'
    },
    {
      name: 'Orders',
      icon: React.createElement(ShopOutlined),
      route: '/option3'
    },
    { 
      name: 'Products',
      icon: React.createElement(ProductOutlined),
      route: '/option3',
      children: [
        { name: 'Restock', route: '/option3/add-product' },
        { name: 'Manage Products', route: '/option3/product-list' },
      ] 
    },
    {
      name: 'Settings',
      icon: React.createElement(SettingOutlined),
      route: '/option3',
      children: [
        { name: 'Admin', route: '/option3/settings/general' },
        { name: 'Configuration', route: '/option3/settings/security' },
      ]
    },
  ]

  const menuItems: MenuProps['items'] = sideItems.map(
    (menu: MenuItems, index) => {
      return {
        key: `menu${index}`,
        icon: menu.icon,
        label: menu.name,
        children: menu.children?.map((subMenu, j) => {
          return {
            key: `menu${index}` + `sub${j}`,
            label: subMenu.name,
            icon: subMenu.icon,
          };
        }),
      };
    },
  );


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" width={200} style={{ background: colorBgContainer }}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
            <Breadcrumb
              items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
              style={{ margin: '16px 0' }}
            />
            <Content
              style={{
                padding: 24,
                margin: 0,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                minHeight: 'calc(100vh - 64px - 48px)', // Adjust for header and breadcrumb height
              }}
            >
              <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}