// weight regex
export const kgRegex = new RegExp(/^[4-9][0-9]$|^1[0-5][0-9]$|^160$/)
export const lbsRegex = new RegExp(/^[9][0-9]$|^[1-2][0-9][0-9]$|^3[0-4][0-9]$|^350$/)

// height regex
export const cmRegex = new RegExp(/^(?:1[3-9][0-9]|2[0-2][0-9])$/)
export const ftRegex = new RegExp(
  /^[4]\'[3-9]$|^[4]'[1][0-2]$|^[5-6]'[0-9]?$|^[5-6]'?$|^[5-6]'[1][0-2]$|^7'?[0-5]?$/
) // von 4'3 (inkl.) bis 7'5 (inkl.)

export const ageRegex = new RegExp(/^[0-7]?[0-9]$|^80$/)