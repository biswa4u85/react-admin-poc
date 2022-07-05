import React, { useEffect, useState } from 'react';
import { Button, Breadcrumb, Form, Row, Col, Input, Space, Upload, Select, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { UploadOutlined, } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'

const FormDetails = () => {
    const userdata = useSelector((state) => state.auth.userdata)

    const onFinish = (values) => {
        console.log(values)
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <Form name='dynamic_rule' onFinish={onFinish}>
            <Card className='user-card user-card-lg'>
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={24} lg={24} key='collapse-a' style={{ borderBottom: "1px solid #ccc ", paddingBottom: "10px" }}>
                        <Space>
                            <Breadcrumb separator='>'>
                                <Breadcrumb.Item>Dshboards</Breadcrumb.Item>
                                <Breadcrumb.Item href=''>Edit Profile</Breadcrumb.Item>
                            </Breadcrumb>
                        </Space>
                    </Col>

                    <Col xs={24} lg={24} key='collapse-a' style={{ margin: '50px 0' }}>




                        <Card className='user-card user-card-lg'>
                            <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                                <Col xs={24} lg={24} key='collapse-a'>
                                    <h2>Section One</h2>
                                </Col>
                                <Col xs={24} lg={24} key='collapse-a'>
                                    <Form.Item
                                        {...formItemLayout}
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
                                    <Form.Item {...formTailLayout}
                                        name='profile'
                                        label="Profile Image"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please add Profile Image',
                                            },
                                        ]}>

                                        <Upload style={{ marginLeft: 0 }} >
                                            <Button icon={<UploadOutlined />}>Upload</Button>
                                        </Upload>

                                    </Form.Item>

                                    <Form.Item
                                        {...formItemLayout}
                                        name='stagename'
                                        label='Username / Email'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your Email',
                                            },
                                        ]}>
                                        <Input placeholder='Please enter your Email' />
                                    </Form.Item>
                                    <Form.Item
                                        {...formItemLayout}
                                        name='managername'
                                        label='Phone Number'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter Manager Name',
                                            },
                                        ]}>
                                        <Input placeholder='Please enter Manager Name' />
                                    </Form.Item>

                                    <Form.Item
                                        {...formItemLayout}
                                        name='stagename'
                                        label='New Password'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your Password',
                                            },
                                        ]}>
                                        <Input placeholder='Please enter your Password' />
                                    </Form.Item>

                                    <Form.Item
                                        {...formItemLayout}
                                        name='stagename'
                                        label='Re-Enter Password'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your Re-Enter Password',
                                            },
                                        ]}>
                                        <Input placeholder='Please enter your Re-Enter Password' />
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Space size='large' >
                                            <Button type='primary' htmlType='submit'>
                                                Save
                                            </Button>
                                            <Button htmlType='submit'>
                                                Cancel
                                            </Button>
                                        </Space>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Form >
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


const Editrofile = () => {
    return (
        <div className='user-pages'>
            <AppAnimateGroup type='bottom'>
                <ComponentHeader
                    title='View Profile'
                />
                {/* <div><AiFillBell /></div> */}
                <div className='user-container' key='a'>
                    <FormDetails />
                </div>
            </AppAnimateGroup>
        </div>
    );
};


export default Editrofile;