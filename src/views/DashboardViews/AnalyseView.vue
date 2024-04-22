<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import { type DataChart } from "../../types"
import AnalyseModule from '@/components/Dashboard/AnalyseModule.vue';
import { useRouter } from 'vue-router';
// Register the necessary components for Chart.js
Chart.register(...registerables);
const router = useRouter();
const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;
const day = ref<DataChart>({
  x: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  Correct: [65, 59, 80, 81, 56, 55, 70],
  False: [28, 48, 40, 19, 86, 27, 90]
});
const week = ref<DataChart>({
  x: ['1ère', '2ème', 'Dernière', 'Courante'],
  Correct: [15, 85, 36, 55],
  False: [2, 16, 56, 10]
});
const month = ref<DataChart>({
  x: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  Correct: [65, 59, 80, 81, 56, 55, 70, 80, 81, 56, 55, 70],
  False: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 70]
});
const DataCharte = ref<DataChart>(day.value);
const selectedTimeframe = ref('day'); // Added ref for selected timeframe

// Watch selectedTimeframe and update DataCharte accordingly
watch(selectedTimeframe, (newValue) => {
  switch (newValue) {
    case 'day':
      DataCharte.value = day.value;
      break;
    case 'week':
      DataCharte.value = week.value;
      break;
    case 'month':
      DataCharte.value = month.value;
      break;
  }
  // Trigger chart update if chartInstance exists
  if (chartInstance) {
    chartInstance.data.labels = DataCharte.value.x;
    chartInstance.data.datasets[0].data = DataCharte.value.Correct;
    chartInstance.data.datasets[1].data = DataCharte.value.False;
    chartInstance.update();
  }
});

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d');
    if (ctx) {
      // Only create chartInstance if it doesn't exist
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: DataCharte.value.x,
          datasets: [
            {
              label: 'Correctes',
              data: DataCharte.value.Correct,
              fill: false,
              borderColor: '#04827c',
              tension: 0.1
            },
            {
              label: 'Fausses',
              data: DataCharte.value.False,
              fill: false,
              borderColor: '#d93d3d',
              tension: 0.1
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          aspectRatio: 5/1.5,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
  updateAspectRatio()
});
const updateAspectRatio = () => {
  if (window.innerWidth < 800) {
    if (chartInstance) {
      chartInstance.options.aspectRatio = 5/3; // New aspect ratio for smaller screens
      chartInstance.update(); // Update chart
    }
  } else {
    if (chartInstance) {
      chartInstance.options.aspectRatio = 5/1.5; // Default aspect ratio for larger screens
      chartInstance.update(); // Update chart
    }
  }
};

window.addEventListener('resize', updateAspectRatio);

// Listen for route updates
</script>

<template>
  <div class="analyse-container">

    <div class="chart-container">
      <h4>Performance Par Jour</h4>
      <canvas  ref="chartCanvas"></canvas>
      <div class="radios">
        <div class="radio-container">
          <input v-model="selectedTimeframe" value="day" type="radio" name="chart" id="day">
          <label for="day">Par Jour</label>
        </div>
        <div class="radio-container">
          <input v-model="selectedTimeframe" value="week" type="radio" name="chart" id="week">
          <label for="week">Par Semaine</label>
        </div>
        <div class="radio-container">
          <input v-model="selectedTimeframe" value="month" type="radio" name="chart" id="month">
          <label for="month">Par Mois</label>
        </div>
      </div>
    </div>
    <div class="quizlogs-container">
      <h4>Vos points forts/faibles</h4>
      <div class="text-container-fort">
        <h2>Embryologie</h2>
        <p>Votre point fort</p>
        <font-awesome-icon class="chevron" :icon="['fas', 'chevron-right']" />
      </div>
      <div class="text-container-faible">
        <h2>Embryologie</h2>
        <p>Votre point faible</p>
        <font-awesome-icon class="chevron" :icon="['fas', 'chevron-right']" />
      </div>
    </div>
    <div class="module-container">
      <h4>Analyses par module</h4>
      <div class="searchbar">
        <div class="input-container">
          <font-awesome-icon class="usericon" :icon="['fas', 'magnifying-glass']" />
          <input type="text" name="recherche" id="recherche" placeholder="Recherche">
        </div>
        <button class="filter"><font-awesome-icon class="filter-icon" :icon="['fas', 'filter']" /> <span>Filter Par
            Source</span> </button>
      </div>
      <v-switch :model-value="true" color="primary"  label="Cacher les questions non répondues" style="margin-left: 5px; color:black;"
        hide-details></v-switch>
      <div class="analyse-detail-module">
        <AnalyseModule></AnalyseModule>
        <AnalyseModule></AnalyseModule>
        <AnalyseModule></AnalyseModule>
      </div>
    </div>
  </div>
</template>

<style scoped>

.analyse-container {
  width: 100%;
  display: grid;
  grid-template-columns: 4fr minmax(300px,1fr);
  gap: 20px;
  padding: 25px;
}

h3 {
  font-weight: 700;
  text-transform: uppercase;
   color: black;
}

.chart-container,
.quizlogs-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 25px;
  border-radius: 15px;
  width: 100%;
  /* Set width to 100% */
  overflow-x: hidden;
}



h4 {
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 3px solid #1852b8;
  padding-bottom: 1px;
 color: black;
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

.radios {
  margin-top: 25px;
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: space-around;
  align-items: center;
}

label {
  padding-left: 10px;
  font-size: 1rem;
  color: black;
  cursor: pointer;
}

.text-container-faible,
.text-container-fort {
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 100%;

}

.text-container-fort {
  background-color: #f2fffd;
  border: 2px solid #7dd4c8;
}

.text-container-faible {
  background-color: #fff0f4;
  border: 2px solid #e697a8;

}

.text-container-fort h2 {
  color: #079185;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
}

.text-container-faible h2 {
  font-size: 1.2rem;
  color: #c22f47;
  text-transform: uppercase;
  font-weight: 600;
}

p {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.726);
}

.chevron {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(50%, -50%);
}

.text-container-faible .chevron {
  color: #c22f47;
}

.text-container-fort .chevron {
  color: #079185;
}

.module-container {
  grid-column: span 2;
  background-color: white;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.searchbar {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 10px;
  width: 100%;
  /* Set initial width to 100% */
  max-width: 400px;
  /* Set maximum width to 450px */
  margin: auto 0;
}

input {
  font-size: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.568);
  border-radius: 10px;
  width: 100%;
  padding: 10px 10px 10px 35px;
  /* Adjust left padding to accommodate icon */
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-weight: 400;
   color: black;
}

.usericon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}

input:focus {
  outline: none;
}

input:focus {
  background-color: #1773eb10;
  border: 1px solid #1773ebd7;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.filter {
  display: flex;
  gap: 5px;
  background-color: #1852b8;
  transition: all 0.2s ease-in-out;
  color: white;
  font-size: 1rem;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
  white-space: nowrap;
}

.filter * {
  font-weight: 600;
}

.filter-icon {
  font-size: 1.2rem;
}

.filter:hover {
  background-color: #103b86;
}

.analyse-detail-module {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

/* responsiveness */
@media(max-width:1050px){
.analyse-container {
  display: flex;
flex-direction: column;
}
}
@media(max-width:1300px){
.analyse-detail-module {
  display: flex;
  flex-direction: column;
} }
</style>