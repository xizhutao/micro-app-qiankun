import React,{useContext , useEffect} from 'react'
import UserContext from '@/store/context/user'
import { Button , Typography } from 'antd'
import {getConfig} from '@/services/index'
const DashBoard: React.FC = () => {
  const { users , dispatch}: any = useContext(UserContext)
  useEffect(() => {
    getConfig({id: 1}).then((res) => {
      console.log('res' , res)
    }).catch((err) => {
      console.log('err' , err.message)
    })
  } , [])
  return (
    <div>
      <Typography.Title>{users[0].name}</Typography.Title>
      <Button onClick={() => {
        dispatch({
          type: 'update',
          payload: {
            name: 'xizhutao' ,
            age: 18
          }
        })
      }}>更新 users </Button>
    </div>
  )
}

export default DashBoard
