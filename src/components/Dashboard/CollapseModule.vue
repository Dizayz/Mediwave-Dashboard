<script setup lang="ts">
import { ref } from 'vue'

const colapse = ref(false)

const toggle = () => {
    colapse.value = !colapse.value

}
</script>

<template>
    <div class="colapse-container">
        <div :class="{ 'header': true, 'header-border': colapse }" @click="toggle">
            <slot name="title">
                <h1>Default Title</h1>
            </slot>
            <font-awesome-icon :class="{ 'icon': true, 'icon-rotate': colapse }" ref='icon'
                :icon="['fas', 'chevron-down']" />
        </div>
        <Transition name="colapse" mode="out-in">
            <div class="collapse-content" v-if="colapse">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.collapse-container {
    display: flex;
    flex-direction: column;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 20px;
    background-color: #1852b8;
    padding: 1.2rem;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    transition: border-radius 0.3s ease;
}

.header-border {
    border-radius: 10px 10px 0 0 !important;
}

.icon {
    font-size: 1rem;
    transition: transform 0.3s ease;
}

.icon-rotate {
    transform: rotate(180deg);

}

.collapse-content {
    background-color: red;
    height: 400px;
    padding: 1rem 2rem;
    overflow: auto;
    border: 1px solid #d9d9d9;
    background-color: rgba(34, 94, 190, 0.075);
    border-radius: 0 0 15px 15px;
}



.colapse-enter-from,
.colapse-leave-to {
    height: 0;
    opacity: 0;
    padding: 0 2rem;
}



.colapse-enter-active,
.colapse-leave-active {
    transition: all 0.3s ease;
}
h1{
        color: black;
}
</style>