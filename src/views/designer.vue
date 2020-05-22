<template>
  <div class="container">
    <Sidebar @colorChange="changeColor" @imageAdded="addImage" @imageDeleted="deleteImage" />
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
import Sidebar from "../components/sidebar";
import Customizer from "../components/customizer";
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
    Sidebar,
    Customizer
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