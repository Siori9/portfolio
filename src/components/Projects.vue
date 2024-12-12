<script lang="ts">
export default {
  data() {
    return {
      projects: [
        { title: "Bot LLDA", date: "Mars 2020 - ...", lien: "https://github.com/Siori9/BotLLDA-v4", img: "https://siori9.github.io/portfolio/LogoLLDAv4.png", languages: ["Javascript","Typescript", "Java"], contain: `
          <img src="https://siori9.github.io/portfolio/LogoLLDAv41.png" style="width: 10em">
          <p>Ce projet a pour but la création d'un bot Discord pouvant simuler un jeu de type rpg, c'est-à-dire un jeu avec des systèmes de personnage, de combat, de déplacements dans un monde, de quête, d'objet et de recette, etc.</p>
          <hr style="width: 50%; margin: 1em auto">
          <p>Le projet a vu le jour en mars 2020, lors du premier confinement du Covid-19. La première version fut démarrée en JavaScript avec la lib Discordjs alors que je n'avais quasiment jamais fait de programmation de ma vie. Les dernières contributions datent de décembre 2020 et le projet fut mis en pause par manque de temps.</p>
          <img src="https://siori9.github.io/portfolio/lldav11.png" class="img-content" style="width: 40%" alt="Bot llda v1: fonctionnalité affichage menu personnage">
          <p>En juin 2022, une version 2 démarra mais cette fois-ci en Typescript et fut arrêtée en novembre 2022</p>
          <p>La version 3 commença en mars 2023 jusqu'en novembre 2024 et fut développée en Java avec le framework Discord4J, la programmation orientée objet semblant plus pertinente pour le projet.</p>
          <img src="https://siori9.github.io/portfolio/lldav31.png" class="img-content" alt="Bot llda v3: fonctionnalité création de personnage">
          <p>Enfin, en novembre 2024, le projet passa de nouveau à TypeScript dans la version 4. Cette dernière est toujours en développement actuellement.</p>
          <img src="https://siori9.github.io/portfolio/lldav41.png" class="img-content" alt="Bot llda v4: fonctionnalité affichage menu du personnage">
          <div class="recap">
             <h2>Recapitulatif:</h2>
             <ul>
                <li><a href="https://github.com/Llda-project/llda">Version 1</a> [Mars 2020 - Décembre 2020]: Développer en JavaScript avec la librairie DiscordJs</li>
                <li><a href="https://github.com/Siori9/LLDABot">Version 2</a> [Juin 2022 - Novembre 2022]: Développer en TypeScript avec la librairie DiscordJs</li>
                <li><a href="https://github.com/Siori9/BotLLDA-v3">Version 3</a> [Mars 2023 - Novembre 2024]: Développer en Java avec la librairie Discord4J</li>
                <li><a href="https://github.com/Siori9/BotLLDA-v4">Version 4</a> [Novembre 2024 - ...]: Développer en TypeScript avec la librairie DiscordJs</li>
             </ul>
         </div>
         <style>
          p {
            font-size: large;
            width: 70%;
            margin: 0 auto;
          }

          .img-content {
            max-width: 80%;
            margin: 2em;
          }

          .recap {
            width: fit-content;
            text-align: left;
            margin: 2em auto;
            font-size: large;
          }

          @media (max-width: 900px) {
              p {
                  width: 90%;
              }
          }
          </style>
        ` },
        { title: "Isok-ui", date: "Décembre 2023 - ...", img: "https://siori9.github.io/portfolio/isok.png", lien: "https://github.com/isok-io/isok-ui", languages: ["Lit"], contain: `
          <p>Isok est un logiciel permettant de surveiller l'état de santé de site web. Le but de la partie ui va donc être de permettre la configuration de site web afin de pouvoir les ping et d'afficher les différentes données récupérées.</p>
          <p>Ce projet a vu le jour lors d'un hackaton organisé par l'entreprise Clever Cloud pour un groupe d'anciens stagiaires de Pau. Une première version a donc été développée durant 3 jours, le <a href="https://github.com/isok-io/isok">backend</a> par <a href="https://github.com/alyrow">Alyrow</a>, <a href="https://github.com/hcaumeil">Hcaumeil</a> ainsi que <a href="https://github.com/arendsyl">Arend'Syl</a> et le front-end par moi-même.</p>
          <p>La partie ui (front-end) est développée avec le framework Lit, un framework JavaScript léger permettant la création de composants.</p>
          <p>Le projet est toujours en cours...</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/isok.png" alt="Interface principale de Isok">
          <style>
          p {
            font-size: large;
            width: 70%;
            margin: 0 auto;
          }

          .img-content {
            width: 80%;
            margin: 2em;
          }

          @media (max-width: 900px) {
              p {
                  width: 90%;
              }
          }
          </style>
        ` },
        { title: "DrinkGuard", date: "Avril 2024 - Mai 2024", lien: "https://github.com/matthisisback/MobileComputing_", img: "https://siori9.github.io/portfolio/LogoDrinkGuard.png", languages: ["Kotlin"], contain: `
          <img src="https://siori9.github.io/portfolio/LogoDrinkGuard2.png" style="width: 10em">
          <p>Ce projet est une application mobile Android faite dans le cadre d'un cours de développement mobile durant un semestre à l'étranger dans l'université de Reutlingen en Allemagne. L'application a pour but de suivre la consommation d'alcool de l'utilisateur durant une soirée afin de lui indiquer des informations comme son taux d'alcoolémie, s'il est autorisé à conduire,...</p>
          <p>L'application est composée de 3 écrans principaux, plus un écran d'accueil en cas de première utilisation. Le premier écran permet de notifier l'application de nos consommations et affiche le taux d'alcoolémie, le deuxième permet de modifier nos données personnelles et enfin le troisième donne plus de données comme la durée avant un taux d'alcoolémie nul, l'historique de nos consommations,...</p>
          <div class="image-grid">
            <img src="https://siori9.github.io/portfolio/a2.png" alt="Interface deuxième menu">
            <img src="https://siori9.github.io/portfolio/a1.png" alt="Interface premier menu">
            <img src="https://siori9.github.io/portfolio/a3.png" alt="Interface troisième menu">
          </div>
          <style>
          p {
            font-size: large;
            width: 70%;
            margin: 0 auto;
          }
          .image-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5em;
            width: 80%;
            margin: 2em auto;
          }

          .image-grid img {
            width: 100%;
            height: auto;
            display: block;
          }

          @media (max-width: 900px) {
              p {
                  width: 90%;
              }
              .image-grid {
                  width: 90%;
                  grid-template-columns: repeat(2, 1fr);
              }
          }
          </style>
        ` },
        { title: "Memories of a sunny summer", date: "Mai 2024 - Juin 2024", lien: "https://www.youtube.com/watch?v=KamARNqakiQ", img: "https://siori9.github.io/portfolio/memory.png", languages: ["Blender"], contain: `
          <p>Memories of a sunny summer est un court métrage fait avec le logiciel Blender. Il a été créé dans le cadre d'un cours "Visual computing" durant un semestre à l'étranger dans l'université de Reutlingen en Allemagne. Le court métrage raconte l'histoire d'un grand-père qui se retrouve à s'occuper de sa petite fille durant l'été. C'est un doux mélange de nostalgie et de joie, ayant pour but de rappeler à chacun de bons moments passés avec un membre de leur famille. Le court métrage est visionnable sur Youtube sur ce <a href="https://www.youtube.com/watch?v=KamARNqakiQ">lien</a></p>
          <div class="image-grid">
            <img src="https://siori9.github.io/portfolio/cm1.png" alt="Un grand père et sa petite fille se rencontre">
            <img src="https://siori9.github.io/portfolio/cm2.png" alt="Le grand père est au téléphone dans une pièce sombre">
            <img src="https://siori9.github.io/portfolio/cm3.png" alt="Le grand-père empêche la petite fille de tomber du ponton">
            <img src="https://siori9.github.io/portfolio/cm4.png" alt="La petite fille regarde le grand père à côté d'elle">
            <img src="https://siori9.github.io/portfolio/cm6.png" alt="La petite fille envoie un ballon">
            <img src="https://siori9.github.io/portfolio/cm5.png" alt="Le grand père receptionne un ballon">
            <img src="https://siori9.github.io/portfolio/cm7.png" alt="La petite fille est sur les épaule du grand père">
            <img src="https://siori9.github.io/portfolio/cm8.png" alt="La petite fille et le grand père regarde un couché de soleil">
          </div>
          <style>
          p {
            font-size: large;
            width: 70%;
            margin: 0 auto;
          }
            .image-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 0.5em;
              width: 80%;
              margin: 2em auto;
            }

            .image-grid img {
              width: 100%;
              height: auto;
              display: block;
            }

            @media (max-width: 900px) {
                p {
                    width: 90%;
                }
                .image-grid {
                    width: 90%;
                    grid-template-columns: repeat(2, 1fr);
                }
            }
          </style>
        ` },
        { title: "BlackJack", date: "Décembre 2022", lien: "https://github.com/Siori9/BlackJack", img: "https://siori9.github.io/portfolio/blackjack.png", languages: ["C"], contain: `
          <p>Ce projet est une implémentation du célèbre jeu Black Jack pour terminal en C. Il a été développé dans le cadre d'un cours de programmation en C.</p>
          <p>Le jeu peut se jouer de 1 à 4 joueurs et chacun peut choisir son pseudonyme sur la page de démarrage avant le lancement du jeu.</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/bj1.png" alt="Image interface démarrage du jeu avec le choix du nombre de joueur et des pseudonyme" style="margin: 1em">
          <p>A chaque manche, les joueurs pourront choisir, chacun leur tour, leur mise (tous les joueurs commencent le jeu avec 50).</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/bj2.png" alt="Image interface choix des mises" style="margin: 1em">
          <p>Chaque joueur commence avec deux cartes visibles sachant qu'une seule carte du croupier est visible. Ils pourront alors choisir de prendre une nouvelle carte ou s'arrêter là, chacun leur tour.</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/bj3.png" alt="Image interface jeu avec les cartes initials" style="margin: 1em">
          <p>Le joueur peut prendre autant de cartes qu'il veut et la manque se terminera seulement quand tous les joueurs auront arrêté de prendre des cartes ou auront dépassé un score de 21.</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/bj4.png" alt="Image interface jeu avec toutes les cartes de fin de tour" style="margin: 1em">
          <p>Une fois la manche terminée, les cartes du croupier sont révélées et les mises sont restituées, doublées ou gardées en fonction de la réussite de chaque joueur. La logique du croupier, géré par le programme, est très simple: il prendra des cartes tant qu'il n'a pas atteint ou dépassé le score de 19.</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/bj5.png" alt="Image interface jeu en fin de manche" style="margin: 1em">
          <p>La partie prend fin quand les joueurs le souhaitent ou quand un des joueurs n'aura plus rien à miser. A la fin du jeu, un classement des joueurs s'affiche en fonction de leur mise restante.</p>
          <img class="img-content" src="https://siori9.github.io/portfolio/bj6.png" alt="Image interface jeu en fin de manche" style="margin: 1em">
          <style>
            .img-content {
                width: 70%;
            }
            p {
                max-width: 50%;
                margin: 0 auto;
                font-size: large;
            }
          </style>
        ` },
        { title: "Maled Market - website", date: "Février 2023 - Mars 2023", lien: "https://github.com/Siori9/MaledMarket-WebSite", img: "https://siori9.github.io/portfolio/armures.png", languages: ["HTML/CSS", "Javascript", "Php"], contain: `
          <p>Ce projet est un site web ayant pour but de faire une simulation de site marchand. Les produits vendus sont des items liés au monde créé dans le cadre du projet LLDA.</p>
          <img src="https://siori9.github.io/portfolio/buttonArmures.png" alt="Image menu siteweb" style="margin: 1em">
          <style>
            img {
                max-width: 80%;
            }
            p {
                max-width: 50%;
                margin: 0 auto;
                font-size: large;
            }
          </style>
        ` },
      ],
      isPopupVisible: false,
      activeProject: null,
    };
  },
  methods: {
    showPopup(project: any) {
      this.activeProject = project;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
      this.activeProject = null;
    }
  },
};
</script>

<template>
  <div class="content">
    <h1 class="title">Projets personnels / scolaires</h1>
    <div class="project-container">
      <div v-for="(project, index) in projects" :key="index" class="card">
        <img :src="project.img" :alt="project.title">
        <h1 class="card-title">{{ project.title }}</h1>
        <i class="card-date">{{ project.date }}</i>
        <div class="tags">
          <div class="tag" v-if="project.languages.includes('Javascript')" style="background-color: #ff9797;">Javascript</div>
          <div class="tag" v-if="project.languages.includes('Typescript')" style="background-color: #97d7ff;">Typescript</div>
          <div class="tag" v-if="project.languages.includes('Java')" style="background-color: #a1ff97;">Java</div>
          <div class="tag" v-if="project.languages.includes('C')" style="background-color: #d097ff;">C</div>
          <div class="tag" v-if="project.languages.includes('Kotlin')" style="background-color: #ffee97;">Kotlin</div>
          <div class="tag" v-if="project.languages.includes('HTML/CSS')" style="background-color: #97b4ff;">HTML/CSS</div>
          <div class="tag" v-if="project.languages.includes('Lit')" style="background-color: #bcbcbc;">Lit</div>
          <div class="tag" v-if="project.languages.includes('Blender')" style="background-color: #a197ff;">Blender</div>
          <div class="tag" v-if="project.languages.includes('Php')" style="background-color: #dcff97;">PHP</div>
        </div>
        <span @click="showPopup(project)">Plus →</span>
      </div>
    </div>

    <!-- Popup -->
    <div v-if="isPopupVisible" class="popup">
      <div id="popup-content" class="popup-content" v-if="activeProject != null">
        <span class="close" @click="closePopup">x</span>
        <img :src="activeProject.img" :alt="activeProject.title">
        <h1>{{ activeProject.title }}</h1>
        <a class="link" :href="activeProject.lien">Lien du projet</a>
        <div class="tags">
          <div class="tag" v-for="language in activeProject.languages" :key="language">{{ language }}</div>
        </div>
        <div v-html="activeProject.contain"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}

.title {
  font-size: xxx-large;
  color: white;
  margin: 1em;
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10% 10%;
  padding: 2em;
  width: 80%;
}

.card {
  background-color: white;
  color: black;
  width: 20em;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 30em;
}

.card img {
  width: 100%;
  height: 40%;
  object-fit: cover;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2%;
}

.tag {
  border-radius: 10px;
  padding-inline: 5px;
  width: 6em;
  font-size: large;
  text-align: center;
  margin: 2%;
}

span {
  color: black;
  font-weight: bold;
  margin-top: 4px;
  bottom: 1em;
  font-size: medium;
  cursor: pointer;
}

span:hover {
  text-decoration: underline;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: black;
}

.popup-content {
  background: white;
  padding: 2em;
  border-radius: 10px;
  text-align: center;
  width: 70%;
  max-height: 80vh;
  position: relative;
  text-justify: inter-word;
  overflow: scroll;
}

.popup-content img {
  width: 80%;
  height: 15em;
  margin-bottom: 1em;
  object-fit: cover;
}

.popup-content .tags .tag {
  background-color: lightgray;
}

.close {
  position: absolute;
  top: 0.3em;
  right: 1em;
  font-size: 2em;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.card-date{
  font-size: medium
}

.link{
  font-size: large;
}

@media (max-width: 1700px) {
  .project-container {
    gap: 10% 5%;
  }
  .card {
    width: 20em;
  }
}

@media (max-width: 900px) {
  .project-container {
    gap: 10% 3%;
    width: 100%;
    padding: 1em;
  }
  .card {
    width: 12em;
    height: 20em;
  }
  .card-title {
    font-size: large;
  }
  .card-date{
    font-size: small;
  }
  .tag {
    width: 6em;
    font-size: small;
  }
  span {
    font-size: small;
  }


  .close {
    right: 0.5em;
  }

  .popup-content {
    width: 90%;
  }
}
</style>
