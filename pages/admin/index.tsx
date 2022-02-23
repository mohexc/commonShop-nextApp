import { Button } from 'antd'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const AdminSignIn: FC = () => {
  const router = useRouter()
  return (
    <div>
      <h3>Login</h3>
      <Button type='primary' onClick={() => router.push('/admin/dashboard')}>GO Dashboard</Button>
    </div>
  )
}

export default AdminSignIn