async function fetchStory() {
  const response = await fetch("/api/stories/football");
  const data = await response.json();

  return data.story;
}

function createFormField(field) {
  const formGroup = document.createElement("div");
  formGroup.classList.add("form_group");

  const label = document.createElement("label");
  label.classList.add("form_label");
  label.textContent = field.label;
  label.setAttribute("for", field.id);

  let input;

  if (field.type === "select") {
    input = document.createElement("select");
    input.classList.add("form_select");

    field.options.forEach((option) => {
      const optionElement = document.createElement("option");

      optionElement.value = option;
      optionElement.textContent = option;

      input.appendChild(optionElement);
    });
  } else {
    input = document.createElement("input");
    input.classList.add("form_input");

    input.type = field.type;
    input.placeholder = field.placeholder || "";
  }

  input.id = field.id;
  input.name = field.id;
  input.required = field.required;

  formGroup.append(label, input);

  return formGroup;
}

function renderForm(fields) {
  const form = document.querySelector(".story_form");
  const submitButton = form.querySelector("button");

  fields.forEach((field) => {
    const formField = createFormField(field);

    form.insertBefore(formField, submitButton);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const answers = Object.fromEntries(formData.entries());

  localStorage.setItem("storyAnswers", JSON.stringify(answers));
  window.location.href = "/football-story.html";
}

async function initialisePage() {
  const story = await fetchStory();

  renderForm(story.fields);

  const form = document.querySelector(".story_form");
  form.addEventListener("submit", handleFormSubmit);
}

initialisePage();
