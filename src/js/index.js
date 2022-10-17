/**
 * The main script file of the application.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import './components/my-inputform/index.js'
import './components/my-basalmetabolicrate/index.js'
import './components/my-activemetabolicrate/index.js'
import './components/my-exercises/index.js'
import './components/my-outputdata/index.js'

document.querySelector('my-inputform').addEventListener('inputform', (event) => {
  const checkMyExercises = document.querySelector('my-exercises')

  if (checkMyExercises !== 'undefined' && checkMyExercises !== null) {
    document.querySelectorAll('my-exercises').forEach((e) => e.remove())
  }

  const activitylevel = window.sessionStorage.getItem('myapp-activitylevel')

  switch (activitylevel) {
    case '1.2':
      document.querySelectorAll('my-exercises').forEach((e) => e.remove())
      break
    case '1.4':
      for (let i = 0; i < 2; i++) {
        document.querySelector('#exercises').appendChild(document.createElement('my-exercises'))
      }
      break
    case '1.6':
      for (let i = 0; i < 3; i++) {
        document.querySelector('#exercises').appendChild(document.createElement('my-exercises'))
      }
      break
    case '1.75':
      for (let i = 0; i < 5; i++) {
        document.querySelector('#exercises').appendChild(document.createElement('my-exercises'))
      }
      break
    case '2.0':
      for (let i = 0; i < 7; i++) {
        document.querySelector('#exercises').appendChild(document.createElement('my-exercises'))
      }
      break
    case '2.4':
      for (let i = 0; i < 7; i++) {
        document.querySelector('#exercises').appendChild(document.createElement('my-exercises'))
      }
      break
    default:
  }
})
