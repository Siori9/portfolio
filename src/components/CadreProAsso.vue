<script setup lang="ts">

import Shema from "@/components/Shema.vue";
</script>

<template>
  <div class="cadre">
    <h1>Expériences professionnel et associative</h1>
    <div class="shema">
      <Shema></Shema>
    </div>
  </div>
</template>

<style scoped>
.cadre {
  background-color: #D9D9D9;
  width: 100%;
  min-height: 98em;
  color: black;
  display: flex;
  flex-direction: column;
  padding-top: 1em;
}

h1 {
  padding: 0.5em;
  width: 100%;
  font-size: xxx-large;
  text-align: center;
}

.shema {
  height: 80em;
  width: 70%;
  margin: 2% auto;
}

@media screen and (max-width: 1700px) {
  .cadre {
    flex-direction: column;
    text-align: center;
    align-content: center;
    min-height: 100em;
  }

  h1 {
    width: 100%;
    font-size: xxx-large;
  }
  .shema {
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: xx-large;
  }
}
</style>