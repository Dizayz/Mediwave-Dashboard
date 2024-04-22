<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMediwaveStore } from '../../stores/counter'


const MyStore = useMediwaveStore()
const { TogleModalAnounce, TogleMobileNav } = storeToRefs(MyStore)
const toglemodal = () => {
    TogleModalAnounce.value = !TogleModalAnounce.value
}
const TogleMobileNavValue = () => {
    TogleMobileNav.value = !TogleMobileNav.value
}
</script>

<template>
    <div class="navbar">

        <div class="navbar-items">
            <button class="hamburger" @click="TogleMobileNavValue"><font-awesome-icon :icon="['fas', 'bars']" /></button>
            <v-menu transition="scale-transition" >
                <template v-slot:activator="{ props }">
                    <button  v-bind="props">
                        <font-awesome-icon :icon="['fas', 'bell']" />
                    </button>
                </template>
                <v-list  class="list">
                    <div class="notifications">
                        <h2>Notifications</h2>
                        <p>Vous n'avez aucune notification</p>
                    </div>
                </v-list>
            </v-menu>
            <button class="togglermodal"  @click="toglemodal">    </button>

            <v-menu transition="scale-transition" class="list">
                <template v-slot:activator="{ props }">
                    <button class="btn" v-bind="props">
                        Y
                    </button>
                </template>
                <v-list class="list">
                    <v-list-item class="list-item">
                        <v-list-item-title><router-link to="#"> <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                                Mon
                                profil</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item class="list-item">
                        <v-list-item-title><router-link to="#"> <font-awesome-icon class="icon"
                                    :icon="['fas', 'star']" />Abbonements</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item class="list-item">
                        <v-list-item-title><router-link to="#"> <font-awesome-icon class="icon" :icon="['fas', 'gear']" />

                                Préferences</router-link></v-list-item-title>
                    </v-list-item>
                    <hr>
                    <v-list-item class="list-item ">
                        <v-list-item-title><router-link class="disconect" to="#"> <font-awesome-icon class="icon"
                                    :icon="['fas', 'right-from-bracket']" />Se déconnecter</router-link></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>


<style scoped>
.notifications{
    padding: 10px;
    width: 100vw;
    max-width: 350px;
    min-height: 250px;
}
.notifications h2{
    font-weight: 600;
    color: rgb(0, 0, 0);
    font-size: 1.1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-left: 10px;
}
.notifications p{
    text-align: center;
    margin-top: 10px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.4);
}
.navbar {
    position: relative;
    display: flex;
    align-items: center;
    background-color: white;
    height: 60px;
    max-height: 60px;
    min-height: 60px;
    border-bottom: 1px solid #33333334;

}

a {
    text-decoration: none;
    color: black;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 10px 15px;
    transition: all 0.1s ease-in-out;

}

.icon {
    font-size: 1.1rem;
        color: black;
}

a:hover {
    border-left: 5px solid #1852b8;
    background-color: #1853b823;
}

hr {
    height: 0;
    border-top: 1px solid #3333332c;

}

.list-item {
    padding: 0 !important;

}

.list {
    padding: 0 !important;
}

.disconect {
    color: rgb(155, 13, 13);
}

.disconect:hover {
    border-left: 5px solid rgb(155, 13, 13);
    background-color: rgba(155, 13, 13, 0.192);
}

.disconect:hover {
    background-color: rgba(155, 13, 13, 0.144);
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: white;
    padding: 2px 15px;
    border-radius: 360px;
    background-color: rgb(14, 116, 60);

}


.navbar-items button {
    font-size: 1.5rem;
    
}
.navbar-items button > *{
    color: black;
}
.togglermodal{
    height: 25px;
    width: 25px;
    background-image: url('../../assets/images/megaphone.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.navbar-items {
        padding: 5px 20px;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
}
.hamburger{
    display: none;
        color: black;
}


@media(max-width:580px){
.navbar-items {

    justify-content: space-around;
}
.hamburger{
    display: block;
}
}

</style>