<template>
  <div class="bar">
    <div class="col-md-6">
      <p>simple progress Bars</p>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 40%"
          aria-valuenow="40"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 60%"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style="width: 75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>

    <div class="col-md-6 diff">
      <p>progress Bars</p>
      <div class="progress">
        <div
          class="progress-bar bg-success progress-bar-striped"
          role="progressbar"
          style="width: 40%"
          aria-valuenow="40"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-info progress-bar-striped"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-warning progress-bar-striped"
          role="progressbar"
          style="width: 60%"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-danger progress-bar-striped"
          role="progressbar"
          style="width: 75%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "elecom",
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
.col-md-6 {
  margin: 20px 0;
  padding: 0 20px 20px 20px;
  width: 48%;
  background-color: white;
  float: left;
}
.diff {
  float: right;
}
p {
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 15px;
  padding-top: 15px;
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


