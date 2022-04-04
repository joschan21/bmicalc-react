import { convertLbsToKg, convertFtToCm } from '../utils/converters'
import { setBmi } from '../redux/bmiSlice'
import { throwErr } from '../redux/errorSlice'
import store from '../redux/store'
import axios from 'axios'

const bmiRequest = (questionData) => {
  function findIndexOf(string) {
    return questionData.findIndex((question) => question.inputName === string)
  }

  let weight = questionData[findIndexOf('weight')].value
  let height = questionData[findIndexOf('height')].value
  let age = questionData[findIndexOf('age')].value

  // if user chose to enter lbs, convert to kg
  if (questionData[0].option === 1) weight = convertLbsToKg(weight)

  // if user chose to enter ft & inches, convert to cm
  if (questionData[1].option === 1) height = convertFtToCm(height)

  const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/bmi',
    params: { age, weight, height },
    headers: {
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
  }

  const makeCall = async () => {
    try {
      const response = await axios.request(options)
      const { bmi, health, healthy_bmi_range: range } = response.data.data
      store.dispatch(setBmi({ bmi, health, range }))
    } catch (err) {
      store.dispatch(throwErr())
    }
  }

  makeCall()
}

export default bmiRequest
