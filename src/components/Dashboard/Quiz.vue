
<template>
    <div class="quiz">
        <div class="head">
                    <div class="percentage-circle">
            <h5>32%</h5>
        </div>
        </div>
        <div class="title-progres-bar">
            <h4 class="title inset-color">Bioch + Cardio + Introduction a l'anatomopathologique + 2 (16/03/2024 14:55)</h4>
                    <div class="progres-bar-container">
            <div class="progres-bar"></div>
        </div>
        </div>

        <div class="icons">
            <div class="icon icon-play" style="background-color: #04827c;"><font-awesome-icon :icon="['fas', 'play']" />
                  <v-tooltip
        activator="parent"
        location="top"
      >Démarrer</v-tooltip></div>
            <div class="icon" style="background-color: #f78000;"><font-awesome-icon :icon="['fas', 'chart-simple']" />
                  <v-tooltip
        activator="parent"
        location="top"
      >Analyse</v-tooltip></div>
            <div class="icon" style="background-color: #1852b8;"><font-awesome-icon :icon="['fas', 'pen-to-square']" />
                  <v-tooltip
        activator="parent"
        location="top"
      >Modifier</v-tooltip></div>
            <div class="icon" style="background-color: #d93d3d;"><font-awesome-icon :icon="['fas', 'trash-can']" />
                  <v-tooltip
        activator="parent"
        location="top"
      >Supprimer</v-tooltip></div>
        </div>
    </div>
</template>

<style scoped>
.quiz{
    position: relative;
    display: flex;
    gap: 20px;
    border:1px solid #a6a6a6;
    border-radius: 15px;
    background-color: rgba(187, 187, 187, 0.103);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
padding: 20px 20px 20px 45px;
 word-wrap: break-word;
}
.quiz:hover{
    background-color: #1773eb10;
    border: 1px solid #1773ebd7;
}
.head{
    position: absolute;
    left: -25px;
}
.percentage-circle{
background-color: #04827c;
height: 45px;
width: 45px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 360px;
color: white;
font-weight: 500;
}
.title-progres-bar{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}
.title{
    font-weight: 600;
    font-size: 1.1rem;
}
.progres-bar-container{
    width: 100%;
    background-color: #a6a6a6;
    height: 20px;
    border-radius: 10px;
}
.progres-bar{
    width: 32%;
    height: 100%;
    background-color: #04827c;
        border-radius: 10px;
}
.icons{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
}
.icon{
    color: white;
    padding:10px;
    border-radius: 360px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* responsive */

@media(max-width:650px){
.icons{
    display: flex;
    justify-content: center;
    align-items: center;
}
 .quiz{
flex-direction: column;
padding: 40px 20px 30px 20px;
text-align: center;

}
.icon{
    padding: 10px 11px;
}
.head{
    top: 0;
   left: 50%;
      transform: translate(-50%,-50%);
}
}
</style>