<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
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
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "cube",
        speed: 2000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
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
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
