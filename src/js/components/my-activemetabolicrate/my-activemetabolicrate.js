/**
 * The my-activemetabolicrate web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'
import { Data } from '../../storage/data.js'

const template = document.createElement('template')
template.innerHTML = `
     <p id='maincal'>Active Metabolic Rate :</p>
 `

customElements.define('my-activemetabolicrate',
  /**
   * Represent an activemetabolicrate component.
   */
  class extends HTMLElement {
    /**
     * "textfield for maincal"
     */
    #maincal

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      const datastorage = new Data()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#maincal = this.shadowRoot.querySelector('#maincal')

      document.querySelector('my-inputform').addEventListener('inputform', (event) => {
        try {
          const height = parseInt(datastorage.getItem('myapp-height'))
          const weight = parseInt(datastorage.getItem('myapp-weight'))
          const age = parseInt(datastorage.getItem('myapp-age'))
          const sex = datastorage.getItem('myapp-sex')
          const activitylevel = parseFloat(datastorage.getItem('myapp-activitylevel'))

          const person = new CaloriesCounter(height, weight, age, sex, activitylevel)
          const maincal = person.getActiveMetabolicRate()

          const weeklycalories = maincal * 7
          this.#maincal.textContent = 'Active Metabolic Rate: ' + maincal

          datastorage.setItem('myapp-weeklycalories', weeklycalories)
          datastorage.setItem('myapp-totcalories', weeklycalories)

          this.dispatchEvent(new window.CustomEvent('addcalories'))
        } catch (err) {
          alert(err)
        }
      })
    }
  }
)
