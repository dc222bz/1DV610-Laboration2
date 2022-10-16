/**
 * The my-username web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'

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
        try {
          const time = parseInt(this.#time.value)
          const height = parseInt(window.sessionStorage.getItem('myapp-height'))
          const weight = parseInt(window.sessionStorage.getItem('myapp-weight'))
          const age = parseInt(window.sessionStorage.getItem('myapp-age'))
          const sex = window.sessionStorage.getItem('myapp-sex')
          const activitylevel = parseFloat(
            window.sessionStorage.getItem('myapp-activitylevel')
          )
          const person = new CaloriesCounter(height, weight, age, sex, activitylevel)

          let addCalories = 0
          let totCalories = parseInt(window.sessionStorage.getItem('myapp-totcalories'))
          switch (this.#exercise.value) {
            case 'walking':
              addCalories = person.burnedCaloriesWalking(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'swimming':
              addCalories = person.burnedCaloriesSwimming(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'running':
              addCalories = person.burnedCaloriesRunning(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'weighttraining':
              addCalories = person.burnedCaloriesWeightTraining(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'badminton':
              addCalories = person.burnedCaloriesBadminton(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'basketball':
              addCalories = person.burnedCaloriesBasketball(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'golf':
              addCalories = person.burnedCaloriesGolf(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'handball':
              addCalories = person.burnedCaloriesHandball(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'icehockey':
              addCalories = person.burnedCaloriesIcehockey(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'rollerblading':
              addCalories = person.burnedCaloriesRollerblading(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'soccer':
              addCalories = person.burnedCaloriesSoccer(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'tennis':
              addCalories = person.burnedCaloriesTennis(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
            case 'beachvolleyball':
              addCalories = person.burnedCaloriesBeachVolleyball(time)
              totCalories = totCalories + addCalories
              window.sessionStorage.setItem('myapp-totcalories', totCalories)
              this.dispatchEvent(new window.CustomEvent('addcalories'))
              this.#burnedCalories.textContent = 'Burned Calories: ' + addCalories
              break
          }
        } catch (err) {
          alert(err)
        }
      })
    }
  }
)
