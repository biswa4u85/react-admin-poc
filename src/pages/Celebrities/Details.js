import React, { useState } from 'react';
import AppComponentCard from '../../@crema/core/AppComponentCard';
import AppRowContainer from '../../@crema/core/AppRowContainer/AppRowSimpleContainer';
import { Col, Descriptions, Button } from 'antd';

const Details = () => {
  return (
    <>
      <AppRowContainer>
        <Col xs={24} xxl={12} key='form-g'>
          <AppComponentCard
            title={'View Details'}
            link={'Celebrities'}
            component={ListingsData}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

const ListingsData = () => {

  return (
    <Descriptions  bordered>
      <Descriptions.Item label='Celebrity Profile'>profile</Descriptions.Item>
      <Descriptions.Item label='Celebrity Name'>sarukh</Descriptions.Item>
      <Descriptions.Item label='Stage Name'>carpet</Descriptions.Item>
      <Descriptions.Item label='Insta Id'>
        2267
      </Descriptions.Item>
      <Descriptions.Item label='Type Of Celebrity' span={2}>
        hollywood
      </Descriptions.Item>
      {/* <Descriptions.Item label='Status' span={3}>
        <Badge status='processing' text='Running' />
      </Descriptions.Item> */}
      <Descriptions.Item label='Manager Name'>rahul</Descriptions.Item>
      <Descriptions.Item label='Manager NO.'>567879656454</Descriptions.Item>
      <Descriptions.Item label='Actions'>
        <Button type='primary'>Edit</Button>
      </Descriptions.Item>
    </Descriptions>

    // <div>
    //   <Descriptions
    //     title="Responsive Descriptions"
    //     bordered
    //     column={{
    //       xxl: 4,
    //       xl: 3,
    //       lg: 3,
    //       md: 3,
    //       sm: 2,
    //       xs: 1,
    //     }}
    //   >
    //     <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    //     <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
    //     <Descriptions.Item label="time">18:00:00</Descriptions.Item>
    //     <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
    //     <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    //     <Descriptions.Item label="Official">$60.00</Descriptions.Item>
    //     <Descriptions.Item label="Config Info">
    //       Data disk type: MongoDB
    //       <br />
    //       Database version: 3.4
    //       <br />
    //       Package: dds.mongo.mid
    //       <br />
    //       Storage space: 10 GB
    //       <br />
    //       Replication factor: 3
    //       <br />
    //       Region: East China 1
    //     </Descriptions.Item>
    //   </Descriptions>
    // </div>
  );
};



export default Details;