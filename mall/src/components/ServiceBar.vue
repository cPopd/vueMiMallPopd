<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting">
          </span>
          预约维修服务
        </li>
        <li>
          <span class="icon-7day">
          </span>
          7天无理由退货
        </li>
        <li>
          <span class="icon-15day">
          </span>
          15天免费换货
        </li>
        <li>
          <span class="icon-post">
          </span>
          满150包邮
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceBar'
}
</script>

<style lang="less">
@import url('../assets/resource/less/mixin.less');
.service{
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  li{
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #E5E5E5;
  }
  span{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .icon-setting{
    background: url('/imgs/icon-setting.png') no-repeat;
    .bgImg(20px, 20px);
  }
  .icon-7day{
    background: url('/imgs/icon-7day.png') no-repeat;
    .bgImg(20px, 20px);
  }
  .icon-15day{
    background: url('/imgs/icon-15day.png') no-repeat;
    .bgImg(20px, 20px);
  }
  .icon-post{
    background: url('/imgs/icon-post.png') no-repeat;
    .bgImg(20px, 20px);
  }
}
</style>
