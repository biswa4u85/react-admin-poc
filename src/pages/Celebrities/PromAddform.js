import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Col, Input, Space, Upload, Select, Switch } from 'antd';
import AppComponentCard from '../../@crema/core/AppComponentCard';
import AppRowContainer from '../../@crema/core/AppRowContainer/AppRowSimpleContainer';
import { UploadOutlined, } from '@ant-design/icons';

// uplode
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',

  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob((result) => resolve(result));
        };
      };
    });
  },
};
// uplode


const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

const Listings = () => {
  return (
    <>
      <AppRowContainer>
        <Col xs={24} xxl={12} key='form-g'>
          <AppComponentCard
            title={'Add Details'}
            link={'Add Details'}
            component={PromAddform}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};


const PromAddform = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick]);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Form form={form} name='dynamic_rule'>
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
            ]}

          >

            <Upload {...props} style={{ marginLeft: 0 }} >
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

          <Form.Item
            {...formItemLayout}
            name='phone'
            label='Manager Number'
            rules={[
              {
                required: true,
                message: 'Please enter your Manager Number!',
              },
            ]}>
            <Input placeholder='Please enter your Manager Number'
              // addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            name='id'
            label='Insta ID'
            rules={[
              {
                required: true,
                message: 'Please input your id',
              },
            ]}>
            <Input placeholder='Please input your id' />
          </Form.Item>

          <Form.Item
            {...formItemLayout}
            name='select'
            label='Type Of Celebrity'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please select Celebrity Type!',
              },
            ]}>

            <Select placeholder='Please select Celebrity Type'>
              <Option value='bollywood'>bollywood</Option>
              <Option value='hollywood'>hollywood</Option>
              <Option value='instagram'>instagram</Option>
              <Option value='tiktok'>tiktok</Option>
              <Option value='youtube'>youtube</Option>
            </Select>
          </Form.Item>

          <Form.Item {...formItemLayout} label='Switch' valuePropName='checked'>
            <Switch />
          </Form.Item>


          <Form.Item {...formTailLayout}>
            <Button type='primary' onClick={onCheck}>
              Add
            </Button>
          </Form.Item>







          {/* <ImgCrop rotate>
            <Upload
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}>
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop> */}
         {/* <Form.Item
            {...formItemLayout}
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input placeholder='Please input your email' />
          </Form.Item> */}


        </Form>

        {/* <Form.Item {...formTailLayout}>
          <Checkbox checked={checkNick} onChange={onCheckboxChange}>
            Nickname is required
          </Checkbox>
        </Form.Item>  */}
          


      </Space>
    </>
  );
};

export default Listings;

