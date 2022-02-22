import { Layout } from 'antd'
import React, { FC } from 'react'
import HeaderApp from './HeaderApp'

const CustomerLayout: FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderApp />
      <Layout.Content style={{ padding: '0.5rem' }}>{children}</Layout.Content>
    </Layout>
  )
}

export default CustomerLayout