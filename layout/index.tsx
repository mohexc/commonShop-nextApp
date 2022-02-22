import React, { FC } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import AdminLayout from './admin-layout'
import CustomerLayout from './customer-layout'

const LayoutApp: FC = ({ children }) => {
    const { user } = useAuthContext()
    return user.role === 'admin'
        ? <AdminLayout>{children}</AdminLayout>
        : <CustomerLayout>{children}</CustomerLayout>
}

export default LayoutApp