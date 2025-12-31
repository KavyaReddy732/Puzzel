import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// PrimeVue components
import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

// Styles
import './assets/main.css';

// App
import App from './App.vue';

// Add icons to library
library.add(faCartShopping, faPlus, faMinus, faTrash);

const app = createApp(App);

// Configure PrimeVue
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'none',
    },
  },
});

// Register PrimeVue components globally with Pv prefix (matching Puzzel convention)
app.component('PvButton', Button);
app.component('PvCard', Card);
app.component('PvColumn', Column);
app.component('PvDataTable', DataTable);

// Register FontAwesome
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');

