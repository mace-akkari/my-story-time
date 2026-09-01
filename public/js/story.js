const savedAnswers = localStorage.getItem("storyAnswers");
const answers = JSON.parse(savedAnswers);

const storyContent = document.querySelector(".story_content");

storyContent.textContent = `${answers.name} stepped onto the pitch for ${answers.team}, playing as a ${answers.position}.`;
