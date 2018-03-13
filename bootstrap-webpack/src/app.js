import 'bootstrap';
import './scss/app.scss';
import { renderGallery } from './js/items';
import { initNavigation } from './js/navigation';

console.log('My Web App');

renderGallery('gallery1');
initNavigation('.nav-item[data-name]');
