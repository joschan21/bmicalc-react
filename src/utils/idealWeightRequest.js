import { convertFtToCm } from '../utils/converters'
import store from "../redux/store"
import axios from 'axios'
import { setIdealWeight } from '../redux/idealWeightSlice'
import { ftRegex } from '../config/regex'
import { throwErr } from '../redux/errorSlice'

const idealWeightRequest = (questionData) => {

  function findIndexOf(string) {
    return questionData.findIndex((question) => question.inputName === string)
  }

  function getValue(string) {
      return questionData[findIndexOf(string)].value
  }

  let height = getValue('height')
  let gender = getValue('gender')

  // if user chose to enter ft & inches, convert to cm
  if (ftRegex.test(height)) height = convertFtToCm(height)

  const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
    params: { gender, height },
    headers: {
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
  }

  const makeCall = async () => {
    try {
      const response = await axios.request(options)
      const { Devine, Hamwi, Miller, Robinson } = response.data.data
      let idealWeight = (Devine + Hamwi + Miller + Robinson) / 4
      idealWeight = idealWeight.toFixed(1)
      store.dispatch(setIdealWeight({ idealWeight }))
    } catch (err) {
      console.log("catch idealweight")
      store.dispatch(throwErr())
    }
  }

  makeCall()
}

export default idealWeightRequest
