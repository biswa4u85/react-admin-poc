import {React,useEffect} from 'react';
import {Table, Tag, Space} from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getPromo,singleid,deletpromo } from '../../store/PromoRedux'



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


const Promolist = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const list = useSelector((state) => state.Promo.Promolist)

  useEffect(() => {
    dispatch(getPromo({ token }))
  }, [])

  // const deletitem = (item) => {
  //   dispatch(deletpromo({ token, id: item._id }))
  //   console.log(item)
  // }



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
         <button onClick={() => {
              dispatch(singleid(record))
              navigate(`/editform`)
            }} > 
           <a>Edit</a></button>
          <a>Delete</a>
          {/* <button onClick={() => deletitem(item)}>Delete</button> */}
        </Space>
      ),
    },
  ];


  return (
    <>
      <Space direction='vertical' style={{width: '100%'}}>
      <Table columns={columns} dataSource={data} />
    </Space>
    </>
  );
};

export default Promolist;
