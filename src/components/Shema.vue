<template>
  <div class="graph-container">

    <div
        v-for="(node, id) in nodes"
        :key="id"
        :class="node.id === 'n7'? 'nodeCarre': 'node'"
        :style="node.style"
        :id="'node-' + node.id"
    >
      <div class="node-title">{{ node.title }}</div>
      <div class="node-date">{{ node.date }}</div>
      <span class="node-link" v-if="node.id !== 'n7'" @click.prevent="showPopup(node)">Plus →</span>
    </div>

    <svg class="arrows" xmlns="http://www.w3.org/2000/svg">
      <path
          v-for="(arrow, index) in arrows"
          :key="index"
          :d="drawRightAnglePath(arrow)"
          fill="none"
          stroke="black"
          stroke-width="3"
      />
    </svg>

    <div v-if="selectedNode" class="popup">
      <div class="popup-content">
        <button class="close-btn" @click="closePopup">×</button>
        <img :src=selectedNode.img :alt=selectedNode.title>
        <h2>{{ selectedNode.title }}</h2>
        <p><strong>Date:</strong> {{ selectedNode.date }}</p>
        <p v-html="selectedNode.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: [
        {id: "n1", title: "Alternance chez Clever Cloud", date: "09/2024 - 09/2025", style: { top: "0", left: "0%" },
          description: "Une alternance dans l'équipe front-end de l'entreprise Clever Cloud. Je contrinue à la banque de composant open source de l'entreprise, avec le framework front-end Lit, les intégre à des outils et travail sur l'intégration de l'outil Matomo (équivalent opensource à Google Analytics) à la console (outil principal) de l'entreprise.",
          img: "/public/logoClever.png"
        },
        { id: "n2", title: "Stage chez Clever Cloud", date: "06/2023 - 08/2023", style: { top: "40%", left: "0%" },
          description: "Un stage de développement dans l'entreprise Clever Cloud, un cloud provider. J'ai travaillé sur le développement d'un plugin Grafana pour le gestionnaire de base de donnée Warp10.",
          img: "/public/stage.png"
        },
        { id: "n3", title: "Présidente de l'association Corpauration", date: "04/2023 - 04/2024", style: { top: "25%", left: "60%" },
          description: "Présidente de l'association la Corpauration, une association étudiante autour de la thématique des jeux vidéo, des jeux de sociétés et de l'informatique. Je me suis occupé de la gestion d'équipe, du contact avec l'administration de l'établissement, d'organisation de gros évènements et de la gestion du tutorat pour les étudiants (mise en contact d'étudiant en classe préparatoire ayant besoin d'aide pour les cours avec des étudiants en cycle ingénieur volontaires).",
          img: "/public/corp.png"
        },
        { id: "n4", title: "Présidente de l'association Bureau des arts CY Tech Pau", date: "04/2022 - 04/2024", style: { top: "40%", left: "40%" },
          description: "Présidente de l'association du Bureau des Arts de CY Tech Pau. C'est une association étudiante autour de la thématiques des arts. Je me suis occupé de tout l'administratif, de la gestion financière, de la gestion d'évènement, de la communication, et de la gestion d'équipe. Dans ce cadre j'ai pu gérer des atelier Théâtre, faire partie d'un groupe de musique, écrire la Gazette de l'école (un journal écrit par les étudiants pour l'ensemble de l'établissement),...",
          img: "/public/BDA.png"
        },
        { id: "n5", title: "Responsable communication de l'association Corpauration", date: "04/2021 - 04/2023", style: { top: "55%", left: "60%" },
          description: "Responsable communication de l'association Corpauration, une association étudiante centré sur le jeu vidéo, le jeu de société et l'informatique. Je m'occupais de créer des affiches, rédiger des mails, des posts sur les réseaux sociaux,... Je me suis également occupé de la collection de vêtement de l'association.",
          img: "/public/LaserGame.png"
        },
        { id: "n6", title: "Animatrice en colonie de vacances et centre de loisir", date: "Ete 2021/2022", style: { top: "70%", left: "0%" },
          description: "- Eté 2021: Animatrice dans un centre de loisir à Monein avec un groupe d'enfant de 3 à 6 ans.<br>- Eté 2022: Animatrice en colonie de vacances avec l'organisme Vatacolo sur un séjour Théâtre avec des adolescents de 15 à 17 ans.",
          img: "/public/centreLoisir.jpg"
        },
        { id: "n7", title: "", date: "", style: { top: "100%", left: "33%" } },
      ],
      arrows: [
        { from: "n2", to: "n1", fromSide: "top", toSide: "bottom" },
        { from: "n6", to: "n2", fromSide: "top", toSide: "bottom" },
        { from: "n6", to: "n4", fromSide: "top", toSide: "bottom" },
        { from: "n7", to: "n6", fromSide: "top", toSide: "bottom" },
        { from: "n4", to: "n1", fromSide: "top", toSide: "bottom" },
        { from: "n3", to: "n1", fromSide: "top", toSide: "bottom" },
        { from: "n5", to: "n3", fromSide: "top", toSide: "bottom" },
        { from: "n7", to: "n5", fromSide: "top", toSide: "bottom" },
      ],
      selectedNode: null,
    };
  },
  methods: {
    showPopup(node) {
      this.selectedNode = node;
    },
    closePopup() {
      this.selectedNode = null;
    },
    getNodePosition(nodeId, side) {
      const nodeEl = document.getElementById(`node-${nodeId}`);
      if (!nodeEl) {
        return { x: 0, y: 0 };
      }

      const rect = nodeEl.getBoundingClientRect();
      const containerRect = this.$el.getBoundingClientRect();

      const xCenter = rect.left - containerRect.left + rect.width / 2;
      const yCenter = rect.top - containerRect.top + rect.height / 2;

      const positions = {
        top: { x: xCenter, y: rect.top - containerRect.top },
        bottom: { x: xCenter, y: rect.bottom - containerRect.top },
        left: { x: rect.left - containerRect.left, y: yCenter },
        right: { x: rect.right - containerRect.left, y: yCenter },
      };

      return positions[side];
    },
    drawRightAnglePath(arrow) {
      const fromPos = this.getNodePosition(arrow.from, arrow.fromSide);
      const toPos = this.getNodePosition(arrow.to, arrow.toSide);

      if (!fromPos || !toPos) return "";

      let path = `M ${fromPos.x} ${fromPos.y}`;

      let sharedY = (fromPos.y + toPos.y) / 2;

      if (arrow.from === "n4" && arrow.to === "n1") {
        sharedY = 270;
      }

      if (fromPos.x !== toPos.x && fromPos.y !== toPos.y) {
        path += ` V ${sharedY}`;

        path += ` H ${toPos.x}`;

        path += ` V ${toPos.y}`;
      } else if (fromPos.x === toPos.x) {
        path += ` V ${toPos.y}`;
      } else if (fromPos.y === toPos.y) {
        path += ` H ${toPos.x}`;
      }

      return path;
    },
    updateArrows() {
      this.$nextTick(() => {
        this.arrows = [...this.arrows];
      });
    },
  },
  watch: {
    nodes: {
      immediate: true,
      handler() {
        this.updateArrows();
      },
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border: solid 1px black;
  border-radius: 8px;
  padding: 20px;
  z-index: 1000;
  width: 50%;
  max-width: 500px;
}

.popup img {
  width: 80%;
}
.popup-content {
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.close-btn:hover {
  color: red;
}
.graph-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.node {
  position: absolute;
  width: 20%;
  height: 20%;
  background-color: #a65300;
  color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.nodeCarre {
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #a65300;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.node-title {
  font-weight: bold;
  width: 80%;
  font-size: x-large;
  line-height: normal;
}
.node-date {
  font-size: large;
}

.node-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-top: 4px;
  position: absolute;
  bottom: 1em;
  font-size: medium;
}
.node-link:hover {
  text-decoration: underline;
}
.arrows {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media screen and (max-width: 1700px) {

  .popup {
    width: 65%;
  }

  .node {
    width: 15em;
    height: 15em;
  }

  .nodeCarre {
    position: absolute;
    width: 2em;
    height: 2em;
  }

  .node-title {
    font-size: large;
  }
  .node-date {
    font-size: medium;
  }

  .node-link {
    font-size: small;
  }
}

@media screen and (max-width: 950px) {
  .node {
    width: 12em;
    height: 12em;
  }
}

@media screen and (max-width: 750px) {

  .popup {
    width: 80%;
  }

  .node {
    width: 10em;
    height: 10em;
  }

  .node-title {
    font-size: small;
  }
  .node-date {
    font-size: small;
  }

  .node-link {
    font-size: x-small;
  }
}
</style>
