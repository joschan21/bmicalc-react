// These are the questions that will be displayed inside the homepage modal.
import { kgRegex, lbsRegex, cmRegex, ftRegex, ageRegex } from "./regex"

export const dailyCalorieQuestions = [
  {
    id: '5fda1',
    inputName: 'weight',
    heading: 'Step 1: Enter your weight.',
    regex: [kgRegex, lbsRegex],
    options: [
      { label: 'KG', placeholder: '80' },
      { label: 'LBS', placeholder: '170' },
    ],
    status: 'current',
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
  {
    id: '5fad31',
    inputName: 'gender',
    heading: 'Step 4: Select your gender.',
    status: 'upcoming',
    options: [
      {value: 'male', label: "Male"},
      {value: 'female', label: "Female"},
    ],
    questionType: "select"
  },
  {
    id: '5fad31',
    inputName: 'activity',
    heading: 'Step 5: Select your activity level.',
    status: 'upcoming',
    options: [
      {value: 'level_1', label: 'Sedentary: little or no exercise'},
      {value: 'level_2', label: 'Exercise 1-3 times/week'},
      {value: 'level_3', label: 'Exercise 4-5 times/week'},
      {value: 'level_4', label: 'Daily exercise or intense exercise 3-4 times/week'},
      {value: 'level_5', label: 'Intense exercise 6-7 times/week'},
      {value: 'level_6', label: 'Very intense exercise daily, or physical job'},
    ],
    questionType: "select"
  },
]

export const headerData = {
  title: 'Daily Calorie Intake',
  description:
    'Knowing your daily calorie recommendation can help improve your life by making it easier to maintain a healthy weight. ',
}
