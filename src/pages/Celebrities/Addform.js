import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Row, Col, Input, Space, Upload, Select, Switch, Card } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { UploadOutlined, } from '@ant-design/icons';

const FormDetails = () => {

  const onFinish = (values) => {
    console.log(values)
  };


  return (
    <Form name='dynamic_rule' onFinish={onFinish}>
      <Card className='user-card user-card-lg'>
        <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
          <Col xs={24} lg={24} key='collapse-a'>
            <h2>Section One</h2>
          </Col>
          <Col xs={24} lg={12} key='collapse-a'>
            <Form.Item
              {...formItemLayout}
              name='username'
              label='Full Name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                },
              ]}>
              <Input placeholder='Please input your name' />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name='stagename'
              label='Stage Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter your Stage Name',
                },
              ]}>
              <Input placeholder='Please enter your Stage Name' />
            </Form.Item>

            <Form.Item {...formTailLayout}
              name='profile'
              label="Profile"
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
              name='managername'
              label='Manager Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter Manager Name',
                },
              ]}>
              <Input placeholder='Please enter Manager Name' />
            </Form.Item>

          </Col>
          <Col xs={24} lg={12} key='collapse-a'>
            <Form.Item
              {...formItemLayout}
              name='username'
              label='Full Name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                },
              ]}>
              <Input placeholder='Please input your name' />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name='stagename'
              label='Stage Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter your Stage Name',
                },
              ]}>
              <Input placeholder='Please enter your Stage Name' />
            </Form.Item>

            <Form.Item {...formTailLayout}
              name='profile'
              label="Profile"
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
              name='managername'
              label='Manager Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter Manager Name',
                },
              ]}>
              <Input placeholder='Please enter Manager Name' />
            </Form.Item>

          </Col>
        </Row>
      </Card>
      <br />
      <Card className='user-card user-card-lg'>
        <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
          <Col xs={24} lg={24} key='collapse-a'>
            <h2>Section One</h2>
          </Col>
          <Col xs={24} lg={12} key='collapse-a'>
            <Form.Item
              {...formItemLayout}
              name='username'
              label='Full Name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                },
              ]}>
              <Input placeholder='Please input your name' />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name='stagename'
              label='Stage Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter your Stage Name',
                },
              ]}>
              <Input placeholder='Please enter your Stage Name' />
            </Form.Item>

            <Form.Item {...formTailLayout}
              name='profile'
              label="Profile"
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
              name='managername'
              label='Manager Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter Manager Name',
                },
              ]}>
              <Input placeholder='Please enter Manager Name' />
            </Form.Item>

          </Col>
          <Col xs={24} lg={12} key='collapse-a'>
            <Form.Item
              {...formItemLayout}
              name='username'
              label='Full Name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                },
              ]}>
              <Input placeholder='Please input your name' />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name='stagename'
              label='Stage Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter your Stage Name',
                },
              ]}>
              <Input placeholder='Please enter your Stage Name' />
            </Form.Item>

            <Form.Item {...formTailLayout}
              name='profile'
              label="Profile"
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
              name='managername'
              label='Manager Name'
              rules={[
                {
                  required: true,
                  message: 'Please enter Manager Name',
                },
              ]}>
              <Input placeholder='Please enter Manager Name' />
            </Form.Item>

          </Col>
        </Row>
      </Card>
      <br />
      <Space>
        <Form.Item shouldUpdate className='user-profile-group-btn'>
          <Button type='primary' htmlType='submit'>
            Save Changes
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => history.back()}>Cancel</Button>
        </Form.Item>
      </Space>
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


const Addform = () => {
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <ComponentHeader
          title='Add Celebritie'
          backUrl='Back'
        />
        <div className='user-container' key='a'>
          <FormDetails />
        </div>
      </AppAnimateGroup>
    </div>
  );
};


export default Addform;