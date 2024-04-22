<template>
    <div class="payement-mobile">
    <div class="container">
        <div class="payement">
            <div class="plan-payement">
                <div class="abonnement">               
                     <h3 class="header">01. Plan de paiement</h3>
                <div class="plans">
                    <input type="radio" name="plans" id="plan1">
                    <label class="plans-item" for="plan1">
                        <h3>4ème année médecine</h3>
                        <h6> Valable 365 jrs</h6>
                        <h5>1500.00 DA</h5>
                    </label>
                    <input type="radio" name="plans" id="plan2">
                    <label class="plans-item" for="plan2">
                        <h3>Résidanat Alger Fin 2024 (Flash)</h3>
                        <h6> Valable 3jusqu'au 01-11-2024</h6>
                        <h5>3900.00 DA</h5>
                    </label>
                </div>
                        <div class="info-abonement">
                            <h2>Ces plans ne vous conviennent pas?</h2>
        <hr>
        <h4>Vous pouvez <router-link to="#"> Changer</router-link> vos informations personelles pour voir les abonnements qui vous conviennent !</h4>
        <h2>Votre abonnement comprend</h2>
        <hr>
        <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. <font-awesome-icon :icon="['fas', 'check']" /></li>
            <li>Lorem ipsum dolor sit amet consectetur. <font-awesome-icon :icon="['fas', 'check']" /></li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <font-awesome-icon :icon="['fas', 'check']" /></li>
            <li>Lorem ipsum dolor sit. <font-awesome-icon :icon="['fas', 'check']" /> </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae. <font-awesome-icon :icon="['fas', 'check']" /></li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing. <font-awesome-icon :icon="['fas', 'check']" /></li>
            <li>Lorem ipsum dolor sit amet. <font-awesome-icon :icon="['fas', 'check']" /></li>
            <li>Lorem ipsum dolor sit amet consectetur. <font-awesome-icon :icon="['fas', 'check']" /></li>
        </ul>
                        </div></div>
                <div class="methode-payement">
                        <h3 class="methode-header-disabled">02. Méthode de paiement</h3>

                </div>
            </div>

            <div class="pannier">
                <h3 class="header">Votre plan</h3>
                <div class="plan-choisis">
                    <p>Choisissez un plan</p>
                </div>
                <hr>
                <div class="total">
                    <h4>Total</h4>
                    <h4><span>0.00</span> DA</h4>
                </div>
                <div class="button-wrapper">
                    <button disabled>Choisissez une méthode</button>
                </div>

            </div>

        </div>
        <div class="faq">
            <h3 class="header">FAQ</h3>
            <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="What is Mediwave?"
      ></v-expansion-panel>
    </v-expansion-panels></div>
    </div>
                <div class=" pannier-mobile">
                    <div class="pannier-mobile-wrapper">
                <div class="total">
                    <h4>Total</h4>
                    <h4><span>0.00</span> DA</h4>
                </div>
                
                <div class="button-wrapper">
                    <button disabled>Choisissez une méthode</button>
                </div>
                </div>
            </div>
            </div>
</template>

<style scoped>
.wrapper{
    overflow: none;
}

.faq{
    margin-top: 20px;
}
.container {
    padding: 25px;
    overflow-y: auto;
}

.payement {
    display: flex;
    gap: 25px;
    
}

.plan-payement {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:20px;
}
.abonnement, .methode-payement{
    background-color: white;
    border-radius: 15px;
}
.methode-header-disabled{
        padding: 20px;
        border-radius: 15px;
        cursor: not-allowed;
        font-weight: 600;
        opacity: 0.5;
         color: black;
}   

.plans {
    display: flex;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
}

.plans-item {
    position: relative;
    width: 230px;
    min-height: 200px;
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
}

input[type=radio] {
    display: none;
}

input[type=radio]:checked+label {
    background-color: #3264b931;
    border: 2px solid #1852b8;
}

.plans-item:hover {

    border: 2px solid #2765cf;
}

.plans-item h3 {
    font-weight: 500;
     color: black;
}

.plans-item h6 {
    font-size: 1rem;
     color: black;
}

.plans-item h5 {
    background-color: #04827c;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width: fit-content;
    margin: 0 auto;
    padding: 2px 12px;
    border-radius: 10px 0;
}

.pannier {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    gap: 15px;
    height: fit-content;
    position: sticky;
    top: 25px;
    width: 300px;
    flex-shrink: 0;
}

.header {
    padding: 10px 20px;
    background-color: #1852b8;
    color: white;
    font-weight: 600;
    border-radius: 15px 15px 0 0;
}

.plan-choisis p {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    padding: 0 20px;
}

.total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: nowrap;
    padding: 0 20px;
}

.total h4 {
    font-weight: 600;
    font-size: 1rem;
     color: black;
}

.total h4 span {
    font-weight: 400;
}

.button-wrapper {
    padding: 0 20px 20px 20px;

}

.button-wrapper button {
    background-color: #04827c;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 10px 25px;
    border-radius: 7px;
    width: 100%;
}

hr {
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.205);
    margin: 0 20px;
}

.button-wrapper button:disabled {
    opacity: 0.5;
    /* Set opacity to 50% when button is disabled */
}
.info-abonement{
    padding: 20px;
}
h2{
    font-size: 1.2rem;
    font-weight: 600;
     color: black;
}

.info-abonement hr{
margin: 10px 0;
}
h4{
    margin-bottom: 12px;
}
li{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
li , h4{
    list-style-type: none;
font-size: 1.1rem;
font-weight: 400;
color: #575757;
margin-left: 10px;
line-height: 1.6;
}
li :nth-child(1){
    color: #04827c;
}
.info-abonement a{
    text-decoration: none;
    font-weight: 600;
    color: #04827c;
}


.payement-mobile{
    display: flex;
    flex-direction: column;
}
.pannier-mobile  .total{
    padding: 20px;
}
.pannier-mobile{
position: sticky;
bottom: 0;
z-index: 100;
background-color: white;
display: none;
box-shadow: 0px -2px 14px -1px rgba(0,0,0,0.49);
-webkit-box-shadow: 0px -2px 14px -1px rgba(0,0,0,0.49);
-moz-box-shadow: 0px -2px 14px -1px rgba(0,0,0,0.49);
}
.pannier-mobile-wrapper{
    max-width: 600px;
    padding: 0 25px;
    margin: 0 auto;
}
/* responsivenes */
@media(max-width:962px){
    .plans {
    display: flex;
flex-direction: column;
}

.plans-item {
width: 100%;
min-height: 150px;
}
}
@media(max-width:820px){
    .pannier{
        display: none;
    }
    .pannier-mobile{
display: block;
}
}
</style>