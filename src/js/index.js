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

import { Data } from './storage/data.js'
const datastorage = new Data()

document.querySelector('my-inputform').addEventListener('inputform', (event) => {
  const checkMyExercises = document.querySelector('my-exercises')

  if (checkMyExercises !== 'undefined' && checkMyExercises !== null) {
    document.querySelectorAll('my-exercises').forEach((e) => e.remove())
  }

  const activitylevel = datastorage.getMyAppActivityLevel()

  const activityLevels = ['1.2', '1.4', '1.6', '1.75', '2.0', '2.4']
  const numActivites = [0, 2, 3, 5, 7, 7]
  let index = 0

  for (let i = 0; i <= activityLevels.length; i++) {
    if (activitylevel === activityLevels[i]) {
      index = numActivites[i]
    }
  }

  if (index === 0) {
    document.querySelectorAll('my-exercises').forEach((e) => e.remove())
  } else {
    for (let i = 0; i < index; i++) {
      document.querySelector('#exercises').appendChild(document.createElement('my-exercises'))
    }
  }
})
