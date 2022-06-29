import React, { useState } from 'react';
import AppComponentCard from '../../@crema/core/AppComponentCard';
import AppRowContainer from '../../@crema/core/AppRowContainer/AppRowSimpleContainer';
import { Tag, Row, Col, Space, Form, Input, Button } from 'antd';
import StandardTable from '../common/StandardTable';

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
        <a>Invite {record.name}</a>
        <a>Delete</a>
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
];

const Listings = () => {
  return (
    <>
      <AppRowContainer>
        <Col xs={24} xxl={12} key='form-g'>
          <AppComponentCard
            title={'Celebrities'} 
            link={'Celebrities'}
            component={ListingsData}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

const ListingsData = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const [selectedRows, setSelectedRows] = useState([]);
  const loading = false

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
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
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



export default Listings;