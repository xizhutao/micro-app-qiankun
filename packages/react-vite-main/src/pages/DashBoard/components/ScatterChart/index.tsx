import React,{useEffect} from 'react'
import { Scatter } from '@antv/g2plot';
const ScatterChart:React.FC = () => {
    useEffect(() => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/j5ADHaMsZx/scatter.json')
        .then(data => data.json())
        .then(data => {
          const scatterPlot = new Scatter('scatter', {
            data,
            xField: 'x',
            yField: 'y',
            size: 5,
            pointStyle: {
              fill: '#5B8FF9',
            },
          });
          scatterPlot.render();
        });
    } , [])
  return (
    <div id='scatter'>
      
    </div>
  )
}

export default ScatterChart