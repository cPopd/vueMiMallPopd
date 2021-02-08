<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper
          :slides-per-view="5"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
           
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.less";
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
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
