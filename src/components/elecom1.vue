<template>
  <div class="bar">
    <div class="proani">
      <p>Animate progress bars</p>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="35"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 35%"
        ></div>
      </div>
    </div>

    <div class="proani diff">
      <p>stacked progress bars</p>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 35%"
          aria-valuenow="35"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 15%"
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "elecom1",
  data() {
    return {};
  }
};
</script>

<style scoped>
.bar {
  width: 96%;
  margin: auto;
}
p {
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 15px;
  padding-top: 15px;
}
.proani {
  margin: 20px 0;
  width: 48%;
  float: left;
  padding: 0 20px 20px 20px;
  background-color: white;
}
.diff{
    float: right;
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>


