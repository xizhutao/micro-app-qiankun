import React,{useEffect , useState} from 'react'
import {WordCloud} from '@antv/g2plot'
const WordClouds: React.FC = () => {
    useEffect(() => {
        asyncFetch()
    } , [])
    
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
          .then(response => response.json())
          .then(json => {
            const wordCloudInstance = new WordCloud('wordcloud' , {
                data: json,
                wordField: 'name',
                weightField: 'value',
                colorField: 'name',
                wordStyle: {
                fontFamily: 'Verdana',
                fontSize: [8, 32],
                rotation: 0,
                },
                    // 返回值设置成一个 [0, 1) 区间内的值，
                    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
                random: () => 0.5,
              })
              wordCloudInstance.render()
          })
          .catch(error => {
            console.log('fetch data failed', error);
          });
      };
  return (
    <div id='wordcloud'>
      
    </div>
  )
}

export default WordClouds
