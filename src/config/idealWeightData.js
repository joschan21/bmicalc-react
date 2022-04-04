// These are the questions that will be displayed inside the homepage modal.
import { cmRegex, ftRegex} from "./regex"

export const idealWeightQuestions = [
  {
    id: '5fad31',
    inputName: 'gender',
    heading: 'Step 1: Select your gender.',
    status: 'upcoming',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    questionType: 'select',
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
    questionType: 'input',
  },
]

export const headerData = {
  title: 'Ideal Weight',
  description:
    'Knowing your ideal weight can help improve your life by knowing which daily calorie intake to aim for.',
}
