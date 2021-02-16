<template>
  <div class="modal" v-show="showModal">
    <div class="mask">
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <a href="javascript:;" class="icon-close"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <div class="btn-group">
            <a href="javascript:;" class="btn">确定</a>
            <a href="javascript:;" class="btn">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  // 弹窗类型 小 中 大 表单
  props: {
    modalType: {
      type: String,
      default: 'form'
    },
    title: String,
    // 按钮类型
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="less">
@import url('./../assets/resource/less/config.less');
@import url('./../assets/resource/less/mixin.less');
@import url('./../assets/resource/less/modal.less');
</style>