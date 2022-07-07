import React, { useEffect, useState } from 'react';
import { Button, Breadcrumb, Form, Row, Col, Input, Space, Image, Affix, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { AiFillBell } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from '../../store/AuthRedux'

const FormDetails = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const singleres = useSelector((state) => state.auth.singleres)

    const onFinish = (values) => {
        console.log(values)
    };
    useEffect(() => {
        dispatch(getProfile({ token }))
    }, [])

    console.log(singleres)
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        //Biswa - Remove Form, why use key='collapse-a'

        <Form name='dynamic_rule' onFinish={onFinish}>
            <Card className='user-card user-card-lg' >
                <Space>
                    <Breadcrumb separator='>'>
                        <Breadcrumb.Item>Manage Users</Breadcrumb.Item>
                        <Breadcrumb.Item href=''>VIew User </Breadcrumb.Item>
                    </Breadcrumb>
                </Space>

                <hr style={{ margin: "20px 0" }} />

                <Space style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <Image
                        width={300}
                        height={300}
                        src='error'
                        fallback='data:image/png;base64,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'
                    />
                </Space>
                    <Row gutter={{ xs: 20, sm: 16, md: 32 }} >
                    <Col xs={24} lg={4} key='collapse-a' style={{ margin: '50px 0' }}></Col>
                        <Col xs={24} lg={11} key='collapse-a' style={{ margin: '50px 0' }}>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Name</h5>
                                <p>{singleres.profile?.name}</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Phone Number</h5>
                                <p>+91 9876543102</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Age</h5>
                                <p>{singleres.profile?.age}</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Interests</h5>
                                <p>Fashion,Technology,College</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Wishlist</h5>
                                <p>Nike Aie Max</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>device</h5>
                                <p>iPhone6</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Mobile Network</h5>
                                <p>Airtel</p>
                            </div>
                        </Col>
                        <Col xs={24} lg={9} key='collapse-a' style={{ margin: '50px 0' }}>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>User ID</h5>
                                <p>{singleres.userID}</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Gender</h5>
                                <p>{singleres.profile?.gender}</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Status</h5>
                                <p>{(singleres.online) ? 'Active' : 'Inactive'}</p>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Following</h5>
                                <p>Nike,Puma....</p>
                                <h5>Brands</h5>
                                <h5>Influencers</h5>
                            </div>
                            <div style={{ marginBottom: "50px", }}>
                                <h5>Bandwidth</h5>
                                <p>4G,WiFi</p>
                            </div>
                        </Col>
                    </Row>
            </Card>
        </Form>

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

const Viewuser = () => {
    return (
        <div className='user-pages'>
            <AppAnimateGroup type='bottom'>
                <ComponentHeader
                // title='View Profile'
                />
                <div className='user-container' key='a'>
                    <FormDetails />
                </div>
            </AppAnimateGroup>
        </div>
    );
};


export default Viewuser;