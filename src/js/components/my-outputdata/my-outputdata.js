/**
 * The my-outputdata web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { Data } from '../../storage/data.js'

const template = document.createElement('template')
template.innerHTML = `
      <p id='data'>Total Maintenance Calories: </p>
  `

customElements.define('my-outputdata',
  /**
   * Represent an outputdata component.
   */
  class extends HTMLElement {
    /**
     * "textfield for data"
     */
    #data

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#data = this.shadowRoot.querySelector('#data')

      const datastorage = new Data()

      document.querySelector('my-activemetabolicrate').addEventListener('addcalories', (event) => {
        this.#data.textContent = 'Total Maintenance Calories: ' + datastorage.getItem('myapp-weeklycalories')
      })

      document.querySelector('#exercises').addEventListener('addcalories', (event) => {
        this.#data.textContent = 'Total Maintenance Calories: ' + datastorage.getItem('myapp-totcalories')
      }, true)
    }
  }
)
