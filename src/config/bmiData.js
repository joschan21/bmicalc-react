// These are the questions that will be displayed inside the homepage modal.
import { kgRegex, lbsRegex, cmRegex, ftRegex, ageRegex } from "./regex"

export const bmiQuestions = [
  {
    id: '5fda1',
    inputName: 'weight',
    heading: 'Step 1: Enter your weight.',
    regex: [kgRegex, lbsRegex],
    options: [
      { label: 'KG', placeholder: '80' },
      { label: 'LBS', placeholder: '170' },
    ],
    status: 'upcoming',
    emoji: '👀',
    questionType: "input"
  },
  {
    id: '5fda2',
    inputName: 'height',
    heading: 'Step 2: Enter your height.',
    regex: [cmRegex, ftRegex],
    options: [
      { label: 'CM', placeholder: '175' },
      { label: 'FT', placeholder: "5'11" },
    ],
    status: 'upcoming',
    emoji: '📏',
    questionType: "input"
  },
  {
    id: '5fda3',
    inputName: 'age',
    heading: 'Step 3: Enter your age.',
    regex: [ageRegex],
    options: [{ placeholder: '24' }],
    status: 'upcoming',
    emoji: '🎂',
    questionType: "input"
  },
]

export const headerData = {
    title: "Body Mass Index",
    description: "After all, it's the most common formula to determine your weight. The BMI is calculated using the relation of your weight and your height in square meters."
}