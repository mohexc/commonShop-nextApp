import React, { FC } from 'react'
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    TeamOutlined,
    IdcardOutlined,
    DollarCircleOutlined,
    CodeSandboxOutlined,
    ApartmentOutlined,
    ShoppingCartOutlined,
    TagOutlined,
    ShoppingOutlined,
    MacCommandOutlined,
    DropboxOutlined,
    BarsOutlined
} from '@ant-design/icons';
import styles from './styles.module.css'
import { useRouter } from 'next/router';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderApp: FC = () => {
    const router = useRouter()
    const handleClickMenu = (e: any) => router.push(e.key)
    return (
        <Sider theme='light'>
            <div className={styles.logo} />
            <Menu mode="inline" style={{ height: '100%' }} onClick={handleClickMenu}>
                <Menu.Item key="/admin" icon={<PieChartOutlined />}>DASHBOARD</Menu.Item>
                <Menu.Item key="/admin/customers" icon={<TeamOutlined />}>CUSTOMERS</Menu.Item>
                <SubMenu icon={<CodeSandboxOutlined />} title="PRODUCTS">
                    <Menu.Item key="/admin/categories" icon={<ApartmentOutlined />}>CATEGORIES</Menu.Item>
                    <Menu.Item key="/admin/brands" icon={<MacCommandOutlined />}>BRANDS</Menu.Item>
                    <Menu.Item key="/admin/varainces" icon={<BarsOutlined />}>VARIANCES</Menu.Item>
                    <Menu.Item key="/admin/products" icon={<DropboxOutlined />}>PRODUCT</Menu.Item>
                </SubMenu>
                <Menu.Item key="/admin/orders" icon={<ShoppingOutlined />}>ORDERS</Menu.Item>
                <Menu.Item key="/admin/cart" icon={<ShoppingCartOutlined />}>CART</Menu.Item>
                <Menu.Item key="/admin/promotion" icon={<TagOutlined />}>PROMOTION</Menu.Item>
                <Menu.Item key="/admin/payment" icon={<DollarCircleOutlined />}>PAYMENT</Menu.Item>
                <Menu.Item key="/admin/empoyee" icon={<IdcardOutlined />}>EMPOYEE</Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SiderApp