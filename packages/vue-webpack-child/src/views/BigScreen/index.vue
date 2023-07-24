<template>
  <!-- 父容器大盒子 -->
  <div class="viewport">
    <div class="column">
      <!-- 概览区域模块制作 -->
      <div class="panel overview">
        <div class="inner">
          <ul>
            <li>
              <h4>2,190</h4>
              <span>
                <i class="icon-dot" style="color: #006cff"></i>
                设备总数
              </span>
            </li>
            <li class="item">
              <h4>190</h4>
              <span>
                <i class="icon-dot" style="color: #6acca3"></i>
                季度新增
              </span>
            </li>
            <li>
              <h4>3,001</h4>
              <span>
                <i class="icon-dot" style="color: #6acca3"></i>
                运营设备
              </span>
            </li>
            <li>
              <h4>108</h4>
              <span>
                <i class="icon-dot" style="color: #ed3f35"></i>
                异常设备
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 监控区域模块制作 -->
      <div class="panel monitor">
        <div class="inner">
          <div class="tabs">
            <a href="javascript:;" class="active">故障设备监控</a>
            <a href="javascript:;">异常设备监控</a>
          </div>
          <div class="content" style="display: block">
            <div class="head">
              <span class="col">故障时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
            </div>
            <div class="marquee-view">
              <div class="marquee">
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">11北京市昌平西路金燕龙写字楼</span>
                  <span class="col">1000001</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190601</span>
                  <span class="col">北京市昌平区城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000003</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20180701</span>
                  <span class="col">北京市昌平区建路金燕龙写字楼</span>
                  <span class="col">1000004</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000005</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000006</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建西路金燕龙写字楼</span>
                  <span class="col">1000007</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000008</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000009</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190710</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000010</span>
                  <span class="icon-dot"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="head">
              <span class="col">异常时间</span>
              <span class="col">设备地址</span>
              <span class="col">异常代码</span>
            </div>
            <div class="marquee-view">
              <div class="marquee">
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000001</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190701</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190703</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190704</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190705</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190706</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190707</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190708</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190709</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
                <div class="row">
                  <span class="col">20190710</span>
                  <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                  <span class="col">1000002</span>
                  <span class="icon-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 点位分布统计模块制作 -->
      <div class="point panel">
        <div class="inner">
          <h3>点位分布统计</h3>
          <div class="chart">
            <div class="pie"></div>
            <div class="data">
              <div class="item">
                <h4>320,11</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  点位总数
                </span>
              </div>
              <div class="item">
                <h4>418</h4>
                <span>
                  <i class="icon-dot" style="color: #eacf19"></i>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <!-- 地图模块 -->
      <div class="map">
        <h3>
          <span class="icon-cube"></span>
          设备数据统计
        </h3>
        <div class="chart">
          <div class="geo"></div>
        </div>
      </div>
      <!-- 用户统计模块 -->
      <div class="users panel">
        <div class="inner">
          <h3>全国用户总量统计</h3>
          <div class="chart">
            <div class="bar"></div>
            <div class="data">
              <div class="item">
                <h4>120,899</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  用户总量
                </span>
              </div>
              <div class="item">
                <h4>248</h4>
                <span>
                  <i class="icon-dot" style="color: #eacf19"></i>
                  本月新增
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <!-- 订单 -->
      <div class="order panel">
        <div class="inner">
          <!-- 筛选 -->
          <div class="filter">
            <a href="javascript:;" class="active">365天</a>
            <a href="javascript:;">90天</a>
            <a href="javascript:;">30天</a>
            <a href="javascript:;">24小时</a>
          </div>
          <!-- 数据 -->
          <div class="data">
            <div class="item">
              <h4>20,301,987</h4>
              <span>
                <i class="icon-dot" style="color: #ed3f35"></i>
                订单量
              </span>
            </div>
            <div class="item">
              <h4>99834</h4>
              <span>
                <i class="icon-dot" style="color: #eacf19"></i>
                销售额(万元)
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 销售额 -->
      <div class="sales panel">
        <div class="inner">
          <div class="caption">
            <h3>销售额统计</h3>
            <a href="javascript:;" class="active" data-type="year">年</a>
            <a href="javascript:;" data-type="quarter">季</a>
            <a href="javascript:;" data-type="month">月</a>
            <a href="javascript:;" data-type="week">周</a>
          </div>
          <div class="chart">
            <div class="label">单位:万</div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <!-- 渠道分布以及季度销售模块 -->
      <div class="wrap">
        <div class="channel panel">
          <div class="inner">
            <h3>渠道分布</h3>
            <div class="data">
              <div class="radar"></div>
            </div>
          </div>
        </div>
        <!-- 销售进度模块 -->
        <div class="quarter panel">
          <div class="inner">
            <h3>一季度销售进度</h3>
            <div class="chart">
              <div class="box">
                <div class="gauge"></div>
                <div class="label">50<small> %</small></div>
              </div>
              <div class="data">
                <div class="item">
                  <h4>1,321</h4>
                  <span>
                    <i class="icon-dot" style="color: #6acca3"></i>
                    销售额(万元)
                  </span>
                </div>
                <div class="item">
                  <h4>150%</h4>
                  <span>
                    <i class="icon-dot" style="color: #ed3f35"></i>
                    同比增长
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 全国热榜模块制作 -->
      <div class="top panel">
        <div class="inner">
          <div class="all">
            <h3>全国热榜</h3>
            <ul>
              <li>
                <i class="icon-cup1" style="color: #d93f36"></i>
                可爱多
              </li>
              <li>
                <i class="icon-cup2" style="color: #68d8fe"></i>
                娃哈啥
              </li>
              <li>
                <i class="icon-cup3" style="color: #4c9bfd"></i>
                喜之郎
              </li>
            </ul>
          </div>
          <div class="province">
            <h3>各省热销 <i class="date">// 近30日 //</i></h3>
            <div class="data">
              <ul class="sup">
                <!-- <li>
                    <span>北京</span>
                    <span>25,179 <s class="icon-up"></s></span>
                  </li>
                  <li>
                    <span>河北</span>
                    <span>23,252 <s class="icon-down"></s></span>
                  </li> -->
              </ul>
              <ul class="sub">
                <!-- <li><span></span><span> <s class="icon-up"></s></span></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import * as echarts from "echarts";
import "../../utils/china";
export default {
  name: "BigScreen",
  setup() {
    console.log("1-开始创建组件-setup");

    const data = reactive({
      title: "test",
    });
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      // 饼图
      var myChart = echarts.init(document.querySelector(".pie"));
      // 2. 指定配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // 注意颜色写的位置
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff",
        ],
        series: [
          {
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            data: [
              { value: 20, name: "云南" },
              { value: 26, name: "北京" },
              { value: 24, name: "山东" },
              { value: 25, name: "河北" },
              { value: 20, name: "江苏" },
              { value: 25, name: "浙江" },
              { value: 30, name: "四川" },
              { value: 42, name: "湖北" },
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
              fontSize: 10,
            },
            // 修饰引导线样式
            labelLine: {
              // 连接到图形的线长度
              length: 6,
              // 连接到文字的线长度
              length2: 8,
            },
          },
        ],
      };

      // 3. 配置项和数据给我们的实例化对象
      myChart.setOption(option as any);
      // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
      //柱状图
      var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
          color: "#254065",
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
          itemStyle: {
            color: "#254065",
          },
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
          extraCssText: "opacity: 0",
        },
      };
      // 1. 实例化对象
      var barChart = echarts.init(document.querySelector(".bar"));
      // 2. 指定配置和数据
      var barChartOption = {
        color: new echarts.graphic.LinearGradient(
          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: "#00fffb" }, // 0 起始颜色
            { offset: 1, color: "#0061ce" }, // 1 结束颜色
          ]
        ),
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: "0%",
          right: "3%",
          bottom: "3%",
          top: "3%",
          //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
          containLabel: true,
          // 是否显示直角坐标系网格
          show: true,
          //grid 四条边框的颜色
          borderColor: "rgba(0, 240, 255, 0.3)",
        },
        xAxis: [
          {
            type: "category",
            data: [
              "上海",
              "广州",
              "北京",
              "深圳",
              "合肥",
              "",
              "......",
              "",
              "杭州",
              "厦门",
              "济南",
              "成都",
              "重庆",
            ],
            axisTick: {
              alignWithLabel: false,
              // 把x轴的刻度隐藏起来
              show: false,
            },
            axisLabel: {
              color: "#4c9bfd",
            },
            // x轴这条线的颜色样式
            axisLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)",
                // width: 3
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              alignWithLabel: false,
              // 把y轴的刻度隐藏起来
              show: false,
            },
            axisLabel: {
              color: "#4c9bfd",
            },
            // y轴这条线的颜色样式
            axisLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)",
                // width: 3
              },
            },
            // y轴分割线的颜色样式
            splitLine: {
              lineStyle: {
                color: "rgba(0, 240, 255, 0.3)",
              },
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [
              2100,
              1900,
              1700,
              1560,
              1400,
              item,
              item,
              item,
              900,
              750,
              600,
              480,
              240,
            ],
          },
        ],
      };
      // 3. 把配置给实例对象
      barChart.setOption(barChartOption as any);
      // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        barChart.resize();
      });
      // 销售统计模块折线图
      // (1)准备数据
      var data = {
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        ],
        quarter: [
          [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
          [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
        ],
        month: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
        ],
        week: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
        ],
      };
      // 1. 实例化对象
      var lineChart = echarts.init(document.querySelector(".line"));
      // 2. 指定配置和数据
      var lineChartOption = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis",
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "#012f4a",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "#4c9bfd",
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        series: [
          {
            name: "预期销售额",
            type: "line",
            stack: "总量",
            // 是否让线条圆滑显示
            smooth: true,
            data: data.year[0],
          },
          {
            name: "实际销售额",
            type: "line",
            stack: "总量",
            smooth: true,
            data: data.year[1],
          },
        ],
      };
      // 3. 把配置和数据给实例对象
      lineChart.setOption(lineChartOption as any);
      window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        lineChart.resize();
      });
      // 销售渠道雷达图
      // 1. 实例化对象
      var radarChart = echarts.init(document.querySelector(".radar"));
      // 2.指定配置
      var radarChartOption = {
        tooltip: {
          show: true,
          // 控制提示框组件的显示位置
          position: ["60%", "10%"],
        },
        radar: {
          indicator: [
            { name: "机场", max: 100 },
            { name: "商场", max: 100 },
            { name: "火车站", max: 100 },
            { name: "汽车站", max: 100 },
            { name: "地铁", max: 100 },
          ],
          // 修改雷达图的大小
          radius: "65%",
          shape: "circle",
          // 分割的圆圈个数
          splitNumber: 4,
          name: {
            // 修饰雷达图文字的颜色
            textStyle: {
              color: "#4c9bfd",
            },
          },
          // 分割的圆圈线条的样式
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255, 0.5)",
            },
          },
          splitArea: {
            show: false,
          },
          // 坐标轴的线修改为白色半透明
          axisLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)",
            },
          },
        },
        series: [
          {
            name: "北京",
            type: "radar",
            // 填充区域的线条颜色
            lineStyle: {
              normal: {
                color: "#fff",
                width: 1,
                opacity: 0.5,
              },
            },
            data: [[90, 19, 56, 11, 34]],
            // 设置图形标记 （拐点）
            symbol: "circle",
            // 这个是设置小圆点大小
            symbolSize: 5,
            // 设置小圆点颜色
            itemStyle: {
              color: "#fff",
            },
            // 让小圆点显示数据
            label: {
              show: true,
              fontSize: 10,
            },
            // 修饰我们区域填充的背景颜色
            areaStyle: {
              color: "rgba(238, 197, 102, 0.6)",
            },
          },
        ],
      };
      // 3.把配置和数据给对象
      radarChart.setOption(radarChartOption);
      // 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        radarChart.resize();
      });

      // 销售模块 饼形图 半圆形 设置方式
      // 1. 实例化对象
      var gaugeChart = echarts.init(document.querySelector(".gauge"));
      // 2. 指定数据和配置
      var gaugeChartOption = {
        series: [
          {
            name: "销售进度",
            type: "pie",
            radius: ["130%", "150%"],
            // 移动下位置  套住50%文字
            center: ["48%", "80%"],
            //是否启用防止标签重叠策略
            // avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: false,
              },
            },
            // 饼形图的起始角度为 180， 注意不是旋转角度
            startAngle: 180,
            // 鼠标经过不需要放大偏移图形
            hoverOffset: 0,
            data: [
              {
                value: 100,
                itemStyle: {
                  // 颜色渐变#00c9e0->#005fc1
                  color: new echarts.graphic.LinearGradient(
                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                    0,
                    0,
                    0,
                    1,
                    [
                      { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                      { offset: 1, color: "#005fc1" }, // 1 结束颜色
                    ]
                  ),
                },
              },
              {
                value: 100,
                itemStyle: {
                  color: "#12274d",
                },
              },
              {
                value: 200,
                itemStyle: {
                  color: "transparent",
                },
              },
            ],
          },
        ],
      };
      // 3. 把数据和配置给实例对象
      gaugeChart.setOption(gaugeChartOption);
      // 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        gaugeChart.resize();
      });
      // 地图
      // 1. 实例化对象
      var geoChart = echarts.init(document.querySelector(".geo"));
      // 2. 指定配置和数据
      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
      };

      var XAData = [
        [{ name: "西安" }, { name: "北京", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "西安" }, { name: "广州", value: 100 }],
        [{ name: "西安" }, { name: "西宁", value: 100 }],
        [{ name: "西安" }, { name: "拉萨", value: 100 }],
      ];

      var XNData = [
        [{ name: "西宁" }, { name: "北京", value: 100 }],
        [{ name: "西宁" }, { name: "上海", value: 100 }],
        [{ name: "西宁" }, { name: "广州", value: 100 }],
        [{ name: "西宁" }, { name: "西安", value: 100 }],
        [{ name: "西宁" }, { name: "银川", value: 100 }],
      ];

      var YCData = [
        [{ name: "拉萨" }, { name: "北京", value: 100 }],
        [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
        [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
      ];

      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      //var planePath = 'arrow';
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];

          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value,
            });
          }
        }
        return res;
      };

      var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
      var series = [];
      [
        ["西安", XAData],
        ["西宁", XNData],
        ["银川", YCData],
      ].forEach(function (item: any, i) {
        series.push(
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "red", //arrow箭头的颜色
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i],
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value,
                ]),
              };
            }),
          }
        );
      });
      var geoChartOption: any = {
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return (
                params.data.fromName +
                ">" +
                params.data.toName +
                "<br />" +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },

        geo: {
          map: "china",
          label: {
            emphasis: {
              show: true,
              color: "#fff",
            },
          },
          roam: true,
          //   放大我们的地图
          zoom: 1.2,
          itemStyle: {
            normal: {
              areaColor: "#142957",
              borderColor: "#195BB9",
              borderWidth: 1,
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: series,
      };
      // 3. 把数据和配置给实例对象
      geoChart.setOption(geoChartOption);
      window.addEventListener("resize", function () {
        geoChart.resize();
      });
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang='css'>
@import url(../../fonts/icomoon.css);
/* // 实现rem适配 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 42.66px !important;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
.viewport {
  display: flex;
  /* min-width: 1024px; */
  max-width: 1920px;
  margin: 0 auto;
  padding: 1.1rem 0.25rem 0;
  background: url(../../assets/logo.png) no-repeat 0 0 / contain;
  min-height: 780px;
}
.viewport .column {
  flex: 3;
}
.viewport .column:nth-child(2) {
  flex: 4;
  margin: 0.4rem 0.25rem 0;
}
/* 公共面板样式  */
.panel {
  position: relative;
  border: 15px solid transparent;
  border-width: 0.6375rem 0.475rem 0.25rem 1.65rem;
  border-image-source: url(../../assets/border.png);
  border-image-slice: 51 38 20 132;
  margin-bottom: 0.25rem;
}
.inner {
  position: absolute;
  top: -0.6375rem;
  left: -1.65rem;
  right: -0.475rem;
  bottom: -0.25rem;
  padding: 0.3rem 0.45rem;
}
.panel h3 {
  font-size: 0.25rem;
  color: #fff;
  font-weight: 400;
}
/* 概览区域模块制作 */
.overview {
  height: 1.375rem;
}
.overview ul {
  display: flex;
  justify-content: space-between;
}
.overview ul li h4 {
  font-size: 0.35rem;
  color: #fff;
  margin: 0 0 0.1rem 0.06rem;
}
.overview ul li span {
  font-size: 0.2rem;
  color: #4c9bfd;
}
/* 监控区域模块制作 */
.monitor {
  height: 6rem;
}
.monitor .inner {
  padding: 0.3rem 0;
  display: flex;
  flex-direction: column;
}
.monitor .tabs {
  padding: 0 0.45rem;
  margin-bottom: 0.225rem;
  display: flex;
}
.monitor .tabs a {
  color: #1950c4;
  font-size: 0.225rem;
  padding: 0 0.3375rem;
}
.monitor .tabs a:first-child {
  padding-left: 0;
  border-right: 0.025rem solid #00f2f1;
}
.monitor .tabs a.active {
  color: #fff;
}
.monitor .content {
  flex: 1;
  position: relative;
  display: none;
}
.monitor .head {
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.15rem 0.45rem;
  color: #68d8fe;
  font-size: 0.175rem;
}
.monitor .marquee-view {
  position: absolute;
  top: 0.5rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.monitor .row {
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  font-size: 0.15rem;
  color: #61a8ff;
  padding: 0.15rem 0.45rem;
}
.monitor .row .icon-dot {
  position: absolute;
  left: 0.2rem;
  opacity: 0;
}
.monitor .row:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #68d8fe;
}
.monitor .row:hover .icon-dot {
  opacity: 1;
}
.monitor .col:first-child {
  width: 1rem;
}
.monitor .col:nth-child(2) {
  width: 2.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.monitor .col:nth-child(3) {
  width: 1rem;
}
/* 通过CSS3动画滚动marquee */
.marquee-view .marquee {
  animation: move 15s linear infinite;
}
@keyframes move {
  0% {
  }
  100% {
    transform: translateY(-50%);
  }
}
/* 3.鼠标经过marquee 就停止动画 */
.marquee-view .marquee:hover {
  animation-play-state: paused;
}
/* 点位分布统计模块制作 */
.point {
  height: 4.25rem;
}
.point .chart {
  display: flex;
  margin-top: 0.3rem;
  justify-content: space-between;
}
.point .pie {
  width: 3.9rem;
  height: 3rem;
  margin-left: -0.125rem;
}
.point .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.1rem;
  padding: 0.45rem 0.375rem;
  box-sizing: border-box;
  background-image: url(../../assets/rect.png);
  background-size: cover;
}
.point h4 {
  margin-bottom: 0.15rem;
  font-size: 0.35rem;
  color: #fff;
}
.point span {
  display: block;
  color: #4c9bfd;
  font-size: 0.2rem;
}
/* 地图模块制作 */
.map {
  height: 7.225rem;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
}
.map h3 {
  line-height: 1;
  padding: 0.2rem 0;
  margin: 0;
  font-size: 0.25rem;
  color: #fff;
  font-weight: 400;
}
.map .icon-cube {
  color: #68d8fe;
}
.map .chart {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
}
.map .geo {
  width: 100%;
  height: 100%;
}
/* 用户统计模块 */
.users {
  height: 4.25rem;
  display: flex;
}
.users .chart {
  display: flex;
  margin-top: 0.3rem;
}
.users .bar {
  width: 7.35rem;
  height: 3rem;
}
.users .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.1rem;
  padding: 0.45rem 0.375rem;
  box-sizing: border-box;
  background-image: url(../../assets/rect.png);
  background-size: cover;
}
.users h4 {
  margin-bottom: 0.15rem;
  font-size: 0.35rem;
  color: #fff;
}
.users span {
  display: block;
  color: #4c9bfd;
  font-size: 0.2rem;
}
/* 订单模块制作 */
.order {
  height: 1.875rem;
}
.order .filter {
  display: flex;
}
.order .filter a {
  display: block;
  height: 0.225rem;
  line-height: 1;
  padding: 0 0.225rem;
  color: #1950c4;
  font-size: 0.225rem;
  border-right: 0.025rem solid #00f2f1;
}
.order .filter a:first-child {
  padding-left: 0;
}
.order .filter a:last-child {
  border-right: none;
}
.order .filter a.active {
  color: #fff;
  font-size: 0.25rem;
}
.order .data {
  display: flex;
  margin-top: 0.25rem;
}
.order .item {
  width: 50%;
}
.order h4 {
  font-size: 0.35rem;
  color: #fff;
  margin-bottom: 0.125rem;
}
.order span {
  display: block;
  color: #4c9bfd;
  font-size: 0.2rem;
}
/* 销售区域 */
.sales {
  height: 3.1rem;
}
.sales .caption {
  display: flex;
  line-height: 1;
}
.sales h3 {
  height: 0.225rem;
  padding-right: 0.225rem;
  border-right: 0.025rem solid #00f2f1;
}
.sales a {
  padding: 0.05rem;
  font-size: 0.2rem;
  margin: -0.0375rem 0 0 0.2625rem;
  border-radius: 0.0375rem;
  color: #0bace6;
}
.sales a.active {
  background-color: #4c9bfd;
  color: #fff;
}
.sales .inner {
  display: flex;
  flex-direction: column;
}
.sales .chart {
  flex: 1;
  padding-top: 0.1875rem;
  position: relative;
}
.sales .label {
  position: absolute;
  left: 0.525rem;
  top: 0.225rem;
  color: #4996f5;
  font-size: 0.175rem;
}
.sales .line {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
/* 渠道分布以及季度销售模块 */
.wrap {
  display: flex;
}
.channel,
.quarter {
  flex: 1;
  height: 2.9rem;
}
.channel {
  margin-right: 0.25rem;
}
.channel .data {
  overflow: hidden;
}
.channel .data .radar {
  height: 2.1rem;
  width: 100%;
}
.channel h4 {
  color: #fff;
  font-size: 0.4rem;
  margin-bottom: 0.0625rem;
}
.channel small {
  font-size: 50%;
}
.channel span {
  display: block;
  color: #4c9bfd;
  font-size: 0.175rem;
}
/* 季度区块 */
.quarter .inner {
  display: flex;
  flex-direction: column;
  margin: 0 -0.075rem;
}
.quarter .chart {
  flex: 1;
  padding-top: 0.225rem;
}
.quarter .box {
  position: relative;
}
.quarter .label {
  transform: translate(-50%, -30%);
  color: #fff;
  font-size: 0.375rem;
  position: absolute;
  left: 50%;
  top: 50%;
}
.quarter .label small {
  font-size: 50%;
}
.quarter .gauge {
  height: 1.05rem;
}
.quarter .data {
  display: flex;
  justify-content: space-between;
}
.quarter .item {
  width: 50%;
}
.quarter h4 {
  color: #fff;
  font-size: 0.3rem;
  margin-bottom: 0.125rem;
}
.quarter span {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #4c9bfd;
  font-size: 0.175rem;
}
/* 全国热榜模块制作 */
/* 排行榜 */
.top {
  height: 3.5rem;
}
.top .inner {
  display: flex;
}
.top .all {
  display: flex;
  flex-direction: column;
  width: 2.1rem;
  color: #4c9bfd;
  font-size: 0.175rem;
  vertical-align: middle;
}
.top .all ul {
  padding-left: 0.15rem;
  margin-top: 0.15rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top .all li {
  overflow: hidden;
}
.top .all [class^="icon-"] {
  font-size: 0.45rem;
  vertical-align: middle;
  margin-right: 0.15rem;
}
.top .province {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.top .province i {
  padding: 0 0.15rem;
  margin-top: 0.0625rem;
  float: right;
  font-style: normal;
  font-size: 0.175rem;
  color: #0bace6;
}
.top .province s {
  display: inline-block;
  transform: scale(0.8);
  text-decoration: none;
}
.top .province .icon-up {
  color: #dc3c33;
}
.top .province .icon-down {
  color: #36be90;
}
.top .province .data {
  flex: 1;
  display: flex;
  margin-top: 0.175rem;
}
.top .province ul {
  flex: 1;
  line-height: 1;
  margin-bottom: 0.175rem;
}
.top .province ul li {
  display: flex;
  justify-content: space-between;
}
.top .province ul span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.top .province ul.sup {
  font-size: 0.175rem;
}
.top .province ul.sup li {
  color: #4995f4;
  padding: 0.15rem;
}
.top .province ul.sup li.active {
  color: #a3c6f2;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.15rem;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub li {
  color: #52ffff;
  padding: 0.125rem 0.175rem;
}
.clock {
  position: absolute;
  top: -0.45rem;
  right: 0.5rem;
  font-size: 0.25rem;
  color: #0bace6;
}
.clock i {
  margin-right: 5px;
  font-size: 0.25rem;
}
@media screen and (max-width: 1600px) {
  .top span {
    transform: scale(0.9);
  }
  .top .province ul.sup li {
    padding: 0.125rem 0.15rem;
  }
  .top .province ul.sub li {
    padding: 0.0625rem 0.15rem;
  }
  .quarter span {
    transform: scale(0.9);
  }
}
</style>