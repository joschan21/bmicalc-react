import { convertLbsToKg, convertFtToCm } from '../utils/converters'
import { setCalories } from '../redux/dailyCalorieSlice'
import store from "../redux/store"
import axios from 'axios'
import { throwErr } from '../redux/errorSlice'

const dailyCalorieRequest = (questionData) => {

  function findIndexOf(string) {
    return questionData.findIndex((question) => question.inputName === string)
  }

  function getValue(string) {
      return questionData[findIndexOf(string)].value
  }

  let weight = getValue('weight')
  let height = getValue('height')
  let age = getValue('age')
  let activitylevel = getValue('activity')
  let gender = getValue('gender')

  // if user chose to enter lbs, convert to kg
  if (questionData[0].option === 1) weight = convertLbsToKg(weight)

  // if user chose to enter ft & inches, convert to cm
  if (questionData[1].option === 1) height = convertFtToCm(height)

  const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
    params: { age, gender, weight, height, activitylevel },
    headers: {
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
  }

  const makeCall = async () => {
    try {
      const response = await axios.request(options)
      const { BMR: bmr, goals } = response.data.data
      store.dispatch(setCalories({ bmr, goals }))
    } catch (err) {
      store.dispatch(throwErr())
    }
  }

  makeCall()
}

export default dailyCalorieRequest
