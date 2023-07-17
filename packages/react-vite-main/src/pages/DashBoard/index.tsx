import React,{  useEffect} from 'react'
import { Row, Col, Card } from 'antd';
import { LineChartOutlined, UserOutlined, ShopOutlined, FileDoneOutlined } from '@ant-design/icons';
import styles from './index.module.less'
import {getConfig} from '@/services/index'
import PieChart from './components/PieChart'
import WordClouds from './components/WordCloud';
import LiquidChart from './components/LiquidChart';
import ScatterChart from './components/ScatterChart';
const DashBoard: React.FC = () => {
  useEffect(() => {
    getConfig({id: 1}).then((res) => {
      console.log('res' , res)
    }).catch((err) => {
      console.log('err' , err.message)
    })
  } , [])
  return (
     <div className={styles.container}>
      <Row gutter={[{ xs: 8, sm: 16, md: 24 }, 16]}>
        <Col span={18}>
          <div className={styles.item}>
            <p style={{ fontSize: 21, color: '#758aee' , margin: '10px 0px' }}>Hangzhou JsonXi</p>
            <p style={{ fontSize: 15 , margin: '10 0' }}>
              开源等于互助；开源需要大家一起来支持，支持的方式有很多种，比如使用、推荐、写教程、保护生态、贡献代码、回答问题、分享经验、打赏赞助等；欢迎您加入我们！
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.item} />
        </Col>
        <Col span={6}>
          <div className={styles.item}>
            <div className={styles.name}>会员注册量</div>
            <div className={styles.data}>
              <div>
                <LineChartOutlined className={styles.icon} /> 5,456
              </div>
              <div className={styles.percent}>+14%</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.item}>
            <div className={styles.name}>文件上传量</div>
            <div className={styles.data}>
              <div>
                <FileDoneOutlined className={styles.icon} /> 9,458
              </div>
              <div className={styles.percent}>+37%</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.item}>
            <div className={styles.name}>店铺数量</div>
            <div className={styles.data}>
              <div>
                <ShopOutlined className={styles.icon} /> 1,130
              </div>
              <div className={styles.percent}>+16%</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.item}>
            <div className={styles.name}>会员总数</div>
            <div className={styles.data}>
              <div>
                <UserOutlined className={styles.icon} /> 35,412
              </div>
              <div className={styles.percent}>+33%</div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Card title="水波图">
            <LiquidChart></LiquidChart>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="词云">
            <WordClouds></WordClouds>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="饼图">
           <PieChart></PieChart>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="散点图">
            <ScatterChart></ScatterChart>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DashBoard
