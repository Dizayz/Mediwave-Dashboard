<script setup lang="ts">
import Video from "../../components/Dashboard/Video.vue"

</script>

<template>
    <div class="container">
            <div class="module-container">
      <h4>Bibliothèque vidéos</h4>
      <div class="searchbar">
        <div class="input-container">
          <font-awesome-icon class="usericon" :icon="['fas', 'magnifying-glass']" />
          <input type="text" name="recherche" id="recherche" placeholder="Recherche une vidéo">
        </div>
        <button class="filter"><font-awesome-icon class="filter-icon" :icon="['fas', 'filter']" /> <span>Filter Par
            module</span> </button>
      </div>
                  <div class="resultats">
                <p class="resultat"> 1-5 sur 59</p>
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
            <div class="filtre-categorie">
                <input type="radio" name="categorie-filtre" id="recent" checked>
                 <label for="recent">Plus récentes</label>
                <input type="radio" name="categorie-filtre" id="populaire">       
                <label for="populaire">Plus populaires</label>
                <input type="radio" name="categorie-filtre" id="ancien">
                <label for="ancien">Plus anciennes</label>
            </div>
      <div class="container-videos">
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
      </div>
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
.container{
    padding: 25px;
 
}
h4 {
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 3px solid #1852b8;
  padding-bottom: 1px;

}
.module-container {
  width: 100%;
  max-width: 1400px;
  margin:0 auto;
  grid-column: span 2;
  background-color: white;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
     height: 100%;
}

.searchbar {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 10px;
  width: 100%;
  /* Set initial width to 100% */
  max-width: 400px;
  /* Set maximum width to 450px */
  margin: auto 0;
}

input {
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

input:focus {
  outline: none;
}

input:focus {
  background-color: #1773eb10;
  border: 1px solid #1773ebd7;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.filter {
  display: flex;
  gap: 5px;
  background-color: #1852b8;
  transition: all 0.2s ease-in-out;
  color: white;
  font-size: 1rem;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
 
}

.filter * {
  font-weight: 600;
}

.filter-icon {
  font-size: 1.2rem;
}

.filter:hover {
  background-color: #103b86;
}

/* ///////////////////// */

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
}
/* ///////////// */
/* PAGINATION */
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
/* /// */
.filtre-categorie{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    
}
.filtre-categorie label{
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 3px 10px;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
      white-space: nowrap;
}
.filtre-categorie input[type=radio]{
display: none;
 
}
.filtre-categorie input[type=radio]:checked+label{
background-color: #1852b8;
color: white;
}

/* ////////////// */
/* Videos styling */
.container-videos{
  display: flex;
  flex-direction: column;
  gap:1rem;
}
</style>