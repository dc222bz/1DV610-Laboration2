/**
 * The main script file of the application.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import './components/my-inputform/index.js'

document.querySelector('my-inputform').addEventListener('inputform', (event) => {
  const bmr = document.createElement('div')
  bmr.textContent = 'BMR: ' + event.detail.data[0]
  document.querySelector('#inputformContainer').appendChild(bmr)

  const mainCal = document.createElement('div')
  mainCal.textContent = 'MainCal: ' + event.detail.data[1]
  document.querySelector('#inputformContainer').appendChild(mainCal)
})
