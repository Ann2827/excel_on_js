// import {$} from '@core/dom'
import {$} from '../core/dom'

export function Loader() {
  return $.create('div', 'loader').html(`
        <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `)
}