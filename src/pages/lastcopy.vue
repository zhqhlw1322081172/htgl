<template>
  <div class="last">
    <indtop/>
    <indmenu/>
    <lastwz/>
    <copy/>
  </div>
</template>

<script>
import indtop from "../components/indtop";
import indmenu from "../components/indmenu";
import lastwz from "../components/lastwz";
import copy from "../components/copy";
export default {
  name: "lastcopy",
  data() {
    return {};
  },
  components: {
    indtop,
    indmenu,
    lastwz,
    copy
  }
};
</script>

<style scoped>
.last {
 min-height:900px;
  background: #E6E6E6;
}
.right{
    margin-left:260px;
    background: #E6E6E6;
    height: auto;
    /* min-height:900px; */
}
</style>


