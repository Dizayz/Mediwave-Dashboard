


<template>
    <div class="video-container">
        <div class="cover-img">
            <img src="/src/assets/images/VideoCover.jpg" alt="">
        </div>
        <div class="informations-video">
            <div class="information-top">
                <h1 class="title-video"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <h5><span>Auteur:</span> Lorem, ipsum dolor.</h5>
                <p class="detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, voluptate! Quos, eaque!</p>
            </div>
            <div class="information-bottom">
                <div class="hashtags">
                    <p>#medecine</p>
                    <p>#operation</p>
                    <p>#cours</p>
                </div>
                <h6>2.2k vues • il y a 1 an</h6>
            </div>
        </div>
    </div>
</template>

<style scoped>
.video-container{
    display: flex;
    gap: 1rem;
}
.cover-img{
    flex: 2;
    display: flex;
    align-items: center;
    background-color: black;
}
.cover-img img{
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
}
.informations-video{
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}
.information-top h5{
    font-size: 0.9rem;
        color: black;
}
.information-top h1{
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
        color: black;
}
.information-top h5 span{
    font-weight: 600;
        color: black;
}
.detail{
    margin-top: 0.5rem;
    font-size: 0.8rem;
        color: black;
}

h6{
    font-size: 0.6rem;
        color: black;
}
p{
     font-size: 0.8rem;
         color: black;
}
.hashtags{
    display: flex;
    gap: 5px;

} .hashtags p {
        color: #1852b8;
}
/* responsive */
@media(max-width:900px){
    .video-container{
flex-direction: column;
}

}
</style>