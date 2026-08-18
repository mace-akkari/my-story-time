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
