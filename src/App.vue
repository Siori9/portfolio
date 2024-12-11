<template>
  <div id="app">
    <ParticlesBackground />
    <Menu></Menu>
    <div id="contain">
      <div id="menu-zone"></div>
      <div id="description">
        <Avatar></Avatar>
        <p>
          Salut, moi c'est Clara. Je suis une développeuse front-end junior, toujours à la recherche de nouveau projet pour exprimer ma créativité ! Si vous êtes interessé pour colaborer avec moi, n'hésitez pas à me contacter sur mon adresse mail : <a id="mail" href= "mailto:clara.layus@hotmail.fr">clara.layus@hotmail.fr</a>
        </p>
      </div>
      <Info></Info>
      <CadreProAsso id="CadreProAsso"></CadreProAsso>
      <div style="height: 10em"></div>
      <div style="height: 5em; background-color: rgba(190,108,15,0.8);"></div>
      <Cursus id="Cursus"></Cursus>
      <div class="diplomas">
        <div class="diploma">Baccalauréat scientifique (mention bien)</div>
        <div class="diploma max">Diplôme d'ingénieur en informatique, option ICC</div>
        <div class="diploma">Brevet d'aptitude aux fonctions d'animateur (BAFA)</div>
      </div>
      <div style="height: 5em"></div>
      <Projects id="Projects"></Projects>
      <div style="height: 7em"></div>
      <MemoryGame id="Competences"></MemoryGame>
      <div style="height: 5em"></div>
      <Carrousel id="CentreInteret"></Carrousel>
      <div style="height: 5em"></div>
      <div class="footer">Clara Layus - 2024</div>
    </div>
  </div>
</template>

<script>
import ParticlesBackground from "@/components/ParticlesBackground.vue";
import Menu from "@/components/Menu.vue";
import Avatar from "@/components/Avatar.vue";
import Info from "@/components/Info.vue";
import CadreProAsso from "@/components/CadreProAsso.vue";
import Cursus from "@/components/Cursus.vue";
import Projects from "@/components/Projects.vue";
import MemoryGame from "@/components/Memory.vue";
import Carrousel from "@/components/Carrousel.vue";

export default {
  components: {Carrousel, MemoryGame, Projects, Cursus, CadreProAsso, Info, Avatar, Menu, ParticlesBackground },
};
</script>

<style scoped>

#app {
  width: 100%;
}

#contain {
  min-height: 100vh;
  width: 100vw
}

#menu-zone {
  height: 10rem;
}

#description {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2%;
}

#description p {
  max-width: 30em;
  color: white;
  margin: 2em;
  font-size: x-large;
  width: 50%;
}

#description Avatar {
  width: 50%;
}

.diplomas {
  height: fit-content;
  background-color: rgba(190,108,15,0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.diploma {
  font-size: xx-large;
  color: white;
  text-align: center;
  max-width: 20%;
  margin: 1em;
}

.max {
  font-size: 2.5em;
}

#mail {
  color: #ff9d2a;
}

.footer {
  height: 2em;
  background-color: #AD610A;
  text-align: center;
  font-size: xx-large;
}

@media screen and (max-width: 900px) {
  .diploma {
    font-size: x-large;
  }
  .max {
    font-size: 2em;
  }
}

@media screen and (max-width: 750px) {
  #description p {
    font-size: medium;
  }
  .diploma {
    font-size: medium;
  }
  .max {
    font-size: 1.2em;
  }
}

</style>
