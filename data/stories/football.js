export const footballFields = [
  {
    id: "name",
    label: "What's your name?",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    id: "age",
    label: "How old are you?",
    type: "number",
    placeholder: "Enter your age",
    required: true,
  },
  {
    id: "team",
    label: "What's your favourite football team?",
    type: "text",
    placeholder: "Enter your favourite team",
    required: true,
  },
  {
    id: "position",
    label: "Which position do you play?",
    type: "select",
    required: true,
    options: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
  },
];

export const footballStory = [
  {
    page: 1,
    text: `{{name}} stepped onto the pitch for {{team}}. The stadium roared as the crowd welcomed their {{position}}.`,
  },
  {
    page: 2,
    text: `This was the biggest match of {{name}}'s life. Every training session had led to this moment.`,
  },
  {
    page: 3,
    text: `The referee blew the whistle and the match began. {{name}} knew there would only be one chance to become the hero.`,
  },
  {
    page: 4,
    text: `The final minutes arrived with the score level. The ball fell perfectly at {{name}}'s feet.`,
  },
  {
    page: 5,
    text: `And that was the day {{name}} became a legend.`,
    final: true,
  },
];
