import React, { FC } from 'react'
import { Table, Tag, Space, Card, Row, Col, Button, Dropdown, Menu } from 'antd';
import { useRouter } from 'next/router';
import { DownOutlined } from '@ant-design/icons';


const ProductsPage: FC = () => {
    const router = useRouter()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags: any) => (
                <>
                    {tags.map((tag: any) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
                <Dropdown.Button
                    icon={<DownOutlined />}
                    overlay={(
                        <Menu>
                            <Menu.Item key="view" onClick={() => router.push(`/admin/customers/${record.id}`)}>View/Edit</Menu.Item>
                            <Menu.Item key="delete">Delete</Menu.Item>
                        </Menu>
                    )}
                >
                    Action
                </Dropdown.Button>
            ),
        },
    ];

    const data = [
        {
            id: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            id: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            id: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (

        <Card>
            <Row style={{ margin: '1rem' }}>
                <Col lg={20} >
                    <h3>Custemers</h3>
                </Col >
                <Col lg={4}>
                    <Button block type='primary' onClick={() => router.push('/admin/customers/create')}>Create</Button>
                </Col>
            </Row>
            <Table rowKey={record => record.id} columns={columns} dataSource={data} />
        </Card>
    )
}

export default ProductsPage