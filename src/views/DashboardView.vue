<script setup lang="ts">
import Navigation from "../components/Dashboard/Navigation.vue"
import { RouterView } from "vue-router";
import TopNav from "@/components/Dashboard/TopNav.vue";
import AnoncePopup from "../components/Dashboard/AnoncePopup.vue"
import NavigationMobile from "@/components/Dashboard/NavigationMobile.vue";

</script>
<template>
    <div class="main">
        <Navigation class="nav"></Navigation>
    <NavigationMobile ></NavigationMobile>


        <div class="content">
            <TopNav></TopNav>
            <AnoncePopup></AnoncePopup>
            <div class="wrapper">
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>

.slidenav-enter-active,
.slidenav-leave-active {
    transition: 0.6s all ease;
}

.slidenav-enter-from {
    opacity: 0;
}

.slidenav-enter-to {
    opacity: 1;
}

.slidenav-leave-from {
     opacity: 0;
}

.slidenav-leave-to {
     opacity: 1;
}



.main {
    background-color: #e9e9ee;
    display: flex;
    overflow: none;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.wrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
@media(max-width:580px){
    .nav{
        display: none;
    }
}
</style>