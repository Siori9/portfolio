<script setup lang="ts">
</script>

<template>
  <div id="informations">
    <div class="elem">
      <font-awesome-icon icon="map-marker-alt" size="3x"/>
      <h2>PAU - Pyrénées-Atlantiques (64)</h2>
    </div>
    <div class="elem">
      <font-awesome-icon icon="briefcase" size="3x"/>
      <h2>Clever Cloud - Equipe Front-end</h2>
    </div>
    <a class="elem" href="https://www.linkedin.com/in/👩🏻%E2%80%8D💻clara-layus-8900b8244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"/>
      <span>Compte LinkedIn</span>
    </a>
    <a class="elem" href="https://github.com/Siori9">
      <font-awesome-icon :icon="['fab', 'github']" size="3x"/>
      <span>Compte GitHub</span>
    </a>
  </div>
</template>

<style scoped>
#informations {
  background: rgba(190, 108, 15, 0.8);
  color: white;
  margin-top: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1em;
  gap: 1.5em;
}

.elem {
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 20%;
  min-width: 250px;
  color: white;
}

h2 {
  margin-top: 0.5em;
  font-size: 1.2em;
}

span {
  margin-top: 0.5em;
  font-size: 1em;
  color: white;
  display: block;
}

a:hover {
  background-color: hsla(0, 0%, 100%, 0.2);
}

@media screen and (max-width: 768px) {
  .elem {
    flex: 1 1 100%;
    text-align: center;
  }

  #informations {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 1em;
  }

  a {
    font-size: 1em;
  }
}

@media screen and (max-width: 480px) {

  h2 {
    font-size: 0.9em;
    margin-bottom: 0.8em;
  }

  a {
    font-size: 0.9em;
  }
}
</style>
