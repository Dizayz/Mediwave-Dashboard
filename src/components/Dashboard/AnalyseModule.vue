


<template>
    <div class="analyse-module">
        <div class="analyse-module-wrapper">
                    <div class="head">
                    <div class="percentage-circle">
            <h5>32%</h5>
        </div>
        <div class="head-infos">
            <h3>Embryologie</h3>
            <p> 2 sur 854</p>
        </div>
        </div>
        <div class="arrow-open">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
        </div>
                <div class="progres-bar-container">
            <div class="progres-bar"></div>
        </div>
    </div>
</template>

<style scoped>

.analyse-module{
    display: flex;
    flex-direction: column;
    gap: 10px;
    border:1px solid #a6a6a6;
    border-radius: 15px;
    background-color: rgba(187, 187, 187, 0.103);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 15px;
}
.analyse-module:hover{
    background-color: #1773eb10;
    border: 1px solid #1773ebd7;
}
.analyse-module-wrapper{
    display: flex;
    gap: 20px;
        align-items: center;
    justify-content: space-between;
}
.head{
    display: flex;
    gap: 1.5rem;
    align-items: center;
    height: 100%;
}

.percentage-circle{
    background-color: #cf4e66;
height: 45px;
width: 45px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 360px;
color: white;
font-weight: 500;
flex-shrink: 0;
}
.head-infos{
display: flex;
flex-direction: column;


}
h3 {
    font-weight: 600;
    overflow-wrap: break-word;
     text-overflow: ellipsis; /* Display an ellipsis (...) to indicate text overflow */
   }
p{
    color: gray;
    font-weight: 400;
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
    background-color: #cf4e66;
        border-radius: 10px;
}
.arrow-open{
    background-color: #1773eb4b ;
    padding: 7px 14px;
    border-radius: 360px;
}
</style>