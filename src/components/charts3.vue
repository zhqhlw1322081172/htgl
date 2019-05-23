<template>
  <div class="col-md-6 col-sm-12 col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">Line Chart</div>
      <div class="panel-body">
        <div id="morris-line-chart" style="position: relative;">
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">50</tspan>
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">100</tspan>
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">150</tspan>
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">200</tspan>
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
              x="433"
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2024</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="355.6423877327492"
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2022</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="278.1788061336254"
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2020</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="200.8211938663746"
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2018</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="123.35761226725083"
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2016</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
              x="46"
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
              <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2014</tspan>
            </text>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#24c2ce"
              d="M46,240.04999999999998C55.669701533406354,193.61874999999998,75.00910460021906,64.1,84.67880613362541,54.32499999999999C94.34850766703177,44.54999999999999,113.68791073384448,155.74898255813952,123.35761226725083,161.85C133.05380613362541,167.96773255813952,152.44619386637459,87.29389534883721,162.14238773274917,103.19999999999999C171.81208926615554,119.06264534883721,191.15149233296825,266.93125,200.8211938663746,288.925C210.49089539978095,310.91875,229.83029846659366,293.8125,239.5,279.15C249.16970153340634,264.48749999999995,268.5091046002191,197.24927325581393,278.1788061336254,171.625C287.875,145.93052325581394,307.2673877327492,64.08662790697674,316.9635815991238,73.875C326.63328313253015,83.63662790697674,345.9726861993429,244.9375,355.6423877327492,249.825C365.31208926615557,254.71249999999998,384.6514923329683,139.85625,394.32119386637464,112.97499999999997C403.990895399781,86.09374999999999,423.33029846659366,54.324999999999974,433,34.77499999999998"
              stroke-width="3"
            ></path>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="none"
              stroke="#808080"
              d="M46,318.25C55.669701533406354,262.04375,75.00910460021906,117.86250000000001,84.67880613362541,93.42500000000001C94.34850766703177,68.98750000000001,113.68791073384448,125.19040697674419,123.35761226725083,122.75C133.05380613362541,120.30290697674418,152.44619386637459,56.745348837209306,162.14238773274917,73.875C171.81208926615554,90.95784883720931,191.15149233296825,238.828125,200.8211938663746,259.6C210.49089539978095,280.371875,229.83029846659366,244.93749999999997,239.5,240.04999999999998C249.16970153340634,235.16249999999997,268.5091046002191,236.3626453488372,278.1788061336254,220.5C287.875,204.5938953488372,307.2673877327492,108.08081395348833,316.9635815991238,112.97499999999997C326.63328313253015,117.85581395348834,345.9726861993429,257.15625,355.6423877327492,259.6C365.31208926615557,262.04375000000005,384.6514923329683,152.075,394.32119386637464,132.52499999999998C403.990895399781,112.975,423.33029846659366,110.53124999999999,433,103.19999999999999"
              stroke-width="3"
            ></path>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="46"
              cy="240.04999999999998"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="84.67880613362541"
              cy="54.32499999999999"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="123.35761226725083"
              cy="161.85"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="162.14238773274917"
              cy="103.19999999999999"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="200.8211938663746"
              cy="288.925"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="239.5"
              cy="279.15"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="278.1788061336254"
              cy="171.625"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="316.9635815991238"
              cy="73.875"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="355.6423877327492"
              cy="249.825"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="394.32119386637464"
              cy="112.97499999999997"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="433"
              cy="34.77499999999998"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="46"
              cy="318.25"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="84.67880613362541"
              cy="93.42500000000001"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="123.35761226725083"
              cy="122.75"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="162.14238773274917"
              cy="73.875"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="200.8211938663746"
              cy="259.6"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="239.5"
              cy="240.04999999999998"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="278.1788061336254"
              cy="220.5"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="316.9635815991238"
              cy="112.97499999999997"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="355.6423877327492"
              cy="259.6"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="394.32119386637464"
              cy="132.52499999999998"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
            <circle
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              cx="433"
              cy="103.19999999999999"
              r="4"
              fill="#ffffff"
              stroke="#000000"
              stroke-width="1"
            ></circle>
          </svg>
          <div
            class="morris-hover morris-default-style"
            style="display: none; left: 0px; top: 155px;"
          >
            <div class="morris-hover-row-label">2014</div>
            <div class="morris-hover-point" style="color: gray">
              Total Income:
              50
            </div>
            <div class="morris-hover-point" style="color: #24C2CE">
              Total Outcome:
              90
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"charts3",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.col-md-6{
    margin-top:20px;
    float: left;
}
</style>


