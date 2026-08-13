async function fetchCategories() {
  const response = await fetch("/api/categories");

  const data = await response.json();

  return data.categories;
}

function createCategoryCard(category) {
  const article = document.createElement("article");
  article.classList.add("category_card");

  const icon = document.createElement("span");
  icon.classList.add("category_icon");
  icon.textContent = category.icon;

  const title = document.createElement("h2");
  title.classList.add("category_title");
  title.textContent = category.title;

  const description = document.createElement("p");
  description.classList.add("category_description");
  description.textContent = category.description;

  const button = document.createElement("a");
  button.classList.add("button", "button_primary");
  button.textContent = category.available ? "Choose Story" : "Coming Soon";
  button.href = category.href;

  article.append(icon, title, description, button);

  return article;
}

function renderCategories(categories) {
  const categoryCards = document.querySelector(".category_cards");

  categories.forEach((category) => {
    const card = createCategoryCard(category);

    categoryCards.appendChild(card);
  });
}

async function initialisePage() {
  const categories = await fetchCategories();

  renderCategories(categories);
}

initialisePage();
