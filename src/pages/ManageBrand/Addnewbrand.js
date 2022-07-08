import React, { useEffect, useState, useRef } from 'react';
import { Button, Breadcrumb, Form, Row, Col, Input, Space, Image, Modal, Card, Radio } from 'antd';
import AppAnimateGroup from '../../@crema/core/AppAnimateGroup';
import ComponentHeader from '../../@crema/core/AppComponentHeader';
import { IoIosAddCircle } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import ReactPlayer from 'react-player';
import NewInfluencers from './NewInfluencers'
import { addbrand,} from '../../store/BrandRedux'



const FormDetails = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const userdata = useSelector((state) => state.auth.userdata)
    const RadioGroup = Radio.Group;
    const pageActive = useRef(false);
    const [loading, setLoading] = useState(false)
    const { TextArea } = Input;

    const onFinish = (values) => {
        console.log(values)
        // let params = {...values ,token ,coverImage:'some image'}
        // dispatch(addbrand(params))
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    return (<>
        <Form name='dynamic_rule'
            onFinish={onFinish}
            >
            <Card className='user-card user-card-lg'>
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={24} lg={24} key='collapse-a' style={{ borderBottom: "1px solid #ccc ", paddingBottom: "10px" }}>
                        <Space>
                            <Breadcrumb separator='>'>
                                <Breadcrumb.Item>Manager Brand</Breadcrumb.Item>
                                <Breadcrumb.Item href=''>Add New Brand</Breadcrumb.Item>
                            </Breadcrumb>
                        </Space>
                    </Col>
                    <Col xs={24} lg={24} key='collapse-a' style={{ margin: '50px 0' }}>
                        <Card className='user-card user-card-lg'>
                            <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                                <Col xs={24} lg={24} key='collapse-a'></Col>
                                <Col xs={24} lg={20} key='collapse-a'>
                                    <Form.Item
                                        {...formItemLayout}
                                        name='name'
                                        label='Brand Name'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name',
                                            },
                                        ]}>
                                        <Input placeholder='Enter your Brand Name' />
                                    </Form.Item>

                                    <Form.Item

                                        {...formItemLayout}
                                        name='stagename'
                                        label='Select Influencers'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your Influencers',
                                            },
                                        ]}>


                                        <Input placeholder='Select Influencers ited up with' />
                                        <br />
                                        <br />
                                        <a onClick={() => setLoading(true)} style={{ textDecoration: "underline", }}> Add New Influencers</a>


                                    </Form.Item>

                                    <Form.Item {...formTailLayout}
                                        name='profile'
                                        label="Upload Cover GIf Image"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please add Profile Image',
                                            },
                                        ]}>

                                        <Image
                                            width={200}
                                            height={160}
                                            src='error'
                                            fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=='
                                        />
                                        <br />
                                        <br />
                                        <div>
                                            <Button htmlType='submit'>
                                                Upload GIF
                                            </Button>
                                        </div>

                                    </Form.Item>
                                    <Form.Item
                                        {...formItemLayout}
                                        name='description'
                                        label='Brand Description'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter Manager Name',
                                            },
                                        ]}>
                                        <TextArea placeholder='Few Words about brand' rows={4} />
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Space size='large' >
                                            <Button type='primary' htmlType='submit'>
                                                Submit
                                            </Button>
                                            <Button htmlType='submit'>
                                                Next
                                            </Button>
                                            <a style={{ textDecoration: "underline" }} href='#'>Cancel</a>
                                        </Space>
                                    </Form.Item>

                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Form >
        <br />
        <br />
        <Form name='dynamic_rule'
            onFinish={onFinish}>
            <Card className='user-card user-card-lg'>
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={24} lg={24} key='collapse-a' ></Col>
                    <Col xs={24} lg={24} key='collapse-a' style={{ margin: '50px 0' }}>
                        <Card className='user-card user-card-lg'>
                            <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                                <Col xs={24} lg={24} key='collapse-a'></Col>
                                <Col xs={24} lg={15} key='collapse-a'>
                                    <Form.Item {...tailLayout}>
                                        <ReactPlayer
                                            width={300}
                                            height={200}
                                            controls={true}
                                            url='https://www.facebook.com/facebook/videos/10153231379946729/'
                                        />

                                        <span style={{ fontSize: "50px", position: "absolute", right: "40px", top: "55px",color:"#0A8FDC" }}><IoIosAddCircle /></span>
                                    </Form.Item>
                                    <Form.Item {...tailLayout} >
                                        <Space size='large' style={{ marginTop: "50px" }}>
                                            <Button type='primary' htmlType='submit'>
                                                Back
                                            </Button>
                                            <Button htmlType='submit'>
                                                Next
                                            </Button>
                                            <a style={{ textDecoration: "underline" }} href='#'>Cancel</a>
                                        </Space>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Form >
        <br />
        <br />
        <Form name='dynamic_rule'
            onFinish={onFinish}>
            <Card className='user-card user-card-lg'>
                <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                    <Col xs={24} lg={24} key='collapse-a' style={{ margin: '50px 0' }}>
                        <Card className='user-card user-card-lg'>
                            <Row gutter={{ xs: 16, sm: 16, md: 32 }}>
                                <Col xs={24} lg={24} key='collapse-a'></Col>
                                <Col xs={24} lg={20} key='collapse-a'>
                                    <Form.Item
                                        {...formItemLayout}
                                        name='username'
                                        label='Banner Titel'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name',
                                            },
                                        ]}>
                                        <Input placeholder='Enter the Nema of the Banner ' />
                                    </Form.Item>
                                    <Form.Item {...formTailLayout}
                                        name='profile'
                                        label="Upload Banner Image"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please add Profile Image',
                                            },
                                        ]}>

                                        <Image
                                            width={200}
                                            height={160}
                                            src='error'
                                            fallback='data:image/png;base64,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'
                                        />
                                        <br />
                                        <br />
                                        <div>
                                            <Button htmlType='submit'>
                                                Upload Image
                                            </Button>
                                        </div>

                                    </Form.Item>
                                    <Form.Item
                                        {...formItemLayout}
                                        name='managername'
                                        label=' Description'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter Manager Name',
                                            },
                                        ]}>
                                        <TextArea placeholder='Enter Text' rows={4} />
                                    </Form.Item>

                                    <Form.Item
                                        {...formItemLayout}
                                        name='managername'
                                        label='Button Type'
                                        rules={[
                                            
                                        ]}>
                                        <Space onOk={() => setLoading(false)} onCancel={() => setLoading(false)}>
                                        <RadioGroup >
                                            <Radio value={1}>Know More</Radio>
                                            <Radio value={2}>Visit Website</Radio>
                                            <Radio value={3}>Reminder</Radio>
                                        </RadioGroup>
                                    </Space>
                                    </Form.Item>
                                    <Form.Item
                                        {...formItemLayout}
                                        name='username'
                                        label='Title'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name',
                                            },
                                        ]}>
                                        <Input placeholder='Enter Text' />
                                    </Form.Item>

                                    <Form.Item
                                        {...formItemLayout}
                                        name='managername'
                                        label=' Description'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter Manager Name',
                                            },
                                        ]}>
                                        <TextArea placeholder='Enter Text' rows={4} />
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <Space size='large' >
                                            <Button type='primary' htmlType='submit'>
                                                Back
                                            </Button>
                                            <Button htmlType='submit'>
                                                Finish
                                            </Button>
                                            <a style={{ textDecoration: "underline" }} href='#'>Cancel</a>
                                        </Space>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Form >
        <Modal
            width={900}
            title='Add New Influencers'
            visible={loading}
            onOk={() => setLoading(false)}
            onCancel={() => setLoading(false)}
        >
            <NewInfluencers />
        </Modal>
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
const Addnewbrand = () => {
    return (
        <div className='user-pages'>
            <AppAnimateGroup type='bottom'>
                <ComponentHeader
                    title='View Profile'
                />
                {/* <div><AiFillBell /></div> */}
                <div className='user-container' key='a'>
                    <FormDetails />
                </div>
            </AppAnimateGroup>
        </div>
    );
};


export default Addnewbrand;