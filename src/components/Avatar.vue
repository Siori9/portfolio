<script setup lang="ts">

</script>

<template>
  <div class="image-container">
    <img src="/public/avatar.png" alt="Photo de profil">
  </div>

</template>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 15px;
  width: 15em;
  height: auto;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}


</style>