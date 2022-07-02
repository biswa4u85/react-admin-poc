import React, { useState, useEffect } from 'react';
import IntlMessages from '../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import AppRowContainer from '../../@crema/core/AppRowContainer';
import { Button, Card, Checkbox, Form, Input, Tag, Row, Col, Space, Descriptions } from 'antd';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import StandardTable from '../Common/StandardTable';
import { IoMdAdd } from 'react-icons/io';
import { DoubleRightOutlined, EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { adminLogin } from '../../store/AuthRedux'


const Details = () => {
  const token = useSelector((state) => state.auth.token)
  return (
    <div className='user-pages'>
      <AppAnimateGroup type='bottom'>
        <ComponentHeader
          title='Celebrities Details'
          backUrl='Back'
        />
        <div className='user-container'>
          <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
            <Col xs={24} lg={24} key='collapse-a'>
              <Card className='user-card user-card-lg'>
                <AppRowContainer>
                  <Descriptions title='User Info'>
                    <Descriptions.Item label='UserName'>Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label='Telephone'>1810000000</Descriptions.Item>
                    <Descriptions.Item label='UserName'>Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label='Telephone'>1810000000</Descriptions.Item>
                  </Descriptions>
                </AppRowContainer>
              </Card>
            </Col>
            <Col xs={24} lg={12} key='collapse-a'>
              <Card className='user-card user-card-lg'>
                <AppRowContainer>
                  <Descriptions title='User Info'>
                    <Descriptions.Item label='UserName'>Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label='Telephone'>1810000000</Descriptions.Item>
                    <Descriptions.Item label='Live'>Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label='Remark'>empty</Descriptions.Item>
                    <Descriptions.Item label='Address'>
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                  </Descriptions>
                </AppRowContainer>
              </Card>
            </Col>
            <Col xs={24} lg={12} key='collapse-a'>
              <Card className='user-card user-card-lg'>
                <AppRowContainer>
                  <Descriptions title='User Info'>
                    <Descriptions.Item label='UserName'>Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label='Telephone'>1810000000</Descriptions.Item>
                    <Descriptions.Item label='Live'>Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label='Remark'>empty</Descriptions.Item>
                    <Descriptions.Item label='Address'>
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                  </Descriptions>
                </AppRowContainer>
              </Card>
            </Col>
          </Row>
        </div>
      </AppAnimateGroup>
    </div>
  );
};

export default Details;