import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import AdminLayout from './admin-layout'
import CustomerLayout from './customer-layout'

const LayoutApp: FC = ({ children }) => {
    const { user } = useAuthContext()
    const router = useRouter()
    const paths = router.pathname.split('/')
    return user.role === 'admin' && paths[1] === 'admin' && paths.length > 2
        ? <AdminLayout>{children}</AdminLayout>
        : <CustomerLayout>{children}</CustomerLayout>
}

export default LayoutApp