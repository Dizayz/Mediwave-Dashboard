<script setup lang="ts">
import { useRouter } from 'vue-router';
import { watch, ref, onMounted } from "vue"
import { useMediwaveStore } from '../../stores/counter'
import { storeToRefs } from 'pinia';
const MyStore = useMediwaveStore()

const { Nav ,TogleMobileNav} = storeToRefs(MyStore)
const route = useRouter()
const routeName = ref('');
const ShowToolTip = ref(true)

onMounted(() => {
    window.onclick = (event) => {
    if (
        !(event.target as HTMLElement)?.closest('.hamburger')
    ) {
        TogleMobileNav.value = false;
    }
}
    const path = route.currentRoute.value.path;
    const parts = path.split('/');
    routeName.value = parts[parts.length - 1];
    var radioButtons = document.querySelectorAll('.nav');
    radioButtons.forEach((button) => {
        const inputButton = button as HTMLInputElement;
        if (inputButton.value === routeName.value.toString()) {
            // Set the checked attribute to true
            inputButton.checked = true;
        }
    });
})
watch(() => Nav.value, (newValue, oldValue) => {
    route.push(newValue)
})

</script>

<template>
            <transition name="overlayfade" mode="out-in">
                    <div class="overlay" v-if="TogleMobileNav"></div>
        </transition>
        <transition  name="slidenav" mode="out-in">
    <aside v-if="TogleMobileNav">
        <div class="logo" @click="Nav ='home'"><img src="../../assets/images/square-logo.png" alt="">
            <h1>MediWave</h1>
        </div>
        <div class="top-nav">
            <div class="nav-item">
                <h2>Statistiques</h2>


                <div class="nav-item-link">
                    <input v-model="Nav" class="nav" type="radio" name="link" id="dashboardhome" value="home">
                    <label for="dashboardhome"><svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                                    stroke="#000000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                                    stroke="#000000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                                    stroke="#000000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                                    stroke="#000000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg> <span>Tableau de bord</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Tableau de bord</v-tooltip>
                </div>
                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="analyse-module"
                        value="analyse-module">
                    <label for="analyse-module"><svg fill="#000000" width="30px" height="30px" viewBox="0 -8 72 72"
                            id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#000000"
                            stroke-width="0.00072">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>bar-chart</title>
                                <g id="Layer_5" data-name="Layer 5">
                                    <path
                                        d="M61,49.12c0,1-.27,1.88-1.57,1.88H13.35A2.36,2.36,0,0,1,11,48.65V5.22c0-1.3.85-1.57,1.88-1.57s1.88.27,1.88,1.57V44.89a2.36,2.36,0,0,0,2.35,2.35H59.43C60.73,47.24,61,48.08,61,49.12Z">
                                    </path>
                                </g>
                                <path
                                    d="M22.13,44h3.12a1.55,1.55,0,0,0,1.55-1.56V26.8a1.55,1.55,0,0,0-1.55-1.56H22.13a1.56,1.56,0,0,0-1.56,1.56V42.39A1.56,1.56,0,0,0,22.13,44Z">
                                </path>
                                <path
                                    d="M31.37,43.63h3.26A1.63,1.63,0,0,0,36.26,42V12.65A1.63,1.63,0,0,0,34.63,11H31.37a1.63,1.63,0,0,0-1.63,1.63V42A1.63,1.63,0,0,0,31.37,43.63Z">
                                </path>
                                <path
                                    d="M41.15,43.63h3.27A1.63,1.63,0,0,0,46.05,42V32.21a1.63,1.63,0,0,0-1.63-1.63H41.15a1.63,1.63,0,0,0-1.63,1.63V42A1.63,1.63,0,0,0,41.15,43.63Z">
                                </path>
                                <path
                                    d="M50.94,43.63H54.2A1.63,1.63,0,0,0,55.83,42V19.17a1.63,1.63,0,0,0-1.63-1.63H50.94a1.63,1.63,0,0,0-1.63,1.63V42A1.63,1.63,0,0,0,50.94,43.63Z">
                                </path>
                            </g>
                        </svg> <span>Analyses par modules</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Analyses par modules</v-tooltip>
                </div>
            </div>
            <div class="nav-item">
                <h2>Révision</h2>

                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="mes-quizz" value="mes-quizz">
                    <label for="mes-quizz"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                                    stroke="#000000" stroke-width="1.392" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                            </g>
                        </svg> <span>Mes quiz</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Mes quiz</v-tooltip>
                </div>
                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="create-quizz" value="create-quizz">
                    <label for="create-quizz"><svg width="30px" height="30px" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M8 28H24" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M8 37H24" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M8 19H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M8 10H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M30 33H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M35 28L35 38" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg> <span> Créer un quiz</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Créer un quiz</v-tooltip>
                </div>
                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="playlist" value="playlist">
                    <label for="playlist"><svg width="30px" height="30px" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M24 19H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M24 10H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M8 38H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M8 28H40" stroke="#000000" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M8 10L16 15L8 20V10Z" fill="" stroke="#000000" stroke-width="2.4"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg> <span>Mes playlists</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Mes playlists</v-tooltip>
                </div>
                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="videos" value="videos">
                    <label for="videos"><svg width="30px" height="30px" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"
                            stroke-width="0.00024000000000000003">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="none" d="m11 14 7-4-7-4z"></path>
                                <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path>
                                <path
                                    d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-9 12V6l7 4-7 4z">
                                </path>
                            </g>
                        </svg><span>Vidéos</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Vidéos</v-tooltip>
                </div>
            </div>
            <div class="nav-item">

                <h2>Examens</h2>

                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="exams" value="exams">
                    <label for="exams"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 64 64"
                            enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <polygon fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10"
                                    points="63,3 63,53 59,61 55,53 55,3 "></polygon>
                                <polyline fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10"
                                    points="55,7 51,7 51,17 "></polyline>
                                <polygon fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10"
                                    points="42,15 42,61 1,61 1,3 30,3 "></polygon>
                                <line fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10" x1="8"
                                    y1="13" x2="20" y2="13"></line>
                                <line fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10" x1="8"
                                    y1="23" x2="35" y2="23"></line>
                                <line fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10" x1="8"
                                    y1="31" x2="35" y2="31"></line>
                                <line fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10" x1="8"
                                    y1="39" x2="35" y2="39"></line>
                                <line fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10" x1="8"
                                    y1="47" x2="35" y2="47"></line>
                                <polyline fill="none" stroke="#000000" stroke-width="3.2" stroke-miterlimit="10"
                                    points="42,15 30,15 30,3 "></polyline>
                            </g>
                        </svg> <span>Séries d'examens</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Séries d'examens</v-tooltip>
                </div>
            </div>
            <div class="nav-item">

                <h2>Compte</h2>

                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="abonnement" value="abonnement">
                    <label for="abonnement"><svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M196.6 311.6h660v129.2l15.8 76.1-15.8 63.7v184.5h-660z" fill="#2F2F33"></path>
                                <path
                                    d="M860.7 444.5h-51.2v128.3h51.2v210.7c0 15.2-12.1 27.5-27.1 27.5h-637c-15 0-27.1-12.3-27.1-27.5V307c0-15.2 12.1-27.5 27.1-27.5h637c15 0 27.1 12.3 27.1 27.5v137.5z m-637-110V756h585.8V334.5H223.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M794.3 304.3l-49.1 13.3-30.6-116.1-430.9 131.2-17.1-49.3 457.2-137.1c14.4-4.3 29.4 4 33.7 18.6 0.1 0.2 0.1 0.5 0.2 0.7l36.6 138.7zM887.8 389.467c15 0 27.1 12.3 27.1 27.5v183.2c0 15.2-12.1 27.5-27.1 27.5H707.1c-64.9 0-117.5-53.3-117.5-119.1s52.6-119.1 117.5-119.1h180.7z m-40.7 55h-140c-34.9 0-63.2 28.7-63.2 64.1s28.3 64.1 63.2 64.1h140c7.5 0 13.6-6.2 13.6-13.7v-100.8c0-7.6-6.1-13.7-13.6-13.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M860.7 444.5h-51.2v128.3h51.2v210.7c0 15.2-12.1 27.5-27.1 27.5h-637c-15 0-27.1-12.3-27.1-27.5V307c0-15.2 12.1-27.5 27.1-27.5h637c15 0 27.1 12.3 27.1 27.5v137.5z m-637-110V756h585.8V334.5H223.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M794.3 304.3l-49.1 13.3-30.6-116.1-430.9 131.2-17.1-49.3 457.2-137.1c14.4-4.3 29.4 4 33.7 18.6 0.1 0.2 0.1 0.5 0.2 0.7l36.6 138.7zM887.8 389.467c15 0 27.1 12.3 27.1 27.5v183.2c0 15.2-12.1 27.5-27.1 27.5H707.1c-64.9 0-117.5-53.3-117.5-119.1s52.6-119.1 117.5-119.1h180.7z m-40.7 55h-140c-34.9 0-63.2 28.7-63.2 64.1s28.3 64.1 63.2 64.1h140c7.5 0 13.6-6.2 13.6-13.7v-100.8c0-7.6-6.1-13.7-13.6-13.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M860.7 444.5h-51.2v128.3h51.2v210.7c0 15.2-12.1 27.5-27.1 27.5h-637c-15 0-27.1-12.3-27.1-27.5V307c0-15.2 12.1-27.5 27.1-27.5h637c15 0 27.1 12.3 27.1 27.5v137.5z m-637-110V756h585.8V334.5H223.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M794.3 304.3l-49.1 13.3-30.6-116.1-430.9 131.2-17.1-49.3 457.2-137.1c14.4-4.3 29.4 4 33.7 18.6 0.1 0.2 0.1 0.5 0.2 0.7l36.6 138.7zM887.8 389.467c15 0 27.1 12.3 27.1 27.5v183.2c0 15.2-12.1 27.5-27.1 27.5H707.1c-64.9 0-117.5-53.3-117.5-119.1s52.6-119.1 117.5-119.1h180.7z m-40.7 55h-140c-34.9 0-63.2 28.7-63.2 64.1s28.3 64.1 63.2 64.1h140c7.5 0 13.6-6.2 13.6-13.7v-100.8c0-7.6-6.1-13.7-13.6-13.7z"
                                    fill="#2F2F33"></path>
                                <path d="M457.5 280.3l255.2-79.5 24.2 86.8z" fill="#2F2F33"></path>
                                <path d="M196.6 311.6h660v129.2l15.8 76.1-15.8 63.7v184.5h-660z" fill="#FFFFFF"></path>
                                <path
                                    d="M860.7 444.5h-51.2v128.3h51.2v210.7c0 15.2-12.1 27.5-27.1 27.5h-637c-15 0-27.1-12.3-27.1-27.5V307c0-15.2 12.1-27.5 27.1-27.5h637c15 0 27.1 12.3 27.1 27.5v137.5z m-637-110V756h585.8V334.5H223.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M794.3 304.3l-49.1 13.3-30.6-116.1-430.9 131.2-17.1-49.3 457.2-137.1c14.4-4.3 29.4 4 33.7 18.6 0.1 0.2 0.1 0.5 0.2 0.7l36.6 138.7zM887.8 389.467c15 0 27.1 12.3 27.1 27.5v183.2c0 15.2-12.1 27.5-27.1 27.5H707.1c-64.9 0-117.5-53.3-117.5-119.1s52.6-119.1 117.5-119.1h180.7z m-40.7 55h-140c-34.9 0-63.2 28.7-63.2 64.1s28.3 64.1 63.2 64.1h140c7.5 0 13.6-6.2 13.6-13.7v-100.8c0-7.6-6.1-13.7-13.6-13.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M860.7 444.5h-51.2v128.3h51.2v210.7c0 15.2-12.1 27.5-27.1 27.5h-637c-15 0-27.1-12.3-27.1-27.5V307c0-15.2 12.1-27.5 27.1-27.5h637c15 0 27.1 12.3 27.1 27.5v137.5z m-637-110V756h585.8V334.5H223.7z"
                                    fill="#2F2F33"></path>
                                <path
                                    d="M794.3 304.3l-49.1 13.3-30.6-116.1-430.9 131.2-17.1-49.3 457.2-137.1c14.4-4.3 29.4 4 33.7 18.6 0.1 0.2 0.1 0.5 0.2 0.7l36.6 138.7zM887.8 389.467c15 0 27.1 12.3 27.1 27.5v183.2c0 15.2-12.1 27.5-27.1 27.5H707.1c-64.9 0-117.5-53.3-117.5-119.1s52.6-119.1 117.5-119.1h180.7z m-40.7 55h-140c-34.9 0-63.2 28.7-63.2 64.1s28.3 64.1 63.2 64.1h140c7.5 0 13.6-6.2 13.6-13.7v-100.8c0-7.6-6.1-13.7-13.6-13.7z"
                                    fill="#2F2F33"></path>
                                <path d="M457.5 280.3l255.2-79.5 24.2 86.8z" fill="#1852b8"></path>
                                <path
                                    d="M847.4 445h-140c-34.9 0-63.2 28.7-63.2 64.1s28.3 64.1 63.2 64.1h140c7.5 0 13.6-6.2 13.6-13.7V458.7c-0.1-7.6-6.1-13.7-13.6-13.7z"
                                    fill="#FFFFFF"></path>
                                <path d="M686.4 506.5a27.1 27.5 0 1 0 54.2 0 27.1 27.5 0 1 0-54.2 0Z" fill="#2F2F33">
                                </path>
                            </g>
                        </svg> <span>Abonnements</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Abonnements</v-tooltip>
                </div>
                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="mes-abonnement"
                        value="mes-abonnement">
                    <label for="mes-abonnement"><svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M10.58 3.96997H6C4.93913 3.96997 3.92172 4.39146 3.17157 5.1416C2.42142 5.89175 2 6.9091 2 7.96997V17.97C2 19.0308 2.42142 20.0482 3.17157 20.7983C3.92172 21.5485 4.93913 21.97 6 21.97H18C19.0609 21.97 20.0783 21.5485 20.8284 20.7983C21.5786 20.0482 22 19.0308 22 17.97V13.8999"
                                    stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M10.58 9.96997H2" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M5 18.9199H11" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M14 6.73995L16.76 9.73995L22 4.44995" stroke="#000000" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg> <span>
                            Mes abonnements
                        </span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Mes abonnements</v-tooltip>
                </div>
                <div class="nav-item-link">
                    <input class="nav" v-model="Nav" type="radio" name="link" id="contact" value="contact">
                    <label for="contact"><svg fill="#000000" width="30px" height="30px" viewBox="0 0 64 64"
                            version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="_x32_5_attachment"></g>
                                <g id="_x32_4_office"></g>
                                <g id="_x32_3_pin"></g>
                                <g id="_x32_2_business_card"></g>
                                <g id="_x32_1_form"></g>
                                <g id="_x32_0_headset"></g>
                                <g id="_x31_9_video_call"></g>
                                <g id="_x31_8_letter_box"></g>
                                <g id="_x31_7_papperplane"></g>
                                <g id="_x31_6_laptop">
                                    <g>
                                        <path
                                            d="M62.6738,49.8809c-0.4111-0.584-1.1523-0.9614-1.8877-0.9614H60.061V17.2261c0-1.7427-1.4194-3.1606-3.1641-3.1606 H45.8047v-3.0996c0-2.084-1.6953-3.7798-3.7793-3.7798H20.855c-2.0859,0-3.7832,1.6958-3.7832,3.7798v3.0996H7.103 c-1.7446,0-3.1641,1.418-3.1641,3.1606v31.6934H3.2139c-0.7354,0-1.4766,0.3774-1.8877,0.9614 c-0.3306,0.4688-0.4141,1.0342-0.231,1.5464l1.248,3.5439c0.4312,1.2227,1.144,1.8428,2.1187,1.8428h55.0762 c0.9746,0,1.6875-0.6201,2.1187-1.8433l1.2461-3.5386C63.0879,50.915,63.0044,50.3496,62.6738,49.8809z M20.855,28.2139h2.8022 v4.3169c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-4.3169h4.7827v7.2412c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-7.2412h4.9175v4.3169 c0,0.5522,0.4478,1,1,1s1-0.4478,1-1v-4.3169h2.668c2.084,0,3.7793-1.6958,3.7793-3.7798v-3.7085h7.0503v23.6099h-41.71V20.7256 h5.9268v3.7085C17.0718,26.5181,18.769,28.2139,20.855,28.2139z M21.2932,26.2139l7.6743-7.317l1.8152,1.5826 c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6577-0.2466l2.1458-1.8724l7.9888,7.5863 c-0.0687,0.0081-0.136,0.0209-0.2068,0.0209H21.2932z M43.6921,10.3619c0.0689,0.1894,0.1126,0.391,0.1126,0.6039v13.4683 c0,0.1516-0.0248,0.2963-0.0606,0.4368l-7.9872-7.5848L43.6921,10.3619z M41.9973,9.186l-10.5578,9.2124L20.8729,9.186H41.9973z M19.0718,10.9658c0-0.2112,0.0435-0.4111,0.1114-0.5992l8.2706,7.2106l-8.1309,7.7523c-0.1555-0.2641-0.251-0.5676-0.251-0.8954 V10.9658z M5.939,17.2261c0-0.6401,0.522-1.1606,1.1641-1.1606h9.9688v2.6602H10.145c-0.5522,0-1,0.4478-1,1v25.6099 c0,0.5522,0.4478,1,1,1h43.71c0.5522,0,1-0.4478,1-1V19.7256c0-0.5522-0.4478-1-1-1h-8.0503v-2.6602H56.897 c0.6421,0,1.1641,0.5205,1.1641,1.1606v31.6934H41.3198c-0.2935,0-0.5718,0.145-0.7617,0.3687s-0.2715,0.5356-0.2241,0.8252 c0,0.2563-0.2163,0.4727-0.4727,0.4727H24.1387c-0.2563,0-0.4727-0.2163-0.4717-0.5044c0.0474-0.29-0.0347-0.5859-0.2246-0.8096 s-0.4688-0.3525-0.7622-0.3525H5.939V17.2261z M59.77,54.3062c-0.1406,0.4004-0.2412,0.5015-0.2349,0.5078H4.48 c-0.0361-0.0381-0.1279-0.1602-0.25-0.5073l-1.1768-3.3403c0.0508-0.0259,0.1118-0.0469,0.1606-0.0469h18.5869 c0.335,0.9688,1.2563,1.6665,2.3379,1.6665h15.7227c1.0815,0,2.0029-0.6978,2.3379-1.6665h18.5869 c0.0488,0,0.1099,0.021,0.1606,0.0469L59.77,54.3062z">
                                        </path>
                                    </g>
                                </g>
                                <g id="_x31_5_connection"></g>
                                <g id="_x31_4_phonebook"></g>
                                <g id="_x31_3_classic_telephone"></g>
                                <g id="_x31_2_sending_mail"></g>
                                <g id="_x31_1_man_talking"></g>
                                <g id="_x31_0_date"></g>
                                <g id="_x30_9_review"></g>
                                <g id="_x30_8_email"></g>
                                <g id="_x30_7_information"></g>
                                <g id="_x30_6_phone_talking"></g>
                                <g id="_x30_5_women_talking"></g>
                                <g id="_x30_4_calling"></g>
                                <g id="_x30_3_women"></g>
                                <g id="_x30_2_writing"></g>
                                <g id="_x30_1_chatting"></g>
                            </g>
                        </svg> <span>Contact</span></label>
                    <v-tooltip v-if="!ShowToolTip" activator="parent" location="start">Contact</v-tooltip>

                </div>
            </div>
        </div>
        <div class="close-nav">
            <p>Fermer</p>
            <button @click="TogleMobileNav= false"><svg fill="#ababab" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px"
                    height="30px" viewBox="0 0 436.949 436.95" xml:space="preserve" stroke="#ababab">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path
                                d="M189.567,315.883l66.277,53.502c12.633,10.231,29.215,10.7,37.037,1.052c7.773-9.658,3.814-25.752-8.816-36.003 l-27.598-22.271l144.461,0.105c11.934,0.01,21.639-9.677,21.678-21.621c0-11.943-9.707-21.668-21.641-21.649l-142.021-0.124 l25.168-20.282c12.68-10.184,16.629-26.297,8.893-35.964c-7.783-9.648-24.365-9.199-37.045,1.014l-66.325,53.387 c-2.41,1.922-4.427,4.035-6.177,6.283c-5.164,3.978-8.568,10.117-8.568,17.136c-0.01,5.346,1.979,10.155,5.192,13.951 C182.232,308.577,185.417,312.526,189.567,315.883z">
                            </path>
                            <path
                                d="M180.989,223.29l66.325-53.387c2.41-1.913,4.438-4.036,6.178-6.283c5.154-3.978,8.568-10.107,8.568-17.117 c0.02-5.365-1.998-10.175-5.211-13.961c-2.133-4.169-5.318-8.119-9.477-11.475l-66.259-53.502 c-12.632-10.223-29.223-10.71-37.036-1.052c-7.784,9.658-3.844,25.761,8.807,35.993l27.607,22.28L36.022,124.7 c-11.924-0.019-21.63,9.658-21.669,21.602c0,11.944,9.706,21.688,21.64,21.65l141.994,0.124l-25.149,20.282 c-12.689,10.193-16.629,26.297-8.884,35.964C151.728,233.961,168.31,233.502,180.989,223.29z">
                            </path>
                            <path
                                d="M422.605,91.126H298.752c-7.918,0-14.344,6.426-14.344,14.344c0,7.917,6.426,14.344,14.344,14.344h123.854 c7.918,0,14.344-6.426,14.344-14.344C436.949,97.552,430.523,91.126,422.605,91.126z">
                            </path>
                            <path
                                d="M422.605,155.778H298.752c-7.918,0-14.344,6.426-14.344,14.344s6.426,14.344,14.344,14.344h123.854 c7.918,0,14.344-6.426,14.344-14.344S430.523,155.778,422.605,155.778z">
                            </path>
                            <path
                                d="M14.344,244.872C6.426,244.872,0,251.297,0,259.215s6.426,14.344,14.344,14.344h123.854 c7.917,0,14.344-6.426,14.344-14.344s-6.426-14.344-14.344-14.344H14.344L14.344,244.872z">
                            </path>
                            <path
                                d="M152.55,323.858c0-7.918-6.426-14.344-14.344-14.344H14.344C6.426,309.514,0,315.94,0,323.858s6.426,14.344,14.344,14.344 h123.854C146.125,338.202,152.55,331.776,152.55,323.858z">
                            </path>
                        </g>
                    </g>
                </svg></button>
        </div>
    </aside>
    </transition>
</template>


<style scoped>
.overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.4);
}
.overlayfade-enter-active,
.overlayfade-leave-active {
    transition: 0.3s all ease;
}

.overlayfade-enter-from {
    opacity: 0;
}

.overlayfade-enter-to {
    opacity: 1;
}

.overlayfade-leave-from {
     opacity: 1;
}

.overlayfade-leave-to {
     opacity: 0;
}
aside {
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: none;
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    border-right: 1px solid #33333334;
    flex: 0 0 1;
    width: fit-content;
    position: absolute;
    z-index: 2000;
}

.close-nav {
    display: flex;
    align-items: center;
    margin-top: auto;
}

.logo {
    display: flex;
    background-color: #1852b8;
    align-items: center;
    padding: 10px;
    justify-content: center;
    cursor: pointer;

}

.logo img {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    transition: all 0.1s;
}

h1 {

    display: inline-block;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 1.4rem;
}

p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 1px solid rgba(128, 128, 128, 0.26);
    border-right: none;
    font-size: 1rem;
    color: rgb(107, 107, 107);
    flex-grow: 1;
}



button {
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.26);
    border-right: none;
    transition: 0.3s all ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
}

button:hover {
    background-color: rgba(128, 128, 128, 0.089);
}

.top-nav {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}


.nav-item {
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 10px;
    margin-top: 20px;
}

label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-left: 7px solid transparent;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    white-space: nowrap;

}

input[type=radio]:checked+label {
    border-left: 7px solid #1852b8;
    background-color: #1853b823;
    color: #1852b8;
}



input[type=radio] {
    display: none;
}

span {
    text-transform: capitalize;
    font-weight: 400;
}
/* ////////////// */
.slidenav-enter-active,
.slidenav-leave-active {
    transition: 0.5s all ease;
}

.slidenav-enter-from {
    transform: translateX(-100%);
    opacity: 1;
}

.slidenav-enter-to {
    transform: translateX(0%);
        opacity: 1;
}

.slidenav-leave-from {
    transform: translateX(0%);
        opacity: 1;
}

.slidenav-leave-to {
    transform: translateX(-100%);
        opacity: 1;
}
</style>
