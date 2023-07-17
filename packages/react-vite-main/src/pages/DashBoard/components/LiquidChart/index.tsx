import React,{useEffect} from 'react'
import { Liquid } from '@antv/g2plot';
const LiquidChart:React.FC = () => {
    useEffect(() => {
     const liquidPlot = new Liquid('liquid', {
        percent: 0.25,
     });
     liquidPlot.render();
    } , [])
  return (
    <div id='liquid'>
      
    </div>
  )
}

export default LiquidChart
