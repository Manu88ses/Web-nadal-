import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Calendari d'advent</h1>
    <div class="card">
      <button class="dies" type="button">1</button>
      <button class="dies" type="button">2</button>
      <button class="dies" type="button">3</button>
      <button class="dies" type="button">4</button>
      <button class="dies" type="button">5</button>
      <button class="dies" type="button">6</button>
      <button class="dies" type="button">7</button>
      <button class="dies" type="button">8</button>
      <button class="dies" type="button">9</button>
      <button class="dies" type="button">10</button>
      <button class="dies" type="button">11</button>
      <button class="dies" type="button">12</button>
      <button class="dies" type="button">13</button>
      <button class="dies" type="button">14</button>
      <button class="dies" type="button">15</button>
      <button class="dies" type="button">16</button>
      <button class="dies" type="button">17</button>
      <button class="dies" type="button">18</button>
      <button class="dies" type="button">19</button>
      <button class="dies" type="button">20</button>
      <button class="dies" type="button">21</button>
      <button class="dies" type="button">22</button>
      <button class="dies" type="button">23</button>
      <button class="dies" type="button">24</button>

    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
