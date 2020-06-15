<template>
  <Sidebar>
    <template v-slot:header>
      <font-awesome-icon
        class="arrow-back"
        @click="goBack"
        icon="arrow-left"
        size="lg"
        id="back-arrow"
      />
      <h2 class="title">Detalle de campaña</h2>
    </template>
    <template v-slot:body>
      <div>
        <CustomInput placeholder="Título de tu campaña" type="text" name="title" width="100%" />
        <br />
        <br />
        <CustomInput
          placeholder="Descripción de campaña"
          type="textarea"
          name="description"
          width="100%"
        />
      </div>
      <button>Terminar</button>
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from "../layout/sidebar.layout";
import CustomInput from "../components/customInput";
export default {
  methods: {
    goBack() {
      this.$store.commit("moveToShirtInfo");
    }
  },
  components: {
    Sidebar,
    CustomInput
  }
};
</script>

<style scoped>
.arrow-back {
  cursor: pointer;
}
.title {
  margin: 0;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 80%;
}
button,
button:active,
button:focus {
  cursor: pointer;
  padding: 10px;
  background: transparent;
  border: white 1px solid;
  color: white;
  min-width: 100%;
  outline: none;
}

button:hover {
  outline: white 1px solid;
}
</style>