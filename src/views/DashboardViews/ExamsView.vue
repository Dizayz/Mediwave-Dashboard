<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediwaveStore } from '@/stores/counter';

const store = useMediwaveStore()

const {Nav} = storeToRefs(store)
</script>

<template>
    <div class="container">
    <div class="container-ban">
        <font-awesome-icon :icon="['fas', 'ban']" class="icon"/>
        <h1>Accès interdit</h1>
        <p>L'accès aux séries d'éxamens est limité aux abonnés!</p>
        <button @click="Nav='home'"><font-awesome-icon :icon="['fas', 'house']" /> Aller à la page d'acceuil</button>
    </div>
    </div>
</template>

<style scoped>
.container{
    padding: 25px;
}
.container-ban{
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
    margin: auto;
    padding:45px 25px;
}
.icon{
    font-size: 4rem;
    color: #fd9001;
}
h1{
    font-size: 2.7rem;
    color: #fd9001;
    font-weight:700;
    text-align: center;
}
p{
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
       text-align: center;
}
button{
font-size: 1rem;
display: flex;
align-items: center;
gap: 10px;
background-color: #f78000;
padding: 10px 25px;
border-radius: 10px;
color: white;
transition: all 0.3s ease;
}
button:hover{
    background-color: #eb7900;
}
</style>