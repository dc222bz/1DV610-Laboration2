/**
 * The my-exercises web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'
import { Data } from '../../storage/data.js'
const datastorage = new Data()

const template = document.createElement('template')
template.innerHTML = `
       <form onSubmit="return false">
    <table id="exercises">
        <tr>
            <th>Time</th>
            <th>Exercise</th>
        </tr>
        <tr>
            <td><input type="text" id="time" placeholder="Enter The Time" /></td>
            <td><select id="exercise">
                  <option value="walking">Walking</option>
                  <option value="swimming">Swimming</option>
                  <option value="running">Running</option>
                  <option value="weighttraining">WeightTraining</option>
                  <option value="badminton">Badminton</option>
                  <option value="basketball">Basketball</option>
                  <option value="golf">Golf</option>
                  <option value="handball">Handball</option>
                  <option value="icehockey">Icehockey</option>
                  <option value="rollerblading">Rollerblading</option>
                  <option value="soccer">Soccer</option>
                  <option value="tennis">Tennis</option>
                  <option value="beachvolleyball">Beachvolleyball</option>
                </select></td>
        </tr>        
    </table>
    <button id="button">Calculate Burned Calories</button>
    </form>
    <p id='burnedCalories'>BurnedCalories: </p>
 `

customElements.define('my-exercises',
  /**
   * Represent an exercises component.
   */
  class extends HTMLElement {
    /**
     * "textfield for time"
     */
    #time

    /**
     * "textfield for button"
     */
    #button

    /**
     * "textfield for exercise"
     */
    #exercise

    /**
     * "textfield for burnedCalories"
     */
    #burnedCalories

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#time = this.shadowRoot.querySelector('#time')
      this.#button = this.shadowRoot.querySelector('#button')
      this.#burnedCalories = this.shadowRoot.querySelector('#burnedCalories')
      this.#exercise = this.shadowRoot.querySelector('#exercise')

      this.#button.addEventListener('click', (event) => {
        try {
          const time = parseInt(this.#time.value)
          const height = parseInt(datastorage.getItem('myapp-height'))
          const weight = parseInt(datastorage.getItem('myapp-weight'))
          const age = parseInt(datastorage.getItem('myapp-age'))
          const sex = datastorage.getItem('myapp-sex')
          const activitylevel = parseFloat(datastorage.getItem('myapp-activitylevel'))

          const person = new CaloriesCounter(height, weight, age, sex, activitylevel)

          let addCalories = 0
          const totCalories = parseInt(datastorage.getItem('myapp-totcalories'))

          switch (this.#exercise.value) {
            case 'walking':
              addCalories = person.burnedCaloriesWalking(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'swimming':
              addCalories = person.burnedCaloriesSwimming(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'running':
              addCalories = person.burnedCaloriesRunning(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'weighttraining':
              addCalories = person.burnedCaloriesWeightTraining(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'badminton':
              addCalories = person.burnedCaloriesBadminton(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'basketball':
              addCalories = person.burnedCaloriesBasketball(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'golf':
              addCalories = person.burnedCaloriesGolf(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'handball':
              addCalories = person.burnedCaloriesHandball(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'icehockey':
              addCalories = person.burnedCaloriesIcehockey(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'rollerblading':
              addCalories = person.burnedCaloriesRollerblading(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'soccer':
              addCalories = person.burnedCaloriesSoccer(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'tennis':
              addCalories = person.burnedCaloriesTennis(time)
              this.calculateCalories(totCalories, addCalories)
              break
            case 'beachvolleyball':
              addCalories = person.burnedCaloriesBeachVolleyball(time)
              this.calculateCalories(totCalories, addCalories)
              break
          }
        } catch (err) {
          alert(err)
        }
      })
    }

    /**
     * CalculateCalories.
     *
     * @param {*} totCalories total sum of calories.
     * @param {*} addCalories calories to add.
     */
    calculateCalories (totCalories, addCalories) {
      totCalories = totCalories + addCalories
      datastorage.setItem('myapp-totcalories', totCalories)

      this.dispatchEvent(new window.CustomEvent('addcalories'))
      this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
    }
  }
)
