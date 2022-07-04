import React, { useEffect } from 'react';
import IntlMessages from '../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import AppRowContainer from '../../@crema/core/AppRowContainer';
import { Button, Card, Checkbox, Col, Form, Input } from 'antd';
import FormValidate from '../../common/FormValidate'
import './index.style.less';
import AppPageMetadata from '../../@crema/core/AppPageMetadata';
import { ReactComponent as Logo } from '../../assets/user/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { adminLogin } from '../../store/AuthRedux'

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  // const onFinish = (values) => {
  //   console.log(values)
  //   values['loginType'] = "email"
  //   dispatch(adminLogin(values))
  // };
  const onFinish = (values) => {
    console.log('Success:', values);
    let params = values
    dispatch(adminLogin(params))
  };

  useEffect(() => {
    if (token) {
      navigate('/celebrities/list');
    }
  }, [token]);

  const onGoToForgetPassword = () => {
    navigate('/forget-password');
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { messages } = useIntl();
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <AppPageMetadata title='Signin' />
        <div className='user-container' key='a'>
          <Card className='user-card user-card-lg'>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <div className='user-styled-img'>
                  <Logo />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className='user-card-header'>
                  <h3>
                    <IntlMessages id='common.login' />
                  </h3>
                </div>

                <Form
                  className='user-form'
                  name='basic'
                  initialValues={{
                    // remember: true,
                    // email: 'demo@instastarz.com',
                    // password: 'demo@123',
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name='email'
                    className='form-field'
                    rules={[
                      { required: true, message: 'Please input your Email!' },
                    ]}>
                    <Input placeholder={messages['common.email']} />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    className='form-field'
                    rules={[
                      { required: true, message: 'Please input your Password!' },
                    ]}>
                    <Input
                      type='password'
                      placeholder={messages['common.password']}
                    />
                  </Form.Item>

                  <Form.Item
                    className='user-field-action'
                    name='remember'
                    valuePropName='checked'>
                    <>
                      <Checkbox onChange={onRememberMe}>
                        <IntlMessages id='common.rememberMe' />
                      </Checkbox>

                      <span className='user-field-action-link ml-auto' onClick={onGoToForgetPassword}>
                        <IntlMessages id='common.forgetPassword' />
                      </span>
                    </>
                  </Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='user-form-btn'>
                    <IntlMessages id='common.login' />
                  </Button>
                </Form>

                <div className='user-card-footer'>
                  <span>
                    <IntlMessages id='common.dontHaveAccount' />
                  </span>
                  <Link to='/signup' className='user-card-footer-link'>
                    <IntlMessages id='common.signup' />
                  </Link>
                </div>
              </Col>
            </AppRowContainer>
          </Card>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Signin;
