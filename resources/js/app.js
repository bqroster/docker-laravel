require('./bootstrap');
window.Vue = require('vue');

Vue.component(
    'example-component',
    require('./components/ExampleComponent.vue').default
);

const vueApp = new Vue({
    el: '#vue-app'
});
