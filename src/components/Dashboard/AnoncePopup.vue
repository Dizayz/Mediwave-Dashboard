<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediwaveStore } from '../../stores/counter'

const MyStore = useMediwaveStore()
const repeater = [1,2,3,4]

const { TogleModalAnounce } = storeToRefs(MyStore)

window.onclick = (event) => {
    if (
        !(event.target as HTMLElement)?.closest('.togglermodal') &&
        !(event.target as HTMLElement)?.closest('.modal-container')
    ) {
        TogleModalAnounce.value = false;
    }
}

</script>

<template>
    <transition name="slidein" mode="out-in">
        <div v-if="TogleModalAnounce" class="modal-container">
            <div class="header-modal">
                <button @click="TogleModalAnounce = !TogleModalAnounce"><font-awesome-icon :icon="['fas', 'xmark']" /></button>
                <h1> Mises à jour</h1>
            </div>
            <div class="MAJ" v-for="repeat in repeater">
                <hr>
                <h2>Nouvelles mises à jours 2024</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id maiores blanditiis perferendis quibusdam iusto?</p>
                <p style="font-weight: 500;"> Lorem, ipsum : </p>
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
                <div class="timer">
                    <h6>il y a 2 mois</h6>
                </div>
            </div>
        </div>
    </transition>
</template>


<style scoped>
.modal-container {
    height: calc(100vh - 60px);
    width: calc(100vw - 70px);
    max-width: 500px;
    background-color: white;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 10000;
    box-shadow: -5px 0 10px rgba(143, 141, 141, 0.5);
    display: flex;
    flex-direction: column;
    line-height: 2;
    overflow-y: auto;
}

.header-modal{
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 10px;
position: sticky;
top: 0;
background-color: white;
z-index: 999;
}
h1{
    margin: 0 auto;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
}
.header-modal button{
        cursor: pointer;
}
.header-modal button > *{
    font-size: 1.3rem;
}
.MAJ{
    padding: 20px;
    border-bottom: 8px solid rgba(128, 128, 128, 0.2);
}
h2{
    font-weight: 500;
    color: #1852b8;
}
p{
    font-size: 1rem;
    font-weight: 400;
}
ul{
    margin-left: 2rem;
}
.timer h6{
    color: rgba(128, 128, 128, 0.8);
    margin-top: 1rem;
    margin-left: 5px;
    font-size: 0.8rem;
    font-weight: 400;
}
.MAJ hr{
    background-color: #1852b8;
    height: 5px;
    border: none;
   transform: skewX(300deg);
}
.slidein-enter-active,
.slidein-leave-active {
    transition: 0.6s all ease;
}

.slidein-enter-from {
    transform: translateX(100%);
}

.slidein-enter-to {
    transform: translateX(0%);
}

.slidein-leave-from {
    transform: translateX(0%);
}

.slidein-leave-to {
    transform: translateX(100%);
}
</style>