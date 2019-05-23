<template>
  <div class="col-md-6 col-sm-12 col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">Bar Chart</div>
      <div class="panel-body">
        <div id="morris-bar-chart" style="position: relative;">
          <svg
            height="452"
            version="1.1"
            width="458"
            xmlns="http://www.w3.org/2000/svg"
            style="overflow: hidden; position: relative;"
          >
            <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc>
            <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="33.5"
              y="416"
              text-anchor="end"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>
            </text>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#aaaaaa"
              d="M46,416H433"
              stroke-width="0.5"
            ></path>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="33.5"
              y="318.25"
              text-anchor="end"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">25</tspan>
            </text>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#aaaaaa"
              d="M46,318.25H433"
              stroke-width="0.5"
            ></path>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="33.5"
              y="220.5"
              text-anchor="end"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">50</tspan>
            </text>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#aaaaaa"
              d="M46,220.5H433"
              stroke-width="0.5"
            ></path>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="33.5"
              y="122.75"
              text-anchor="end"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">75</tspan>
            </text>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#aaaaaa"
              d="M46,122.75H433"
              stroke-width="0.5"
            ></path>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="33.5"
              y="25"
              text-anchor="end"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">100</tspan>
            </text>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#aaaaaa"
              d="M46,25H433"
              stroke-width="0.5"
            ></path>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="405.35714285714283"
              y="428.5"
              text-anchor="middle"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
              transform="matrix(1,0,0,1,0,8)"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="294.7857142857143"
              y="428.5"
              text-anchor="middle"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
              transform="matrix(1,0,0,1,0,8)"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="184.21428571428572"
              y="428.5"
              text-anchor="middle"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
              transform="matrix(1,0,0,1,0,8)"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2008</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="73.64285714285714"
              y="428.5"
              text-anchor="middle"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#888888"
              font-size="12px"
              font-family="sans-serif"
              font-weight="normal"
              transform="matrix(1,0,0,1,0,8)"
            >
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2006</tspan>
            </text>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="52.910714285714285"
              y="25"
              width="19.232142857142858"
              height="391"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="75.14285714285714"
              y="64.09999999999997"
              width="19.232142857142858"
              height="351.90000000000003"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="108.19642857142857"
              y="122.75"
              width="19.232142857142858"
              height="293.25"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="130.42857142857142"
              y="161.85"
              width="19.232142857142858"
              height="254.15"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="163.48214285714283"
              y="220.5"
              width="19.232142857142858"
              height="195.5"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="185.7142857142857"
              y="259.6"
              width="19.232142857142858"
              height="156.39999999999998"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="218.76785714285714"
              y="122.75"
              width="19.232142857142858"
              height="293.25"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="241"
              y="161.85"
              width="19.232142857142858"
              height="254.15"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="274.0535714285714"
              y="220.5"
              width="19.232142857142858"
              height="195.5"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="296.2857142857142"
              y="259.6"
              width="19.232142857142858"
              height="156.39999999999998"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="329.3392857142857"
              y="122.75"
              width="19.232142857142858"
              height="293.25"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="351.57142857142856"
              y="161.85"
              width="19.232142857142858"
              height="254.15"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="384.625"
              y="25"
              width="19.232142857142858"
              height="391"
              r="0"
              rx="0"
              ry="0"
              fill="#a6a6a6"
              stroke="none"
              fill-opacity="1"
            ></rect>
            <rect
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"
              x="406.85714285714283"
              y="64.09999999999997"
              width="19.232142857142858"
              height="351.90000000000003"
              r="0"
              rx="0"
              ry="0"
              fill="#24c2ce"
              stroke="none"
              fill-opacity="1"
            ></rect>
          </svg>
          <div
            class="morris-hover morris-default-style"
            style="display: none; left: 142.214px; top: 191px;"
          >
            <div class="morris-hover-row-label">2008</div>
            <div class="morris-hover-point" style="color: #A6A6A6">
              Series A:
              50
            </div>
            <div class="morris-hover-point" style="color: #24C2CE">
              Series B:
              40
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"charts1",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.col-md-6{
    background: white;
    float:left;
    width: 48%;
}
.panel-heading{
    font-weight: bolder;
}
</style>


