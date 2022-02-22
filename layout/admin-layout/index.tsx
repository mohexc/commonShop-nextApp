import React, { FC } from 'react'
import { Layout } from 'antd';
import SiderApp from './SiderApp';
import HeaderApp from './HeaderApp';

const AdminLayout: FC = ({ children }) => {
  return (
    <Layout>
      <SiderApp />
      <Layout style={{ height: '100vh' }}>
        <HeaderApp />
        <Layout.Content style={{ padding: '0.5rem' }}>{children}</Layout.Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout