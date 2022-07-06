import React, { useEffect, useState } from 'react';
import { Button, Menu, Table, Row, Col, Input, Space, InputNumber, Upload, Select, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { BsSearch } from "react-icons/bs";

const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);

const FormDetails = () => {

    const onFinish = (values) => {
        console.log(values)
    };
    function onChange(value) {
        console.log('changed', value);
    }

    const columns = [
        {
            title: 'Brand',
            dataIndex: 'name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
            sorter: {},
        },

        {
            title: 'Description',
            dataIndex: 'age',
            key: 'age',
            width: 150,
        },
        {
            title: 'Followers',
            dataIndex: 'address',
            key: 'address 1',
            ellipsis: true,
        },
        {
            title: 'Videos',
            dataIndex: 'address',
            key: 'address 2',
            ellipsis: true,
        },
        {
            title: 'Influencers',
            dataIndex: 'address',
            key: 'address 3',
            ellipsis: true,
        },
        {
            title: 'Brand Created ON',
            dataIndex: 'address',
            key: 'address 4',
            ellipsis: true,
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Nike',
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            age: "3,496",
            tags: ['virat kohli William Smith,john'],
        },
        {
            key: '2',
            name: 'Adidas',
            age: "3,496",
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['virat kohli William Smith,john'],
        },
        {
            key: '3',
            name: 'Puma',
            age: "3,496",
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['virat kohli William Smith,john'],
        },
        {
            key: '4',
            name: 'Nike',
            age: "3,496",
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['virat kohli William Smith,john'],
        },
        {
            key: '5',
            name: 'Nike',
            age: "3,496",
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['virat kohli William Smith,john'],
        },
    ];

    return (
        <>
            <Card className='user-card user-card-lg'>
                <h5>Manage Brand</h5>
                <hr style={{margin:"30px 0"}} />
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={12} lg={12} key='collapse-a'>
                        <Button type='primary' htmlType='submit'>
                            Add New Brand
                        </Button>
                    </Col>
                    <Col xs={12} lg={12} key='collapse-a' style={{ textAlign: "right" }}>
                        <Space>
                            Sort by
                            <Space>
                                <InputNumber placeholder='All' min={0} max={10} step={0.1} onChange={onChange}
                                    style={{
                                        width: 200,
                                    }} />
                            </Space>

                            <BsSearch style={{ margin: "0 10px", fontSize: "20px", cursor: "pointer" }} />
                        </Space>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={data} />;
            </Card>
        </>
    );
};

const formItemLayout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 12,
    },
};

const formTailLayout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 12,
        offset: 0,
    },
};


const ManageList = () => {
    return (
        <div className='user-pages'>
            <AppAnimateGroup type='bottom'>

                <div className='user-container' key='a'>
                    <FormDetails />
                </div>
            </AppAnimateGroup>
        </div>
    );
};


export default ManageList;