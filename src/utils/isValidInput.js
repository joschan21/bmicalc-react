function stringMatches(string, expression) {
    if (expression?.test(string) === true) return true
    return false
  }

// Function to determine if input is valid
export default function isValidInput(string, expression) {
  if (stringMatches(string, expression)) return true
  // In case of a select, the expression will be undefined. Selects always have valid inputs
  if(typeof expression === 'undefined') return true
  else return false
}
