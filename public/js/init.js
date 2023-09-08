import { IndexRender } from './container/index.js'
import { buttonCartEvent } from './services/eventCartService.js';

window.onload = () => {
    IndexRender();
    buttonCartEvent();
}