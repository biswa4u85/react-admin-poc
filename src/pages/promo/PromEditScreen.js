import React, {useEffect, useState,useRef,} from 'react';
import {Button, Checkbox, Form, Input, Space} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { updatepromo } from '../../store/PromoRedux'
import { useNavigate } from "react-router-dom";



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
  

const PromEditScreen = () => {
  let navigate = useNavigate();
  const pageActive = useRef(false);
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const singleid = useSelector((state) => state.Promo.singleid)
  const issuccess = useSelector((state) => state.Promo.issuccess)


//   const onFinish = (values) => {
//     console.log('Success:', values);
//     let params = { ...values, token, id: singledata._id }
//     pageActive.current = true;
//     dispatch(updatepromo(params))
// };

// useEffect(() => {
//     if (pageActive.current && issuccess) {
//         navigate('/list')
//     }
// }, [issuccess])






    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);
    useEffect(() => {
      form.validateFields(['nickname']);
    }, [checkNick]);
  
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
     <Space direction='vertical' style={{width: '100%'}}>
      <Form form={form} name='dynamic_rule'>
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
        <Form.Item
          {...formItemLayout}
          name='nickname'
          label='Nickname'
          rules={[
            {
              required: checkNick,
              message: 'Please input your nickname',
            },
          ]}>
          <Input placeholder='Please input your nickname' />
        </Form.Item>
    
        <Form.Item {...formTailLayout}>
          <Button type='primary' onClick={onCheck}>
            Check
          </Button>
        </Form.Item>
      </Form>
    </Space>
    </>
  );
};

export default PromEditScreen;

