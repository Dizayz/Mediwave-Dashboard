<script setup lang="ts">

</script>

<template>
    <div class="padding">
        <div class="container">
            <h4>Mes Playlists</h4>
            <input type="text" name="" id="" placeholder="Rechercher un quiz">

            <div class="resultats">
                <p class="resultat"> 0 résultats</p>
                <div class="selecter">
                    <div class="dropdown">
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                        </select>
                    </div>
                    <p>Par page</p>
                </div>
                <p class="refresh"> <font-awesome-icon :icon="['fas', 'rotate-right']" /> Rafraîchir</p>
            </div>
            <h6>Vous n'avez pas de playlist</h6>
            <ul class="pagination">
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <!-- Add more list items as needed for more pages -->
            </ul>

        </div>
    </div>
</template>

<style scoped>
h6{
    font-size: 1.2rem;
    font-weight: 500;
    color:black;
    opacity: 0.5;
    margin: 15px auto;
    text-align: center;
}
.padding {
    padding: 25px;
}

.container {
    padding: 25px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

h4 {
    font-size: 1.2rem;
    font-weight: 600;
    border-bottom: 3px solid #1852b8;
    padding-bottom: 1px;
    width: fit-content;
     color: black;
}

input[type=text] {
    border: 1px solid rgba(128, 128, 128, 0.568);
    border-radius: 10px;
    padding: 10px;
    font-weight: 400;
    font-size: 1rem;
    height: fit-content;
    width: 100%;
    max-width: 500px;
    transition: 0.3s all ease-in-out;
}

input[type=text]:focus {
    outline: none;
    border: 1px solid #1852b8;
    background-color: rgba(23, 115, 235, 0.096)
}

.selecter {
    display: flex;
    gap: 10px;
}

.pagination {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
}

.pagination li {
    margin: 0 5px;
}

.pagination li a {
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
}

.pagination li a:hover {
    background-color: #f0f0f0;
}

.pagination li.active a {
    background-color: #007bff;
    color: #fff;
}

.dropdown {
    position: relative;
}

.dropdown:before {
    content: "";
    position: absolute;
    right: 10px;
    top: 8px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}

.dropdown:after {
    content: "";
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translate(0, -50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #333;
}

select {
    padding-right: 20px;
    padding-left: 10px;
    background-color: #f7f7fa;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
}

select:focus {
    outline: none;
}

.refresh:hover {
    text-decoration: underline;
    color: #1852b8;
    cursor: pointer;
}

.resultats {
    display: flex;
    gap: 15px;
flex-wrap: wrap;
}

.resultat {
    font-weight: 500;
     color: black;
}
</style>