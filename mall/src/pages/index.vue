<template>
  <div class="index">
    <div class="container">
      <!-- 轮播图等主体内容 -->
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub.name || "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub.name || "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub.name || "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub.name || "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper
          :slides-per-view="5"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :options="swiperOption"
          class="swiper-container"
        >
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-lazy-preloader"></div>
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a
          v-for="(item, index) in adsList"
          :key="index"
          :href="'/#/product/' + item.id"
        >
          <img :src="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" />
        </a>
      </div>
      <!-- 商品内容区域 -->
      <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg"/></a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(item, index) in phoneList" :key="index">
                <div class="item" v-for="(icem, iddex) in item" :key="iddex">
                  <span>新品</span>
                <div class="item-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg" alt=""></div>

                  <div class="item-info">
                    <h3>小米9</h3>
                    <p>晓龙555555555</p>
                    <p class="price">2999元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation,
  EffectCube
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper.less";
import "swiper/swiper-bundle.min.css";
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, EffectCube]);
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        // 分页器
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          //点击左右
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "cube", // 翻转效果
        speed: 2000, //切换速度
        autoplay: {
          //自动播放
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true, //点到头后可以继续点
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 60,
          shadowScale: 0.6
        },
        lazy: {
          loadPrevNext: true
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "44",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ]
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    }
  }
};
</script>

<style lang="less">
@import url("../assets/resource/less/mixin.less");
@import url("../assets/resource/less/config.less");
@import url("../assets/resource/less/base.less");
.index {
  .container {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        box-sizing: border-box;
        background-color: #55585a7a;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              position: relative;
              font-size: 16px;
              color: #ffffff;
              padding-left: 30px;
              display: block;
              &:after {
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: " ";
                background: url("../../public/imgs/icon-arrow.png");
                .bgImg(10px, 15px);
              }
            }
            &:hover {
              background-color: @colorA;
              .children {
                display: block;
              }
            }
            .children {
              display: none;
              width: 962px;
              height: 451px;
              // background-color: @colorG;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid @colorH;
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                background: #ffffff;
                li {
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a {
                  color: @colorB;
                  font-size: 14px;
                  vertical-align: middle; /* 图片文字居中 */
                  margin-right: 15px;
                }
                img {
                  width: 42px;
                  height: 35px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 274px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box {
      .flex;
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .banner {
      margin-bottom: 50px;
    }
    .product-box {
      padding: 30px 0 50px;
      h2 {
        font-size: @fontF;
        height: 21px;
        line-height: 21px;
        color: @colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          .list {
            .flex;
            width: 986px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 236px;
              height: 302px;
              background-color: @colorG;
              text-align: center;
              span {
              }
              .item-img {
                img {
                  height: 195px;
                }
              }
              .item-info {
                h3 {
                  color: @colorB;
                  font-size: @fontJ;
                  line-height: @fontJ;
                  font-weight: bold;
                }
                p {
                  color: @colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  color: #f20a0a;
                  font-size: @fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &:after {
                    content: " ";
                    background: url("/imgs/icon-cart-hover.png") no-repeat;
                    margin-left: 5px;
                    .bgImg(22px, 22px);
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
