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
        <div :class="{ 'collapse-content': true, 'colapse-off': !colapse }">
            <slot></slot>
        </div>

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
    padding: 1rem;
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
    padding: 1rem;
    overflow-y: auto;
    border: 1px solid #d9d9d9;
    background-color: rgba(34, 94, 190, 0.075);
    border-radius: 0 0 15px 15px;
    transition: all 0.4s ease;
    opacity: 1;
    height: fit-content;
    max-height: 400px;
}

.colapse-off {
    height: 0;
    padding: 0 1rem ;
    opacity: 0;
}

@media(max-width:500px){

.header {
    padding: 1rem;
}
.collapse-content {
    padding: 1rem 0.5rem;
}
.colapse-off {
    height: 0;
    padding: 0 0.5rem ;
    opacity: 0;
}
}
</style>