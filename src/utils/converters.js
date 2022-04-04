export function convertLbsToKg(lbs) {
  return Number((lbs / 2.205).toFixed(0))
}

function convertFtAndInches(ft) {
  let feet = ft.split("'")[0] //feet
  let inches = ft.split("'")[1] // inches
  let ftToCm = (feet * 0.3048 + inches * 0.0254) //1.93
  return Number(ftToCm * 100).toFixed(0) // 193 cm
}

export function convertFtToCm(ft) {
  if (!ft.includes("'")) return (ft * 30.48).toFixed(0)
  if (ft.includes("'") && ft.length === 2) return (Number(ft.charAt(0)) * 30.48).toFixed(0)
  else return Number(convertFtAndInches(ft))
}
