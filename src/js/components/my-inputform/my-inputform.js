/**
 * The my-username web component module.
 *
 * @author Daniel Carlsson <dz222bz@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
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

customElements.define(
  'my-inputform',
  /**
   * Represent an username component.
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
     * "button to store username"
     */
    #reset

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
      this.#height = this.shadowRoot.querySelector('#height')
      this.#weight = this.shadowRoot.querySelector('#weight')
      this.#age = this.shadowRoot.querySelector('#age')
      this.#sex = this.shadowRoot.querySelector('#sex')
      this.#activitylevel = this.shadowRoot.querySelector('#activitylevel')
      this.#button = this.shadowRoot.querySelector('#saveinputs')
      this.#reset = this.shadowRoot.querySelector('#reset')

      // Adds eventlistener to button with click function
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
      window.sessionStorage.setItem('myapp-height', this.#height.value)
      window.sessionStorage.setItem('myapp-weight', this.#weight.value)
      window.sessionStorage.setItem('myapp-age', this.#age.value)
      window.sessionStorage.setItem('myapp-sex', this.#sex.value)
      window.sessionStorage.setItem('myapp-activitylevel', this.#activitylevel.value)
    }
  }
)
