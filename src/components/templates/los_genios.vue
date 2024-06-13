<template>
  <div class="product-detail">
    <header>
      <h1>Los genios</h1>
    </header>
    <div class="product-content">
      <div class="product-image-gallery">
        <img src="src/img/los_genios.jpg" alt="Los genios" />
        <div class="image-navigation">
          <button @click="scrollTo('start')">Saltar al comienzo</button>
          <button @click="scrollTo('end')">Saltar al final</button>
        </div>
      </div>
      <div class="product-info">
        <h2>Bayly, Jaime</h2>
        <p class="price">
          S/ 51.35 <span class="original-price">S/ 79.00</span>
        </p>
        <p>1</p>
        <button class="add-to-cart">AÑADIR AL CARRITO</button>
        <button class="add-to-wishlist">Añadir a la Lista de Deseos</button>
        <button class="add-comment">Añadir comentario</button>
        <button class="share">Compartir</button>
      </div>
    </div>
    <div class="tabs">
      <button
        @click="activeTab = 'info'"
        :class="{ active: activeTab === 'info' }"
      >
        Más Información
      </button>
      <button
        @click="activeTab = 'comments'"
        :class="{ active: activeTab === 'comments' }"
      >
        Comentarios
      </button>
    </div>
    <section v-if="activeTab === 'info'" class="additional-info">
      <h3>MÁS INFORMACIÓN</h3>
      <div class="info-container">
        <div class="synopsis">
          <p><strong>Sinopsis:</strong></p>
          <p>
            “Los genios” recrea los años gloriosos en que Mario Vargas Llosa y
            Gabriel García Márquez fueron amigos y luego enemigos. La novela más
            ambiciosa de la carrera del escritor y periodista Jaime Bayly, que
            llega bajo el sello editorial Revuelta Editores, y distribuido en
            Perú por Distribuidora de libros Heraldos Negros, es una novela
            escrita desde la admiración del autor a ambos genios.
          </p>
        </div>
        <div class="product-details">
          <h4>Detalles de producto</h4>
          <ul>
            <li><strong>Peso:</strong> 0.300000</li>
            <li><strong>Nombre del autor:</strong> Bayly, Jaime</li>
            <li><strong>Editorial:</strong> REVUELTA EDITORES</li>
            <li><strong>Alto:</strong> 21</li>
            <li><strong>Ancho:</strong> 14</li>
            <li><strong>Año de edición:</strong> 2023</li>
            <li><strong>Formato:</strong> Rústica</li>
            <li><strong>Número de Páginas:</strong> 240</li>
            <li><strong>ISBN:</strong> 9786125044273</li>
            <li><strong>Idioma:</strong> Español</li>
          </ul>
        </div>
      </div>
    </section>
    <section v-if="activeTab === 'comments'" class="comments">
      <h3>Comentarios</h3>
      <form @submit.prevent="submitComment">
        <div class="input-field">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="comment.name" required />
        </div>
        <div class="input-field">
          <label for="title">Título:</label>
          <input type="text" id="title" v-model="comment.title" required />
        </div>
        <div class="input-field">
          <label>Puntúalo:</label>
          <div class="stars">
            <i
              v-for="(star, index) in 5"
              :key="index"
              class="fa-solid fa-star"
              :class="{ active: index < comment.rating }"
              @click="setRating(index + 1)"
            ></i>
          </div>
        </div>
        <div class="input-field">
          <label for="opinion">Opinión:</label>
          <textarea id="opinion" v-model="comment.opinion" required></textarea>
        </div>
        <button type="submit" class="submit-comment">Enviar</button>
      </form>
    </section>
    <footer>
      <p>© 2024 Tu Librería Favorita - Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      activeTab: "info",
      comment: {
        name: "",
        title: "",
        rating: 0,
        opinion: "",
      },
    };
  },
  methods: {
    scrollTo(position) {
      const element = document.querySelector(".product-image-gallery");
      if (position === "start") {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
    setRating(rating) {
      this.comment.rating = rating;
    },
    submitComment() {
      console.log(`Nombre: ${this.comment.name}`);
      console.log(`Título: ${this.comment.title}`);
      console.log(`Puntuación: ${this.comment.rating}`);
      console.log(`Opinión: ${this.comment.opinion}`);
      alert("Comentario enviado");
      this.comment.name = "";
      this.comment.title = "";
      this.comment.rating = 0;
      this.comment.opinion = "";
    },
  },
};
</script>

<style scoped>
.product-detail {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #ffbe2d;
  color: white;
  padding: 10px;
  text-align: center;
}

.product-content {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.product-image-gallery {
  text-align: center;
}

.product-image-gallery img {
  width: 200px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.image-navigation button {
  display: block;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: #ffbe2d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-info {
  max-width: 300px;
}

.product-info h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.price {
  font-size: 1.2em;
  color: #d9534f;
}

.original-price {
  text-decoration: line-through;
  color: #777;
}

.add-to-cart,
.add-to-wishlist,
.add-comment,
.share {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: #5bc0de;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.tabs {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.tabs button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
}

.tabs button.active {
  background-color: #ffbe2d;
  color: white;
}

.additional-info,
.comments {
  margin-top: 20px;
}

.additional-info h3,
.additional-info h4,
.comments h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.info-container {
  display: flex;
  justify-content: space-between;
}

.synopsis,
.product-details {
  width: 48%;
}

.additional-info ul {
  list-style-type: none;
  padding: 0;
}

.additional-info ul li {
  margin: 5px 0;
}

.comments form {
  display: flex;
  flex-direction: column;
}

.input-field {
  margin-bottom: 10px;
}

.input-field label {
  display: block;
  margin-bottom: 5px;
}

.input-field input,
.input-field textarea,
.input-field select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.stars {
  display: flex;
  gap: 5px;
}

.stars i {
  color: #e6e6e6;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.stars i.active {
  color: #ff9c1a;
}

.submit-comment {
  background-color: #5bc0de;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}

footer {
  background-color: #ffbe2d;
  color: #333;
  padding: 10px;
  text-align: center;
  margin-top: auto;
}
</style>
