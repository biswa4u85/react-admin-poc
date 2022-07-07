import React, { useEffect, useState, useRef } from 'react';
import { Button, Breadcrumb, Form, Row, Col, Input, Space, Image, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { UploadOutlined, } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'


const FormDetails = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const userdata = useSelector((state) => state.auth.userdata)

    const pageActive = useRef(false);
    const [loading, setLoading] = useState(false)
    const { TextArea } = Input;

    const onFinish = (values) => {
        console.log(values)
        // let params = { ...values, token, id: singledata._id }
        // pageActive.current = true;
        // dispatch(upDate(params))
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <Form name='dynamic_rule'
            onFinish={onFinish}>
            <Card className='user-card user-card-lg'>
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={24} lg={24} key='collapse-a' style={{ borderBottom: "1px solid #ccc ", paddingBottom: "10px" }}>
                        <Space>
                            <Breadcrumb separator='>'>
                                <Breadcrumb.Item>Manager Brand</Breadcrumb.Item>
                                <Breadcrumb.Item href=''>Add New Brand</Breadcrumb.Item>
                            </Breadcrumb>
                        </Space>
                    </Col>
                    <Col xs={24} lg={24} key='collapse-a' style={{ margin: '50px 0' }}>
                        <Card className='user-card user-card-lg'>
                            <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                                <Col xs={24} lg={24} key='collapse-a'></Col>
                                <Col xs={24} lg={20} key='collapse-a'>

                                    <Form.Item

                                        {...formItemLayout}
                                        name='stagename'
                                        label='Select Influencers'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your Email',
                                            },
                                        ]}>
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
const NewInfluencers = () => {
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


export default NewInfluencers;