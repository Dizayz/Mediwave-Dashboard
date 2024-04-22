<script setup lang="ts">
import Collapse from '../../components/Dashboard/Collapse.vue'
import { ref } from 'vue'
import Modules from '../../components/Dashboard/Modules.vue'
const QstLimit = ref(0)
import { type Module } from '../../types';

const ToutLesmodules: Module[] = [
    {
        nomModule: 'module1',
        sousModules: [{
            nomModule: "sousmodule11"
        },
        {
            nomModule: "sousmodule12"
        }
            ,
        {
            nomModule: "sousmodule13"
        }]
    },
    {
        nomModule: 'module2',
        sousModules: [{
            nomModule: "sousmodule21"
        },
        {
            nomModule: "sousmodule22"
        }
            ,
        {
            nomModule: "sousmodule23"
        }]
    }, {
        nomModule: 'module3',
        sousModules: [{
            nomModule: "sousmodule31"
        },
        {
            nomModule: "sousmodule32"
        }
            ,
        {
            nomModule: "sousmodule33",
            sousModules: [{
                nomModule: "sousmodule331"
            },
            {
                nomModule: "sousmodule332"
            }
                ,
            {
                nomModule: "sousmodule333",
            }]
        }]
    }
];
const quizName = ref("Révision du (11/07/2023)")
const togleEditQuizName = ref(false)



const EditNameQuiz = () => {
    let quiz = document.querySelector('#quiz-nom') as HTMLInputElement;
    if (togleEditQuizName.value && quiz) {
        quiz.disabled = true; // Disable the input

        togleEditQuizName.value = !togleEditQuizName.value
    } else {
        if (quiz)
            quiz.disabled = false; // Enable the input
        quiz.select();
        togleEditQuizName.value = !togleEditQuizName.value
    }
};

</script>

<template>
    <div class="create-quiz-contenue">
        <div class="container">
            <div class="modules-container">
                <h2>Inclure les questions par:</h2>
                <Collapse>
                    <template v-slot:title>
                        <h1>Les Modules</h1>
                    </template>
                    <div class="input-container">
                        <font-awesome-icon class="usericon" :icon="['fas', 'magnifying-glass']" />
                        <input type="text" name="recherche" id="recherche" placeholder="Recherche">
                    </div>
                    <div class="conteneur-module">
                        <Modules :ToutLesmodules="ToutLesmodules"></Modules>
                    </div>

                </Collapse>
                <Collapse>
                    <template v-slot:title>
                        <h1>Sources & Annés</h1>
                    </template>
                    <div class="toute-les-sources">
                        <input type="checkbox" name="" id="src-year">
                        <label for="src-year">Toutes les sources</label>
                    </div>
                    <hr>
                    <div class="externat-residanat">
                        <div class="externat"> <input type="checkbox" name="" id="externat">
                            <label for="externat">Externat Alger</label>
                        </div>
                        <div class="residanat"> <input type="checkbox" name="" id="residanat">
                            <label for="residanat">Résidanat Alger</label>
                        </div>
                    </div>
                    <hr>
                    <div class="a-partir-annee">
                        <h3>Année :</h3>
                        <v-select label="Choisir Année"
                            :items="['Aucune', '2020', '2021', '2022', '2023', '2024']"></v-select>
                    </div>
                </Collapse>
            </div>
            <div class="filtre-container">
                <h2>Filtrer les questions par:</h2>
                <Collapse>
                    <template v-slot:title>
                        <h1>Type</h1>
                    </template>
                    <div class="externat-residanat">
                        <div class="externat"> <input type="checkbox" name="" id="qcm">
                            <label for="qcm">Questions à choix multiples</label>
                        </div>
                        <div class="residanat"> <input type="checkbox" name="" id="qcu">
                            <label for="qcu">Questions à choix unique</label>
                        </div>
                        <div class="externat"> <input type="checkbox" name="" id="ccqcm">
                            <label for="ccqcm">Cas Cliniques</label>
                        </div>
                    </div>
                </Collapse>

                <Collapse>
                    <template v-slot:title>
                        <h1>Difficulté</h1>
                    </template>
                    <div class="externat-residanat">
                        <div class="externat"> <input type="checkbox" name="" id="facile">
                            <label for="facile">Questions facilles</label>
                        </div>
                        <div class="residanat"> <input type="checkbox" name="" id="moyennes">
                            <label for="moyennes">Questions moyennes</label>
                        </div>
                        <div class="externat"> <input type="checkbox" name="" id="difficile">
                            <label for="difficile">Questions difficiles</label>
                        </div>
                    </div>
                </Collapse>
                <Collapse>
                    <template v-slot:title>
                        <h1>Préférences</h1>
                    </template>
                    <div class="Préférences">
                        <div> <input type="checkbox" name="" id="facile">
                            <label for="facile">Questions non consultées</label>
                        </div>
                        <div> <input type="checkbox" name="" id="moyennes">
                            <label for="moyennes">Questions déja fausses</label>
                        </div>
                        <div> <input type="checkbox" name="" id="difficile">
                            <label for="difficile">Questions avec explication</label>
                        </div>
                        <div> <input type="checkbox" name="" id="moyennes">
                            <label for="moyennes">Questions avec notes</label>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div class="name-quiz">
                <div>
                    <h4>Le nom du quiz:</h4>
                    <input v-on:keyup.enter="EditNameQuiz()" v-model="quizName" type="text" name="" id="quiz-nom"
                        disabled>
                </div>
                <button @click="EditNameQuiz()">
                    <font-awesome-icon v-if="!togleEditQuizName" :icon="['fas', 'pen-to-square']" />
                    <font-awesome-icon v-else :icon="['fas', 'xmark']" />
                </button>
            </div>
        </div>

        <div class="footer-bar">
            <div class="question">
                <h3 class="number-qst">0</h3>
                <h3>Questions</h3>
            </div>
            <div class="limit-question">
                <input type="number" name="" id="qstlimit" v-model="QstLimit" min="0">
                <label class="label-limit" for="qstlimit">Limite</label>
            </div>
            <button class="btn-create-quiz">Construire</button>
        </div>
    </div>
</template>

<style scoped>

.create-quiz-contenue {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.footer-bar {
    width: 100%;
    background-color: white;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px;
}

.modules-container,
.filtre-container {
    background-color: white;
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

h1 {
    font-size: 1.1rem;
    font-weight: 400;
}

h2 {
    font-size: 1.2rem;
    font-weight: 500;
     color: black;
}

.question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h3 {
    font-size: 0.9rem;
    line-height: 1.2;
    font-weight: 600;
     color: black;
}

.number-qst {
    color: #1852b8;
}

.btn-create-quiz {
    color: white;
    background-color: #04827c;
    padding: 10px 15px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s ease-in-out;
}

.btn-create-quiz:hover {
    background-color: #066e69;
}

.limit-question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.label-limit {
    text-align: center;
    font-size: 0.9rem;
    color: black;
}

input[type=number] {
    background-color: rgba(128, 128, 128, 0.096);
    text-align: center;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid black;
    transition: 0.3s all ease;
}

input[type=number]::-webkit-inner-spin-button {
    opacity: 1;

}

input[type=number]:focus {
    outline: none;
    border: 1px solid #1852b8;
}

.input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 10px;
    width: 100%;

}

input[type=text] {
    font-size: 1rem;
    border: 1px solid rgba(128, 128, 128, 0.568);
    border-radius: 10px;
    width: 100%;
    padding: 10px 10px 10px 35px;
    /* Adjust left padding to accommodate icon */
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-weight: 400;
}

.usericon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
}


input[type=text]:focus {
    outline: none;
    background-color: #1773eb10;
    border: 1px solid #1773ebd7;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
}

.conteneur-module {
    margin-top: 25px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}


/* Sources & année */
.toute-les-sources,
.externat,
.residanat,
.Préférences div {
    padding: 10px;
    display: flex;
    gap: 10px
}

.externat,
.residanat {
    flex: 1;
    transition: background-color 0.4s ease-in-out;
      white-space: nowrap;
}

.Préférences div {
    transition: background-color 0.4s ease-in-out;
    white-space: nowrap;
    flex: 1;
}

.externat:hover,
.residanat:hover,
.Préférences div:hover {
    background-color: #1853b846;

}

.externat-residanat {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.toute-les-sources label {
    width: fit-content;
}

label {
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    font-size: 1.1rem;
     white-space: nowrap;
      color: black;
}

hr {
    margin: 10px 0;
    border: none;
    height: 1px;
    background-color: rgba(128, 128, 128, 0.301);
}

.a-partir-annee h3 {
    margin: 20px 0;
    font-size: 1.1rem;
     color: black;
}

.v-select {
    max-width: 400px;
    color: black;
}

.Préférences {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
}

/* name quiz */
.name-quiz {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 15px 25px;
    border-radius: 15px;
    gap: 10px;
}

.name-quiz div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.name-quiz h4 {
    font-weight: 600;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.479);
    margin-right: 10px;
}


.name-quiz input {
    padding: 0;
    white-space: nowrap;
    border: 0px;
    font-weight: 600;
    border-radius: 0;
    display: inline;
}

.name-quiz input:focus {
    background-color: transparent;
    border: 0px;
    border-radius: 0;

}

.name-quiz button {
    background-color: #1853b8;
    border-radius: 360px;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    flex-shrink: 0;
}

.name-quiz button:hover {
    background-color: #0f3b88
}

/* responsivenes0 */
@media(max-width:500px){
.toute-les-sources,
.externat,
.residanat,
.Préférences div {
    padding: 0 10px ;

}
.a-partir-annee h3 {
    margin:15px 0;
    font-size: 1rem;
    padding: 0 10px;
     color: black;
}
}
@media(max-width:450px){


.Préférences ,.externat-residanat {
gap: 10px;
}
}

</style>