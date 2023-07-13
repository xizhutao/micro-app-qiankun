import React,{useEffect} from 'react'
import start from '@/micro'
const MicroApp: React.FC = () => {
  useEffect(() => {
    start()
  } , [])
  return (
    <div id='iframe'>
      加载中...
    </div>
  )
}

export default MicroApp
