<template>
  <div>
    <header>
      <h1>Productos en Venta</h1>
      <div class="search-bar">
        <input type="text" placeholder="" />
        <button>Buscar</button>
      </div>
    </header>
    <main class="product-container">
      <router-link to="/deathnote" class="product-card">
        <img
          src="src/img/deathnote.jpg"
          alt="Death Note"
          class="product-image"
        />
        <h2 class="product-name">Death Note</h2>
        <p class="product-price">S/ 25.00</p>
      </router-link>
      <router-link to="/dragonball" class="product-card">
        <img
          src="src/img/dragonball.JPG"
          alt="Dragon Ball Super"
          class="product-image"
        />
        <h2 class="product-name">Dragon Ball Super</h2>
        <p class="product-price">S/ 25.00</p>
      </router-link>
      <router-link to="/chainsawman" class="product-card">
        <img
          src="src/img/chainsawman.JPG"
          alt="Chainsaw Man"
          class="product-image"
        />
        <h2 class="product-name">Chainsaw Man</h2>
        <p class="product-price">S/ 25.00</p>
      </router-link>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: url("src/img/tiendafondo.jpg") !important;
}

header {
  background-color: #0e0f0ef6;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.search-bar input {
  padding: 0.2rem;
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.search-bar button {
  padding: 0.2rem 1rem;
  background-color: #dfdfdf9c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
}

.product-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 250px;
  height: 460px;
  text-align: center;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 70%;
  display: block;
  object-fit: cover;
}

.product-name {
  font-size: 1.2em;
  margin: 0.5rem 0;
}

.product-price {
  color: #000000;
  font-size: 1em;
  margin-bottom: 1rem;
}
</style>
