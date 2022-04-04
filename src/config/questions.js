// These are the questions that will be displayed inside the homepage modal.

// weight regex
const kgRegex = new RegExp(/^[4-9][0-9]$|^1[0-5][0-9]$|^160$/)
const lbsRegex = new RegExp(/^[9][0-9]$|^[1-2][0-9][0-9]$|^3[0-4][0-9]$|^350$/)

// height regex
const cmRegex = new RegExp(/^(?:1[3-9][0-9]|2[0-2][0-9])$/)
const ftRegex = new RegExp(
  /^[4]\'[3-9]$|^[4]'[1][0-2]$|^[5-6]'?[0-9]?$|^[5-6]'[1][0-2]$|^7'?[0-5]?$/
) // von 4'3 (inkl.) bis 7'5 (inkl.)

const ageRegex = new RegExp(/^[0-7]?[0-9]$|^80$/)

export const questions = [
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
  },
  {
    id: '5fda3',
    inputName: 'age',
    heading: 'Step 3: Enter your age.',
    regex: [ageRegex],
    options: [{ placeholder: '24' }],
    status: 'upcoming',
    emoji: '🎂',
  },
]
