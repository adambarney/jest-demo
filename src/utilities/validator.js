export function validatePhone(phoneNumber) {
  if (phoneNumber.length === 10) {
    document.getElementById('submit-button').disabled = false
    return true
  } else {
    document.getElementById('submit-button').disabled = true
    return false
  }
}






































// export function validatePhone(phoneNumber) {
//   if (phoneNumber.length === 10) {
//     document.getElementById('save-button').disabled = false
//     return true
//   } else {
//     document.getElementById('save-button').disabled = true
//     return false
//   }
// }


