<template>
  <div id="app">
    <Header/>
    <HatedThing/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HatedThing from "./components/HatedThing.vue";

export default {
  name: "app",
  components: {
    HatedThing,
    Header
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  color: #333;
  font: 20px/1 sans-serif;
}
</style>
