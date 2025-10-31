function loginUser() {
  alert("Login realizado com sucesso!");
  window.location.href = "dashboard.html";
  return false;
}

function loginGoogle() {
  alert("Login com Google ainda não implementado.");
}

function loginFacebook() {
  alert("Login com Facebook ainda não implementado.");
}

const meals = [
  { name: "Salada Colorida", category: "Vegan", image: "assets/meal1.jpg", rating: 4 },
  { name: "Frango Low Carb", category: "Low Carb", image: "assets/meal2.jpg", rating: 5 },
  { name: "Risoto Sem Lactose", category: "Sem Lactose", image: "assets/meal3.jpg", rating: 3 }
];

function renderMeals(filter = "") {
  const container = document.getElementById("meals-container");
  container.innerHTML = "";
  meals
    .filter(meal => meal.name.toLowerCase().includes(filter.toLowerCase()) || meal.category === filter)
    .forEach(meal => {
      const card = document.createElement("div");
      card.className = "meal-card";
      card.innerHTML = `
        <img src="${meal.image}" alt="${meal.name}">
        <div class="info">
          <h3>${meal.name}</h3>
          <p>${"⭐".repeat(meal.rating)}${"☆".repeat(5 - meal.rating)}</p>
          <button class="favorite">❤️</button>
        </div>
      `;
      container.appendChild(card);
    });
}

function filterMeals(value) {
  renderMeals(value);
}

function filterCategory(category) {
  renderMeals(category);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("meals-container")) {
    renderMeals();
  }
});
