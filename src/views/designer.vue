<template>
  <div class="container">
    <ShirtInfo v-if="step === 0" @colorChange="changeColor" @imageAdded="addImage" @imageDeleted="deleteImage" />
    <ProductInfo v-else />
    <Customizer
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
    ProductInfo,
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 3fr;
  height: 100vh;
}
</style>