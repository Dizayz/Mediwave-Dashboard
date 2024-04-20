<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    ToutLesmodules: any[];
}>();

const colapses = ref(Array(props.ToutLesmodules.length).fill(false));

const toggle = (index: number) => {
    colapses.value[index] = !colapses.value[index];
}
</script>

<template>
    <div :class="{ 'modules-container': true, 'border': module.sousModules }"
        v-for="(module, index) in props.ToutLesmodules" :key="index">
        <div v-if="module.sousModules" :class="{ 'input-module-container': true, 'colapse-border': colapses[index] }">
            <div>
                <input type="checkbox" :id="module.nomModule.replace(/\s+/g, '-').toLowerCase()">
                <label for="" @click="toggle(index)">{{ module.nomModule }}</label>
            </div>
            <font-awesome-icon :class="{ 'icon': true, 'icon-rotate': colapses[index] }" ref='icon'
                :icon="['fas', 'chevron-down']" @click="toggle(index)" />
        </div>
        <div v-else class="input-sous-module-container">
            <div>
                <input type="checkbox" :id="module.nomModule.replace(/\s+/g, '-').toLowerCase()">
                <label :for="module.nomModule.replace(/\s+/g, '-').toLowerCase()">{{ module.nomModule }}</label>
            </div>
        </div>
        <Transition name="colapse" mode="out-in">
            <div class="sous-module-conteneur" v-if="colapses[index]">
                <Modules v-if="module.sousModules" :ToutLesmodules="module.sousModules"></Modules>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.modules-container {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.border {
    border: 0px 1px 1px 1px solid black;
    border-radius: 10px;
    margin: 0 15px;
}

.colapse-border {
    border-radius: 10px 10px 0 0 !important;

}

.input-module-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #04827c;
    border-radius: 10px;
    color: white;
    transition: border-radius 0.3s ease;
    cursor: pointer;
    padding: 0px 15px;
}

.input-module-container div {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
}

.input-module-container div label {
    width: 100%;
    display: block;
    flex: 1;
    padding: 10px 15px;
}

.input-sous-module-container {
    width: 100%;
}

.input[type=checkbox] {
    width: 25px;
    height: 25px;
}

label {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    padding-left: 10px;
}

.icon {
    font-size: 1rem;
    transition: transform 0.3s ease;
}

.icon-rotate {
    transform: rotate(180deg);
}

.sous-module-conteneur {
    height: 150px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 10px 0 5px 0;
    overflow-y: auto;
    background-color: #04827c31;
}

.colapse-enter-from,
.colapse-leave-to {
    height: 0;
    opacity: 0;
    padding: 0px 10px 0px 10px;
}

.colapse-enter-active,
.colapse-leave-active {
    transition: all 0.3s ease;
}

.sous-module-conteneur .input-module-container {
    background-color: #f78000;
}

.sous-module-conteneur .sous-module-conteneur {
    background-color: #f780007a;
}

.sous-module-conteneur .input-sous-module-container {
    padding: 7px 10px;
    transition: all 0.3s ease-in-out;
}

.sous-module-conteneur .input-sous-module-container div {
    display: flex;
    align-items: center;
}

.sous-module-conteneur .input-sous-module-container div label {
    display: block;
    width: 100%;
}

.sous-module-conteneur .input-sous-module-container:hover {
    background-color: #04827c73;
}

.sous-module-conteneur .sous-module-conteneur .input-sous-module-container:hover {
    background-color: #f7800081;
}
</style>
