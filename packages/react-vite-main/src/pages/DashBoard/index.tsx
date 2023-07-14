import React,{useContext} from 'react'
import UserContext from '@/store/context/user'
import { Button , Typography } from 'antd'
const DashBoard: React.FC = () => {
  const { users , dispatch}: any = useContext(UserContext)
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
