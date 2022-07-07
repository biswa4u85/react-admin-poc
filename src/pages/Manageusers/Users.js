import React, { useEffect, useState } from 'react';
import { Button, Menu, Table, Row, Col, Input, Space, InputNumber, Upload, Select, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { DoubleRightOutlined, EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getUser,singledata } from '../../store/AuthRedux'

const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);

const FormDetails = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const manageusers = useSelector((state) => state.auth.manageusers)


    useEffect(() => {
        dispatch(getUser({ token }))
    }, [])
    // console.log(manageusers)


    function onChange(value) {
        console.log('changed', value);
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: ['profile', 'name'],
            key: 'name',
            width: 150,
            sorter: {},
        },

        {
            title: 'User ID',
            dataIndex: 'userID',
            key: 'userID',
            width: 150,
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
            ellipsis: true,
        },
        {
            title: 'Gender',
            dataIndex: ['profile', 'gender'],
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
            title: 'Age',
            dataIndex: ['profile', 'age'],
            key: 'address 4',
            ellipsis: true,
        },
        {
            title: 'Status',
            dataIndex: 'online',
            key: 'address 4',
            ellipsis: true,
            render: (res) => (<div>{res?'Active':'Inactive'}</div>)
        },
        {
            title: 'Date Registered',
            dataIndex: 'updatedAt',
            key: 'address 4',
            ellipsis: true,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
               
              <Space size='middle'>
                <DoubleRightOutlined style={{ color: '#52c41a' }} 
                onClick = {() => {
                    dispatch(singledata(record))
                    navigate(`/manageusers/viewuser`)
                }
                }
                />
                <EditOutlined style={{ color: 'blue' }} />
                <DeleteOutlined style={{ color: 'orange' }} />
        
              </Space>
            ),
          },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //       <Space size="middle">
        //         <button onClick={() => {
        //           dispatch(singleid(record))
        //           navigate(`/edit`)
        //         }}>Edit List</button>
      
        //         <button onClick={() => {
        //             deletitem(record)
        //     }
                    
        //         }
        //             >Delete</button>
        //       </Space>
        //     ),
        //   },
    ];

    return (
        <>
            <Card className='user-card user-card-lg'>
                <h5>Manage Users</h5>
                <hr style={{ margin: "30px 0" }} />
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={12} lg={12} key='collapse-a'>
                        <Button type='primary' htmlType='submit'>
                            Export
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
                <Table columns={columns} dataSource={manageusers} />;
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


const Users = () => {
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


export default Users;