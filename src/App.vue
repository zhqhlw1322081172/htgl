<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import index from "./pages/index"
export default {
  name: 'App',
  components:{
    index
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
	margin:0;
	padding:0;
}
body,html{
  width: 100%;
  height: 100%;
  /* background-color: #18A0A9 ; */
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
