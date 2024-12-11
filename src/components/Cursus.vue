<template>
  <div class="timeline">
    <div class="timeline-header">Cursus scolaire</div>
    <div class="timeline-bar">
      <div v-for="(step, index) in steps" :key="index" class="timeline-step">
        <div class="step-point"></div>
      </div>
    </div>
    <div class="timeline-steps">
      <div v-for="(step, index) in steps" :key="index" class="step-box">
        {{ step.title }}<br>
        <i>{{step.date}}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { title: "Lycée Louis Barthou, Bac Scientifique, spé ISN, option musique et art plastique", date: "" },
        { title: "Classe préparatoire intégrée math info - CY Tech Pau", date: "Septembre 2020 - Juin 2022"},
        { title: "Cycle ingénieur spécialité informatique - CY Tech Pau", date: "Septembre 2022 - Juin 2025" },
        { title: "Semestre à l'étranger - Reutlingen University, Allemagne", date: "Mars 2024 - Juillet 2024" },
      ],
    };
  },
};
</script>

<style>
.timeline {
  text-align: center;
  background: #f9f9f9;
  padding: 20px;
  color: black;
}

.timeline-header {
  font-size: xxx-large;
  font-weight: bold;
  margin-bottom: 20px;
}

.timeline-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 10px;
  background: #d87a00;
  margin: 0 10%;
  border-radius: 5px;
}

.timeline-step {
  position: relative;
}

.step-point {
  width: 10px;
  height: 10px;
  background: white;
  border: 2px solid #d87a00;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-steps {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 20px 10%;
}

.step-box {
  padding: 10px;
  background: white;
  border: 2px solid #d87a00;
  border-radius: 5px;
  width: 18%;
  text-align: center;
  font-size: large;
}

.step-box i {
  font-size: medium;
}

@media screen and (max-width: 900px) {
  .timeline-bar {
    margin: 0 5%;
  }
  .timeline-steps {
    margin: 20px 5%;
  }
}

@media screen and (max-width: 800px) {
  .step-box {
    font-size: medium;
  }
  .step-box i {
    font-size: small;
  }
}

@media screen and (max-width: 700px) {
  .timeline-bar {
    margin: 0 3%;
  }
  .timeline-steps {
    margin: 20px 3%;
  }
  .step-box {
    padding: 5px;
    font-size: small;
    width: 23%;
  }
  .step-box i {
    font-size: x-small;
  }
}

</style>