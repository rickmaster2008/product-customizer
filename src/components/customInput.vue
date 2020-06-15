<template>
  <div class="input-group">
    <span v-if="!(type === 'textarea')">{{prefix}}</span>
    <input v-if="type === 'text'" :type="type" :name="name" :placeholder="placeholder" :style="getStyle" />
    <textarea v-if="type === 'textarea'" :style="getStyle" rows="10" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    prefix: String,
    placeholder: String,
    width: String,
  },
  computed: {
    getStyle() {
      let style = {};
      if (this.width) {
        style.width = this.width;
      }
      return style;
    }
  }
};
</script>

<style scoped>
.input-group span {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 0.8em;
  z-index: 3;
  position: relative;
  left: 7px;
}

input,
input:focus, textarea {
  padding: 10px 10px 10px 25px;
  font-family: "Roboto";
  font-weight: bold;
  color: white;
  background: #2e2d3e;
  border: none;
  outline: none;
  border-radius: 4px;
  position: relative;
  left: -15px;
  z-index: 1;
  font-size: 0.9em;
}

input:focus {
  outline: white 1px solid;
}
</style>