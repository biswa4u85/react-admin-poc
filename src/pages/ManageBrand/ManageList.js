import React, { useEffect, useState } from 'react';
import { Button, Menu, Table, Row, Col, Input, Space, InputNumber, Upload, Select, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { BsSearch } from "react-icons/bs";
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
                   <DoubleRightOutlined style={{ color: '#52c41a' }} 
                onClick = {() => {
                    dispatch(singledata(record))
                       navigate(`/ManageBrand/addnewbrand`)
                }
               }
                />
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
                <Table columns={columns} dataSource={brandlist} />;
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