<script>
export default {
  name: "Carrousel",
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          title: "Comédie musicale",
          image: "cm.jpg",
          description: `<p style="text-align: center">Chant, danse et théâtre pratiqués depuis 10 ans.</p>`,
        },
        {
          title: "Musique",
          image: "musique.jpg",
          description: `
          <ul>
            <li>Chorale scolaire (7 ans)</li>
            <li>Chanteuse dans un groupe de 6 personnes (4 ans)</li>
            <li>Chanteuse dans le groupe de musique de l'association Bureau Des Arts (2 ans)</li>
            <li>Apprentissage de la guitare et du piano</li>
          </ul>`,
        },
        {
          title: "Sports",
          image: "escalade.jpg",
          description: `<p style="text-align: center">Escalade, badminton et danse.</p>`,
        },
        {
          title: "Jeux de rôle",
          image: "jdr.jpg",
          description: `<p style="text-align: center">Expériences en tant que maître du jeu (MJ) et participant.</p>`,
        },
        {
          title: "Création de jeux",
          image: "jeux.jpg",
          description: `
            <ul>
              <li>Escape games</li>
              <li>Jeux divers en colonie de vacances</li>
              <li>Conception de jeux de société</li>
            </ul>
          `,
        },
        {
          title: "Création d'histoire",
          image: "ecriture.jpg",
          description: `<p style="text-align: center">Création d'histoires et réalisation de courts métrages.</p>`,
        },
        {
          title: "Travaux manuels",
          image: "crochet.jpg",
          description: `<p style="text-align: center">Crochet, maquettes en bois, LEGO et autres activités créatives.</p>`,
        },
      ],
    };
  },
  methods: {
    prevItem() {
      this.currentIndex =
          (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>


<template>
  <div class="carousel-container">
    <h1>Centre d'intérêt</h1>
    <div class="carousel">
      <button class="nav-button left" @click="prevItem">‹</button>

      <div class="carousel-content">
        <img :src="items[currentIndex].image" alt="Image" class="carousel-image" />
        <h3>{{ items[currentIndex].title }}</h3>
        <div class="contain" v-html="items[currentIndex].description"></div>
      </div>

      <button class="nav-button right" @click="nextItem">›</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: xxx-large;
}

.carousel-container {
  text-align: center;
  color: white;
  padding: 20px;
  position: relative;
}

.carousel {
  position: relative;
  width: 40%;
  margin: 0 auto;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 10px 10px 0px #a15416;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-image {
  width: 80%;
  height: auto;
  background-color: #32a852;
  border-radius: 5px;
  margin-bottom: 20px;
}

.carousel h3 {
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

.carousel .contain {
  font-size: large;
  color: black;
  text-align: start;
}

.carousel-content {
  width: 70%;
}

.nav-button {
  top: 50%;
  font-size: xx-large;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  z-index: 2;
  position: absolute;
}

.nav-button:hover {
  color: #a15416;
}

.nav-button.left {
  left: 5%;
}

.nav-button.right {
  right: 5%;
}


@media screen and (max-width: 900px) {
  .carousel {
    width: 70%;
  }
}
</style>
