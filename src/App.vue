<template>
  <div id="app">
    <Designer />
    <ProductInfo />
  </div>
</template>

<script>
import Designer from "./views/designer";
import ProductInfo from "./views/productInfo";
export default {
  name: "App",
  components: {
    Designer,
    ProductInfo,
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
button {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  margin: 0;
  max-width: 100%;
  background-color: transparent;
}
button:focus {
  outline: 0;
}
</style>
