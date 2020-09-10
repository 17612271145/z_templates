<template>
  <div class="content">
    <p class="firstLine">无法打开页面</p>
    <p style="margin-top:30px">错误原因</p>

    <p style="color:#EE4034">404</p>
    <p class="lastLine">可以尝试：<span @click="toBack()">返回</span></p>
  </div>
</template>

<script>

export default {


  data() {
    return {
    };
  },
  created() {

  },
  methods: {
    toBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 500px;
  margin:0 auto;
  text-align: center;
  margin-top: 90px;
  font-size: 40px;
  color: #333;
  p{
    line-height: 70px;
  }
  .firstLine{
    font-size: 60px;
    span{
      font-size: 45px;
    }
  }
  .lastLine {
    margin-top: 30px;
    span{
      color: #007AFF;
    }
  }
}
</style>
