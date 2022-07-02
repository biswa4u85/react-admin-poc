import React, { useState, useEffect } from 'react';
import IntlMessages from '../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import AppRowContainer from '../../@crema/core/AppRowContainer';
import { Button, Card, Checkbox, Form, Input, Tag, Row, Col, Space } from 'antd';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import StandardTable from '../Common/StandardTable';
import { IoMdAdd } from 'react-icons/io';
import { DoubleRightOutlined, EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { adminLogin } from '../../store/AuthRedux'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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
    render: (tags) => (
      <>
        {tags.map((tag) => {
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
    render: (text, record) => (
      <Space size='middle'>
        {/* <a>Invite {record.name}</a> */}
        {/* <a>Delete</a> */}
        <DoubleRightOutlined style={{ color: '#52c41a' }} />
        <EditOutlined style={{ color: 'blue' }} />
        <DeleteOutlined style={{ color: 'orange' }} />

      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ListingsData = () => {
  const [form] = Form.useForm();
  const [selectedRows, setSelectedRows] = useState([]);
  const token = useSelector((state) => state.auth.token)
  const loading = false
  const { messages } = useIntl();
  const handlePageChange = (page, size, searchVal = null) => {
    console.log('Received values of form: ', page);
  }
  const handleSelectRows = (page, size, searchVal = null) => {
  }

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Form
        form={form}
        name='search'
        className='ant-advanced-search-form'
        onFinish={handlePageChange}>
        <Row gutter={24}>
          <Col span={8}>
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
          <Col span={8}>
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
          <Col span={8}>
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
          <Col span={8}>
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
          <Col span={8}>
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
            <Button style={{ float: 'left' }} type='primary'><IoMdAdd /> Add Product</Button>
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
      <StandardTable
        selectedRows={selectedRows}
        rowClassName={(record, index) => record?.celebrity?.activated ? ' ' : 'table-row-red'}
        loading={loading}
        data={{ list: data, pagination: { pageSize: 10 } }}
        columns={columns}
        pageOnChange={handlePageChange}
        onSelectRow={handleSelectRows}
      />
    </Space>
  );
};

const Listings = () => {
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <ComponentHeader
          title='Celebrities'
          // backUrl='Back'
        />
        <div className='user-container' key='a'>
          <Card className='user-card user-card-lg'>
            <AppRowContainer>
              <Col xs={24} md={24}>
                <ListingsData />
              </Col>
            </AppRowContainer>
          </Card>
          <br />
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Listings;