<template>
      <div class="dropno">
        <h2>404. Not Found</h2>
        <p>没有找到你要的页面</p>
        <pre class="page-404">
          .----.
       _.'__    `.
   .--($)($$)---/#\
 .' @          /###\
 :         ,   #####
  `-..__.-' _.-\###/
        `;_:    `"'
      .'"""""`.
     /,  ya ,\\
    //  404!  \\
    `-._______.-'
    ___`. | .'___
   (______|______)
        </pre>
      </div>
</template>

<script>
export default {
    name:'dropno'
}
</script>

<style scoped>
.dropno{
    padding-top: 100px;
    width: 96%;
    margin: 0 auto;
}
h2{
    font-size: 40px;
    text-align: center;
}
p{
    font-size: 20px;
    text-align: center;
}
pre{
     text-align: center;
     margin-top: 20px;
     margin-bottom: 0;
}
</style>


