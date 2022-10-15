/**
 * The main script file of the application.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import './components/my-inputform/index.js'
import './components/my-bmr/index.js'
import './components/my-maintenancecalories/index.js'

document.querySelector('my-inputform').addEventListener('inputform', (event) => {
  document.querySelector('#caloriesData').appendChild(document.createElement('my-bmr'))
  document.querySelector('#caloriesData').appendChild(document.createElement('my-maintenanceCalories'))
})
