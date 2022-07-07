import React, { useEffect, useState } from 'react';
import { Button, Breadcrumb, Form, Row, Col, Input, Space, Image, Select, Switch, Card } from 'antd';
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
    const userdata = useSelector((state) => state.auth.userdata)

    const onFinish = (values) => {
        console.log(values)
    };
    useEffect(() => {
        dispatch(getProfile({ token }))
    }, [])

    // console.log(userdata)

    return (
        <Card className='user-card user-card-lg'>
            <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                <Col xs={24} lg={24} style={{ borderBottom: "1px solid #ccc ", paddingBottom: "10px" }}>
                    <Space>
                        <Breadcrumb separator='>'>
                            <Breadcrumb.Item>Dashboards</Breadcrumb.Item>
                            <Breadcrumb.Item href=''>View Profile</Breadcrumb.Item>
                        </Breadcrumb>
                    </Space>
                    <Button type='primary' style={{ float: "right" }}
                        onClick={() => navigate('/dashboards/editProfile')}
                    >
                        Edit
                    </Button>
                </Col>
                <Col xs={24} lg={8} style={{ margin: '50px 0', textAlign: 'center' }}>
                    <Image
                        width={130}
                        height={130}
                        src={userdata?.profile?.avatar}
                    />
                </Col>
                <Col xs={24} lg={8} style={{ margin: '50px 0' }}>
                    <h5><b>Name</b></h5>
                    <p>{userdata?.profile?.name}</p>
                    <br />
                    <h5>Email</h5>
                    <p>{userdata?.email}</p>
                </Col>
                <Col xs={24} lg={8} style={{ margin: '50px 0' }}>
                    <h5><b>User ID</b></h5>
                    <p>{userdata?.profile?._id}</p>
                    <br />
                    <h5><b>Contact Number</b></h5>
                    <p>9767543210</p>
                </Col>
            </Row>
        </Card>
    );
};

const ViewProfile = () => {
    return (
        <div className='user-pages'>
            <AppAnimateGroup type='bottom'>
                <ComponentHeader
                    title='View Profile'
                />
                <div className='user-container' key='a'>
                    <FormDetails />
                </div>
            </AppAnimateGroup>
        </div>
    );
};


export default ViewProfile;