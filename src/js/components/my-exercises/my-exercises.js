/**
 * The my-username web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounterForExercises } from '../../../../module/caloriesCounterForExercises.js'

// Define template.
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

customElements.define(
  'my-exercises',
  /**
   * Represent an username component.
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
     * "textfield for button"
     */
    #exercise

    /**
     * "textfield for button"
     */
    #burnedCalories

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      // Get the input, datalist and article elements in the shadow root.
      this.#time = this.shadowRoot.querySelector('#time')
      this.#button = this.shadowRoot.querySelector('#button')
      this.#burnedCalories = this.shadowRoot.querySelector('#burnedCalories')
      this.#exercise = this.shadowRoot.querySelector('#exercise')

      this.#button.addEventListener('click', (event) => {
        const time = parseInt(this.#time.value)
        const height = parseInt(window.sessionStorage.getItem('myapp-height'))
        const weight = parseInt(window.sessionStorage.getItem('myapp-weight'))
        const age = parseInt(window.sessionStorage.getItem('myapp-age'))
        const sex = window.sessionStorage.getItem('myapp-sex')
        const activitylevel = parseFloat(
          window.sessionStorage.getItem('myapp-activitylevel')
        )
        const person = new CaloriesCounterForExercises(
          height,
          weight,
          age,
          sex,
          activitylevel
        )

        switch (this.#exercise.value) {
          case 'walking':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesWalking(time)
            break
          case 'swimming':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesSwimming(time)
            break
          case 'running':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesRunning(time)
            break
          case 'weighttraining':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesWeightTraining(time)
            break
          case 'badminton':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesBadminton(time)
            break
          case 'basketball':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesBasketball(time)
            break
          case 'golf':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesGolf(time)
            break
          case 'handball':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesHandball(time)
            break
          case 'icehockey':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesIcehockey(time)
            break
          case 'rollerbladning':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesRollerblading(time)
            break
          case 'soccer':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesSoccer(time)
            break
          case 'tennis':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesTennis(time)
            break
          case 'beachvolleyball':
            this.#burnedCalories.textContent = 'Burned Calories: ' + person.caloriesBeachVolleyball(time)
            break
        }
      })
    }
  }
)
