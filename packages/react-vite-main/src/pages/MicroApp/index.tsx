import React, { useEffect } from 'react'
import start from '@/micro'
const MicroApp: React.FC = () => {
  useEffect(() => {
    start()
  }, [])
  return (
    <div id='iframe'>
      加载中...
    </div>
    // <iframe  style={{
    //   width: '100%',
    //   height: '100%',
    // }} src='https://s.yuantutech.com/yuantu/data-view-web/?corpId=2602&corpNo=6212001356&corpName=%E9%99%87%E5%8D%97%E5%B8%82%E7%AC%AC%E4%B8%80%E4%BA%BA%E6%B0%91%E5%8C%BB%E9%99%A2#/'></iframe>
    // <iframe style={{
    //   width: '100%',
    //   height: '100%',
    // }} src='http://localhost:8081/'></iframe>
  )
}

export default MicroApp
