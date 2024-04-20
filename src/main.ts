import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faListCheck, faUser, faLock, faRotateRight, faEnvelope, faStar, faGear, faRightFromBracket, faBullhorn, faBell, faMagnifyingGlass, faPlus, faChevronRight, faFilter, faPlay, faChartSimple, faPenToSquare, faTrashCan, faChevronDown, faXmark, faCheck, faBan, faHouse, faBars } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'

/* add icons to the library */
library.add(faCircleCheck, faListCheck, faSquareFacebook, faLinkedin, faSquareInstagram, faUser, faLock, faRotateRight, faEnvelope, faStar, faGear, faRightFromBracket, faBullhorn, faBell, faMagnifyingGlass, faPlus, faChevronRight, faFilter, faPlay, faChartSimple, faPenToSquare, faTrashCan, faChevronDown, faXmark, faCheck, faBan, faHouse, faBars)
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.mount('#app')
