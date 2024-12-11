<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import confetti from "canvas-confetti";

export default defineComponent({
  name: "MemoryGame",
  components: { FontAwesomeIcon },
  data() {
    return {
      categories: [
        {
          name: "Languages",
          items: [
            { name: "Javascript", icon: ["fab", "js"] },
            { name: "Typescript", icon: [], path: "/public/ts-icon.svg" },
            { name: "HTML/CSS", icon: ["fab", "html5"] },
            { name: "Php", icon: ["fab", "php"] },
            { name: "C", icon: [], path: "/public/C-icon.png"},
            { name: "Python", icon: ["fab", "python"] },
            { name: "Go", icon: [], path: "/public/go-icon.png"},
            { name: "Java", icon: ["fab", "java"] },
            { name: "Kotlin", icon: [], path: "/public/kotlin-icon.png" },
            { name: "Rust", icon: [], path: "/public/rust-icon.png" },
            { name: "Scala", icon: [], path: "/public/scala-icon.png"},
            { name: "Prolog", icon: [], path: "/public/prolog-icon.svg" },
          ],
        },
        {
          name: "Frameworks",
          items: [
            { name: "VueJS", icon: ["fab", "vuejs"] },
            { name: "React", icon: ["fab", "react"] },
            { name: "Angular", icon: ["fab", "angular"] },
            { name: "Lit", icon: [], path: "/public/lit-icon.png" },
            { name: "Spring", icon: [], path: "/public/spring-icon.png" },
            { name: "Quarkus", icon: [], path: "/public/quarkus-icon.png" },
            { name: "Chart.js", icon: [], path: "/public/chartjs-icon.png"},
            { name: "TypeORM", icon: [], path: "/public/typeorm-icon.png"},
            { name: "Discord.js", icon: ["fab", "discord"] },
          ],
        },
        {
          name: "BDD",
          items: [
            { name: "PostgreSQL", icon: [], path: "/public/posgresql-icon.png"},
            { name: "MySQL", icon: [], path: "/public/mysql-icon.png" },
            { name: "MongoDB", icon: [], path: "/public/mongodb-icon.png" },
            { name: "Redis", icon: [], path: "/public/redis-icon.png" },
          ],
        },
        {
          name: "Outils",
          items: [
            { name: "Grafana", icon: [], path: "/public/grafana-icon.png" },
            { name: "Unix", icon: ["fas", "terminal"] },
            { name: "Blender", icon: [], path: "/public/blender-icon.svg" },
            { name: "Gimp", icon: [], path: "/public/gimp-icon.png"},
            { name: "Pack Office", icon: [], path: "/public/office-icon.png" },
            { name: "Figma", icon: [], path: "/public/figma-icon.png" },
            { name: "Unity", icon: [], path: "/public/unity-icon.png" },
          ],
        },
      ],
      activeCategory: "Languages",
      cards: [],
      selectedCards: [],
      matchedCards: [],
      lockBoard: false,
    };
  },
  computed: {
    currentCards() {
      const category = this.categories.find(
          (cat) => cat.name === this.activeCategory
      );
      if (category) {
        const duplicated = [...category.items, ...category.items];
        return duplicated.sort(() => Math.random() - 0.5);
      }
      return [];
    },
  },
  methods: {
    initializeGame() {
      this.cards = this.currentCards.map((card) => ({
        ...card,
        flipped: false,
      }));
      this.selectedCards = [];
      this.matchedCards = [];
      this.lockBoard = false;
    },
    selectCard(card) {
      if (this.lockBoard || card.flipped || this.matchedCards.includes(card))
        return;

      card.flipped = true;
      this.selectedCards.push(card);

      if (this.selectedCards.length === 2) {
        this.lockBoard = true;

        if (this.selectedCards[0].name === this.selectedCards[1].name) {
          this.matchedCards.push(...this.selectedCards);
          this.selectedCards = [];
          this.lockBoard = false;
          this.endCheck();
        } else {
          setTimeout(() => {
            this.selectedCards.forEach((card) => (card.flipped = false));
            this.selectedCards = [];
            this.lockBoard = false;
          }, 1000);
        }
      }
    },
    switchCategory(categoryName) {
      this.activeCategory = categoryName;
      this.initializeGame();
    },
    endCheck() {
      if (this.cards.length === this.matchedCards.length) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: 0.5, y: 0.5 },
        });

        setTimeout(() => {
          confetti.reset();
        }, 1000);
      }
    },
    flipAllCards() {
      this.cards.forEach((card) => {
        card.flipped = true;
      });
    },
  },
  mounted() {
    this.initializeGame();
  },
});
</script>

<template>
  <div class="content">
    <h1>Compétences</h1>
    <div class="memory-game-container">
      <div class="sidebar">
        <div
            v-for="category in categories"
            :key="category.name"
            class="category-button"
            :class="{ active: activeCategory === category.name }"
            @click="switchCategory(category.name)"
        >
          {{ category.name }}
        </div>
        <div class="button-container">
          <button @click="flipAllCards">Retourner toutes les cartes</button>
        </div>
      </div>

      <div class="game-board">
        <div
            v-for="(card, index) in cards"
            :key="index"
            class="card"
            :class="{ flipped: card.flipped }"
            @click="selectCard(card)"
        >
          <div class="front">
            <font-awesome-icon v-if="card.icon.length > 0" :icon="card.icon" size="3x" />
            <img v-else :src="card.path" class="icon" :alt="card.name">
            <span class="text-card" >{{ card.name }}</span>
          </div>
          <div class="back"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  background-color: #8a4b08;
  color: #fff;
  text-align: center;
  padding: 2em;
  margin-top: 10em;
}

h1 {
  font-size: xxx-large;
}

.memory-game-container {
  display: flex;
  font-family: Arial, sans-serif;
  height: fit-content;
  width: 70%;
  margin: 1em auto;
}

.sidebar {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.category-button {
  padding: 0.5em 1em;
  text-align: center;
  font-size: 1.2em;
  cursor: pointer;
  transition: background 0.3s ease;
  border: 1px solid white;
  width: 100%;
}

.category-button.active,
.category-button:hover {
  background: #332a21;
}

.game-board {
  border: solid 1px white;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  gap: 0.5em;
  padding: 2em;
  justify-items: center;
  margin-top: 1em;
}


.card {
  width: 70%;
  height: 10em;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
  margin-bottom: 1em;
}

.card .front,
.card .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s;
}

.card .front {
  background: #fff;
  color: #000;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}

.card .back {
  background: #332a21;
  transform: rotateY(0deg);
}

.card.flipped .front {
  transform: rotateY(0deg);
  display: flex;
  flex-direction: column;
}

.card.flipped .back {
  transform: rotateY(180deg);
}

.icon {
  width: 50%;
}

.text-card {
  margin-top: 1em;
  font-size: large;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.button-container button {
  color: white;
  font-size: 1em;
  border: 1px solid white;
  cursor: pointer;
  transition: background 0.3s ease;
  padding: 0.5em 1em;
}

.button-container button:hover {
  background-color: #332a21;
}

@media screen and (max-width: 1400px) {
  .memory-game-container {
    width: 70%;
  }
  .card {
    height: 7em;
    width: 90%;
  }
  .category-button {
    font-size: 1em;
  }

  .text-card {
    font-size: small;
  }
}
@media screen and (max-width: 1400px) {
  .game-board {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .memory-game-container {
    width: 100%;
  }
  .card {
    height: 7em;
    width: 90%;
  }
  .sidebar {
    width: 25%;
  }
  .category-button {
    padding: 0.5em 0.3em;
    font-size: 1em;
  }

  .game-board {
    grid-template-columns: repeat(4, 1fr);
    padding: 0.5em;
    gap: 0.3em;
  }
  .text-card {
    font-size: small;
  }

  .content {
    padding: 1em;
  }
}
</style>
