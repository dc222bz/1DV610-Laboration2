/**
 * The my-inputform web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

import { Data } from '../../storage/data.js'

const template = document.createElement('template')
template.innerHTML = `
    <form onSubmit="return false">
    <table id="customers">
        <tr>
            <th>Height</th>
            <th>Weight</th>
            <th>Age</th>
            <th>Sex</th>
            <th>ActivityLevel</td>
        </tr>
        <tr>
            <td>
                <input type="text" id="height" placeholder="Enter Ur Height" autofocus/>
            </td>
            <td>
                <input type="text" id="weight" placeholder="Enter Ur Weight" />
            </td>
            <td>
                <input type="text" id="age" placeholder="Enter Ur Age" />
            </td>
            <td>
                <select id="sex">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select></td>
                <td><select id="activitylevel">
                  <option value="1.2">None</option>
                  <option value="1.4">Light (1-2 per week)</option>
                  <option value="1.6">Moderate (2-3 per week)</option>
                  <option value="1.75">Hard (3-5 per week)</option>
                  <option value="2.0">Extreme (6-7 per week)</option>
                  <option value="2.4">Professional</option>
                </select></td>
            <td>
                <button id="saveinputs">Save Inputs</button>
                <button id="reset">Reset Inputs</button>
            </td>
        </tr>
    </table>
    </form>
`

customElements.define('my-inputform',
  /**
   * Represent an inputform component.
   */
  class extends HTMLElement {
    /**
     * "textfield for height"
     */
    #height

    /**
     * "textfield for weight"
     */
    #weight

    /**
     * "textfield for age"
     */
    #age

    /**
     * "textfield for sex"
     */
    #sex

    /**
     * "textfield for activitylevel"
     */
    #activitylevel

    /**
     * "button to store username"
     */
    #button

    /**
     * "button to reset data"
     */
    #reset

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#height = this.shadowRoot.querySelector('#height')
      this.#weight = this.shadowRoot.querySelector('#weight')
      this.#age = this.shadowRoot.querySelector('#age')
      this.#sex = this.shadowRoot.querySelector('#sex')
      this.#activitylevel = this.shadowRoot.querySelector('#activitylevel')
      this.#button = this.shadowRoot.querySelector('#saveinputs')
      this.#reset = this.shadowRoot.querySelector('#reset')

      this.#button.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()

        this.saveInputs()
        this.dispatchEvent(new window.CustomEvent('inputform'))
      })

      this.#reset.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()

        window.sessionStorage.clear()
        window.location.reload()
      })
    }

    /**
     * Save inputs.
     *
     */
    saveInputs () {
      const datastorage = new Data()
      datastorage.setItem('myapp-height', this.#height.value)
      datastorage.setItem('myapp-height', this.#height.value)
      datastorage.setItem('myapp-weight', this.#weight.value)
      datastorage.setItem('myapp-age', this.#age.value)
      datastorage.setItem('myapp-sex', this.#sex.value)
      datastorage.setItem('myapp-activitylevel', this.#activitylevel.value)
    }
  }
)
