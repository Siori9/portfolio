<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="layout">
    <header class="app-bar">
      <div id="title">Clara Layus</div>

      <div id="menu" :class="{ open: isMenuOpen }">
        <div class="item" onclick="window.location.assign('#description')">Présentation</div>
        <div class="item" onclick="window.location.assign('#CadreProAsso')">Expériences pro/asso</div>
        <div class="item" onclick="window.location.assign('#Cursus')">Cursus scolaire</div>
        <div class="item" onclick="window.location.assign('#Projects')">Projets perso/scolaires</div>
        <div class="item" onclick="window.location.assign('#Competences')">Compétences</div>
        <div class="item" onclick="window.location.assign('#CentreInteret')">Centres d'intérêts</div>
      </div>

      <button class="hamburger" @click="toggleMenu">
        <span v-if="!isMenuOpen">Menu ☰</span>
        <span v-if="isMenuOpen">X</span>
      </button>
    </header>
  </div>
</template>

<style scoped>
.layout {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 10;
}

.app-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.2rem 1rem;
  background-color: rgba(67, 38, 4, 0.3);
}

#title {
  color: white;
  font-weight: bolder;
  font-size: 3rem;
  text-shadow: #000000 1px 0 10px;
}

#menu {
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-between;
  gap: 1rem;
  color: white;
  font-weight: bolder;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

#menu.open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(67, 38, 4, 0.9);
  width: 100%;
  padding: 1rem 1rem;
}

.item {
  cursor: pointer;
  text-shadow: #000000 1px 0 10px;
}

.item:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 1700px) {
  #menu {
    display: none;
  }

  #menu.open {
    display: flex;
  }

  .hamburger {
    display: block;
  }
}
</style>
