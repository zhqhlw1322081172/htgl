<template>
  <div class="col-md-6 col-sm-12 col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">Donut Chart</div>
      <div class="panel-body">
        <div id="morris-donut-chart">
          <svg
            height="452"
            version="1.1"
            width="458"
            xmlns="http://www.w3.org/2000/svg"
            style="overflow: hidden; position: relative;"
          >
            <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc>
            <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"
              fill="none"
              stroke="#a6a6a6"
              d="M229,374.16666666666663A145.66666666666666,145.66666666666666,0,0,0,366.3103150236766,277.12772013858415"
              stroke-width="2"
              opacity="0"
            ></path>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="#a6a6a6"
              stroke="#ffffff"
              d="M229,377.16666666666663A148.66666666666666,148.66666666666666,0,0,0,369.1382162484205,278.1292063656946L430.25230382760844,299.77243649602553A213.5,213.5,0,0,1,229,442Z"
              stroke-width="3"
            ></path>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;"
              fill="none"
              stroke="#24c2ce"
              d="M366.3103150236766,277.12772013858415A145.66666666666666,145.66666666666666,0,0,0,98.30460304724582,164.17666836100773"
              stroke-width="2"
              opacity="1"
            ></path>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="#24c2ce"
              stroke="#ffffff"
              d="M369.1382162484205,278.1292063656946A148.66666666666666,148.66666666666666,0,0,0,95.61293583311587,162.85193155379733L32.956904570868716,132.01500254151156A218.5,218.5,0,0,1,434.96547253551495,301.44158020787626Z"
              stroke-width="3"
            ></path>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"
              fill="none"
              stroke="#a8e9dc"
              d="M98.30460304724582,164.17666836100773A145.66666666666666,145.66666666666666,0,0,0,228.9542374677655,374.16665947830484"
              stroke-width="2"
              opacity="0"
            ></path>
            <path
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
              fill="#a8e9dc"
              stroke="#ffffff"
              d="M95.61293583311587,162.85193155379733A148.66666666666666,148.66666666666666,0,0,0,228.95329498998493,377.1666593302608L228.93292699794918,441.99998946419737A213.5,213.5,0,0,1,37.44301659441862,134.2228972201955Z"
              stroke-width="3"
            ></path>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: 800; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;"
              x="229"
              y="218.5"
              text-anchor="middle"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#000000"
              font-size="15px"
              font-weight="800"
              transform="matrix(2.2558,0,0,2.2558,-287.5654,-288.2031)"
              stroke-width="0.4433042524790237"
            >
              <tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">In-Store Sales</tspan>
            </text>
            <text
              style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Arial;"
              x="229"
              y="238.5"
              text-anchor="middle"
              font="10px &quot;Arial&quot;"
              stroke="none"
              fill="#000000"
              font-size="14px"
              transform="matrix(3.0347,0,0,3.0347,-465.9514,-469.0035)"
              stroke-width="0.3295194508009154"
            >
              <tspan dy="5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "charts4",
  data() {
    return {};
  }
};
</script>

<style scoped>
.col-md-6 {
  margin-top: 20px;
  float: right;
}
</style>


