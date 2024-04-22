<script setup lang="ts">
import { ref } from "vue"
import { useMediwaveStore } from '../../stores/counter'
import { storeToRefs } from 'pinia';
const MyStore = useMediwaveStore()
const { Nav } = storeToRefs(MyStore)
var informations = [{ Title: 'Modules', Quantity: '45', Color: '#1852b8' }, { Title: 'Questions isolées', Quantity: '54802', Color: '#04827c' }, { Title: 'Cas Cliniques', Quantity: '2498', Color: '#d93d3d' }, { Title: "Faits aujourd'huit", Quantity: '0', Color: '#f78000' }]
const informationsData = ref(informations)
////////////////////////////////////////////////////////////////
import { onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Register the necessary components for Chart.js
Chart.register(...registerables);

const chartCanvas = ref<HTMLCanvasElement | null>(null);

let chartInstance: Chart | null = null;

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d');
    if (ctx) {
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
          datasets: [
            {
              label: 'Correctes',
              data: [65, 59, 80, 81, 56, 55],
              fill: false,
              borderColor: '#04827c',
              tension: 0.1
            },
            {
              label: 'Fausses',
              data: [28, 48, 40, 19, 86, 27],
              fill: false,
              borderColor: '#d93d3d',
              tension: 0.1
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          aspectRatio: 5/3,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

});
</script>
<template>
  <div class="informations">
    <div v-for="(information, index) in informationsData " :key=index class="information"
      :style="{ backgroundColor: information.Color }">
      <h3>{{ information.Title }}</h3>
      <h3>{{ information.Quantity }}</h3>
    </div>


    <div class="chart-container">
      <h4 class="inset-color">Performance Par Jour</h4>
      <canvas ref="chartCanvas"></canvas>
    </div>
    <div class="quizlogs-container">
      <h4 class="inset-color">Vos derniers quiz</h4>
      <div class="quizlog-content">
        <div class="rajel">
          <p>Vous n'avez pas de quiz en cours</p>
          <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
        </div>
        <h6 @click="Nav = 'mes-quizz'">Voir tous les quizs</h6>
      </div>

    </div>
  </div>
</template>

<style scoped>
.informations {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 25px;
}

.information {
  background-color: red;
  color: white;
  text-align: center;
  padding: 30px 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:5px;
}

h3 {
  font-weight: 700;
  text-transform: uppercase;
  
}

.chart-container,
.quizlogs-container {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 25px;
  border-radius: 15px;
  grid-column: span 2;
}

h4 {
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 3px solid #1852b8;
  padding-bottom: 1px;

}

.quizlog-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  font-weight: 1.1rem;
  color: gray;
}

button {
  margin-top: 15px;
  background-color: #04827c;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  border-radius: 360px;
  padding: 8px 15px;
  margin-bottom: auto;
}

.rajel {
  margin: auto;
  text-align: center;
}

h6 {
  font-weight: 600;
  color: black;
  cursor: pointer;
  font-size: 1rem;
}

h6:hover {
  color: #1852b8;
  text-decoration: underline;
}

/* media queries */
@media(max-width:1050px){
  .informations {
  grid-template-columns: repeat(2, 1fr);

}
}
@media(max-width:500px){
  .informations {
display: flex;
flex-direction: column;

}
}
</style>