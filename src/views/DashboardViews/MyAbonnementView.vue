<script setup lang="ts">
import { useMediwaveStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const store = useMediwaveStore()
const { Nav } = storeToRefs(store)

</script>
<template>
    <div class="container">
        <div class="aucun-abonement">
            <p>Vous n'avez aucun abonement!</p>
            <p>Vous pouvez en <router-link to="/" @click="Nav = 'abonnement'">Acheter</router-link> profiter de toutes les
                fonctionalités
                de la
                plateforme.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 25px;
}

.aucun-abonement {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background-color: white;
    border-radius: 15px;

}

p {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
}

a {
    color: #04827c;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.1rem;
}

a:hover {
    text-decoration: underline;
}

</style>