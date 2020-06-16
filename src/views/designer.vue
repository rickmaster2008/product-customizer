<template>
  <div class="container">
    <div v-if="showLoader" ref="loader" class="loader">
      <font-awesome-icon icon="spinner" spin size="3x" :style="{color: '#212032'}" />
    </div>
    <ShirtInfo
      v-if="step === 0"
      @colorChange="changeColor"
      @imageAdded="addImage"
      @imageDeleted="deleteImage"
      @download="download"
    />
    <ProductInfo v-else />
    <Customizer
      ref="customizer"
      :color="chosenColor"
      :image="image"
      :imageHeight="imageHeight"
      :imageWidth="imageWidth"
      :showImage="showImage"
    />
  </div>
</template>

<script>
import ShirtInfo from "../components/shirtInfo";
import Customizer from "../components/customizer";
import ProductInfo from "../components/productInfo";
export default {
  data() {
    return {
      showLoader: false,
      chosenColor: "#ffffff",
      image: "",
      imageWidth: 0,
      imageHeight: 0,
      showImage: false
    };
  },
  computed: {
    step() {
      return this.$store.state.step;
    }
  },
  methods: {
    async download() {
      this.showLoader = true;
      await this.$refs.customizer.svgToPng();
      this.showLoader = false;
    },
    changeColor(color) {
      this.chosenColor = color;
    },
    deleteImage() {
      this.image = "";
      this.imageWidth = 0;
      this.imageHeight = 0;
      this.showImage = false;
    },
    addImage(img) {
      const reader = new FileReader();
      reader.onload = e => {
        const uri = e.target.result;
        this.image = uri;
        const image = new Image();

        image.src = uri;
        image.onload = () => {
          this.imageWidth = image.width;
          this.imageHeight = image.height;
          this.showImage = true;
        };
      };
      reader.readAsDataURL(img);
    }
  },
  components: {
    ShirtInfo,
    Customizer,
    ProductInfo
  }
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 9999;
}
.container {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 3fr;
  height: 100vh;
}
</style>