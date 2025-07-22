import { Outlet, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { SettingOutlined, BarChartOutlined, ProductOutlined, UserOutlined, ShopOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from "react";
import type { MenuItems } from "../types";

const { Content, Sider, Footer } = Layout;

export default function BlankLayout() {
  // parent
  const router = useRouter();

  const sideItems: MenuItems[] = [
    {
      name: 'Dashboard',
      icon: React.createElement(BarChartOutlined),
      route: '/home'
    },
    {
      name: 'Customers',
      icon: React.createElement(UserOutlined),
      route: '/customers'
    },
    {
      name: 'Orders',
      icon: React.createElement(ShopOutlined),
      route: '/orders'
    },
    { 
      name: 'Products',
      icon: React.createElement(ProductOutlined),
      route: '/products'
    },
    {
      name: 'Settings',
      icon: React.createElement(SettingOutlined),
      children: [
        { name: 'Manage Devices', route: '/settings/devices' },
        { name: 'Manage Accounts', route: '/settings/users' },
        { name: 'Configuration', route: '/settings/config' },
      ]
    },
  ]

  const menuItems: MenuProps['items'] = sideItems.map(
    (menu: MenuItems) => {
      return {
        key: menu.route ?? menu.name.toLowerCase( ),
        icon: menu.icon,
        label: menu.name,
        children: menu.children?.map((subMenu) => {
          return {
            key: subMenu.route ?? menu.name.toLowerCase( ),
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
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={({ key }) => router.navigate({ to: key })}
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