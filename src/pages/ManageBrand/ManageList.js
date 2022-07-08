import React, { useEffect, useState } from 'react';
import { Button, Menu, Table, Row, Col, Input, Space, InputNumber, Form, Select, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { IoMdAdd } from 'react-icons/io';
import { DoubleRightOutlined, EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import { getbrand,singledata,deletData } from '../../store/BrandRedux'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'


const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);

const FormDetails = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const brandlist = useSelector((state) => state.brand.brandlist)

    useEffect(() => {
        dispatch(getbrand({ token }))
    }, [])
    const deletitem = (item) => {
        dispatch(deletData({ token, id: item._id }))
        // console.log(item)
      }

    const handlePageChange = (page, size, searchVal = null) => {
        console.log('Received values of form: ', page);
    }
    console.log(brandlist)

    function onChange(value) {
        // console.log('changed', value);
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
            dataIndex: 'description',
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
        {
            title: 'Action',
               key: 'action',
               render: (text, record) => (
                  
              <Space size='middle'>
                   {/* <DoubleRightOutlined style={{ color: '#52c41a' }} 
                onClick = {() => {
                    dispatch(singledata(record))
                       navigate(`/ManageBrand/addnewbrand`)
                }
               }
                /> */}
                <EditOutlined style={{ color: 'blue' }} />
                <DeleteOutlined
                onClick={() => deletitem(record)}
                style={{ color: 'orange' }} />
           
                 </Space>
            ),
        },
    ];

    return (
        <>
         <h3>Manage Brand</h3>
            <Card className='user-card user-card-lg'>
               
                <Space direction='vertical' style={{ width: '100%' }}>
                
                    <Form
                        form={form}
                        name='search'
                        className='ant-advanced-search-form'
                        onFinish={handlePageChange}>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item
                                    name='username'
                                    label='Name'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ]}>
                                    <Input placeholder='Please input your name' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name='username'
                                    label='Name'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ]}>
                                    <Input placeholder='Please input your name' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} >
                                <Button style={{ float: 'left' }} type='primary' onClick={() => navigate(`/ManageBrand/addnewbrand`)}><IoMdAdd /> Add Product</Button>
                                <div style={{ textAlign: 'right' }}>
                                    <Button type='primary' htmlType='submit'>
                                        Search
                                    </Button>
                                    <Button
                                        style={{ margin: '0 8px' }}
                                        onClick={() => {
                                            form.resetFields();
                                        }}>
                                        Clear
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Space>
                <br/>
                <br/>
                
                <Table columns={columns} dataSource={brandlist} />
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