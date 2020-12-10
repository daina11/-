<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    <b-carousel-slide  v-for="(item,index) in img"  :key="index">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="item.url"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <!-- Slides with custom text -->

    
  
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        img:[
					{url:'https://picsum.photos/1024/480/?image=52'},
          {url:'https://picsum.photos/1024/480/?image=54'},
          {url:'https://picsum.photos/1024/480/?image=58'},
				]
      };
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>
#carousel-1{
  top: 80px;
margin: 20px;
box-shadow: 5px 5px 50px #c7c2c2;
}
.d-block{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 510px;
}
.carousel-control-next-icon{
  
}
</style>