<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                    <img src="/imgs/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                    <img src="/imgs/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                    <img src="/imgs/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                    <img src="/imgs/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                    <img src="/imgs/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="#" target="_blank">
                    <div class="pro-img">
                    <img src="/imgs/nav-img/nav-1.png" alt="">
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="less" scoped>
@import url('../assets/resource/less/base.less');
@import url('../assets/resource/less/config.less');
@import url('../assets/resource/less/mixin.less');
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
    }
    .container{
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      .flex();
      a{
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }
      .my-cart{
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #ffffff;
        .icon-cart{
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          background:url('../../public/imgs/icon-cart-checked.png') no-repeat center;
          // background-size: contain;
          margin-right: 4px;
          .bgImg(16px, 12px,contain)
        }
      }
    }
    .nav-header{
      .container{
        height: 112px;
        position: relative;
        .flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content: ' ';
              background: url('../../public/imgs/mi-logo.png') no-repeat center;
              .bgImg(55px, 55px, 55px);
              transition: margin .2s;
            }
            &:after{
              content: ' ';
              background: url('../../public/imgs/mi-home.png') no-repeat center;
              .bgImg(55px, 55px, 55px);
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: #FF6600;
              .children{
                height:220px;
              }
            }
            .children{
              position:absolute;
              top:112px;
              left:0;
              width:1226px;
              border-top:1px solid #E5E5E5;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              background-color: #ffffff;
              height: 220px;
              .product{
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                z-index: 10;
                background-color: #ffffff;
                img{
                  height: 111px;
                  width: auto;
                  margin-top: 20px;
                }
                a{
                  display: inline-block;
                }
                .pro-img{
                  height: 137px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: @colorB;
                }
                .pro-price{
                  color: @colorA;
                }
                &:before{
                  content: ' ';
                  position: absolute;
                  right: 0;
                  top: 28px;
                  border-left: 1px solid @colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input{
              border: none;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              box-sizing: border-box;
            }
            a{
              background: url('../../public/imgs/icon-search.png') no-repeat center;
              margin-left: 16px;
              .bgImg(18px, 18px);
            }
          }
        }
      }
    }
  }
</style>
