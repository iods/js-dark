
import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'

import './assets/css/tailwindcss.css';

Vue.config.productionTip = false

Vue.use(CoreuiVue);

Vue.use({
    install: function(Vue){
        Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
    }
});

new Vue({

    render: h => h(App),

}).$mount('#app')