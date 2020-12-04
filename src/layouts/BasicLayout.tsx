import React from 'react';
import { Layout, Menu } from 'antd';
import { ConnectProps } from '@@/plugin-dva/connect';

const { Header, Content } = Layout;

interface IBasicLayoutProps extends ConnectProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<IBasicLayoutProps> = props => {
  const { children, location } = props;

  const selectedKey =
    location.pathname === '/' ? 'index' : location.pathname.substring(1);

  // @ts-ignore
  const onClick = e => {
    const { history } = props;
    const { key } = e;
    history.push('/' + (key === 'index' ? '' : key));
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          triggerSubMenuAction="click"
          theme="dark"
          selectedKeys={[selectedKey]}
          mode="horizontal"
          onClick={onClick}
        >
          <Menu.Item key="index">首页</Menu.Item>
          <Menu.Item key="etf">ETF</Menu.Item>
          <Menu.Item key="debt">可转债</Menu.Item>
          <Menu.Item key="ticket">门票股</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px' }}>{children}</Content>
    </Layout>
  );
};

export default BasicLayout;
