async function fetchStory() {
  const response = await fetch("/api/stories/football");
  const data = await response.json();

  return data.story;
}

function generateStory(pages, answers) {
  return pages.map((page) => {
    let generatedText = page.text;

    Object.entries(answers).forEach(([key, value]) => {
      const placeholder = `{{${key}}}`;

      generatedText = generatedText.replaceAll(placeholder, value);
    });

    return {
      ...page,
      text: generatedText,
    };
  });
}

async function initialisePage() {
  const savedAnswers = localStorage.getItem("storyAnswers");
  const answers = JSON.parse(savedAnswers);

  const story = await fetchStory();

  const storyContent = document.querySelector(".story_content");
  storyContent.textContent = generateStory(story.template, answers);

  const generatedPages = generateStory(story.template, answers);

  console.log(generatedPages);
}

initialisePage();
