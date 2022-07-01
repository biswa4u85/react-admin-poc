import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimateGroup from '../../../@crema/core/AppAnimateGroup';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import { Button, Card, Checkbox, Col, Form, Input } from 'antd';
import './SigninFrappe.less';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import { ReactComponent as Logo } from '../../../assets/user/login.svg';
import { useSelector, useDispatch } from 'react-redux'
import { siteLogin } from '../../../store/AuthFrappeRedux'

const SigninFrappe = () => {
  const { messages } = useIntl();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const token = useSelector((state) => state.authfrappe.token)
  
  const onFinish = (values) => {
    dispatch(siteLogin(values))
  };

  useEffect(() => {
    if (token) {
      navigate('/dashboards/health-care');
    }
  }, [token]);

  const onGoToForgetPassword = () => {
    navigate('/forget-password', { tab: 'jwtAuth' });
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

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
                  initialValues={{ usr: "administrator", pwd: "admin" }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name='usr'
                    className='form-field'
                    rules={[
                      { required: true, message: 'Please input your Email!' },
                    ]}>
                    <Input placeholder={messages['common.email']} />
                  </Form.Item>

                  <Form.Item
                    name='pwd'
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
                      <Checkbox>
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

export default SigninFrappe;