import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";


import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from "./App.vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
    faMapMarkerAlt, faBriefcase, faGear, faCalculator, faBrain,
    faChartBar, faDatabase, faChartLine, faTerminal, faCube, faPaintBrush,
    faFile, faVectorSquare, faGamepad, faLeaf, faRocket, faBolt
} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub, faLinkedin, faJs, faHtml5, faPhp, faPython, faJava,
    faVuejs, faReact, faAngular, faDiscord
} from '@fortawesome/free-brands-svg-icons';

library.add(faMapMarkerAlt, faBriefcase, faLinkedin, faGithub,
    faJs, faHtml5, faPhp, faPython, faJava, faGear, faCalculator, faBrain,
    faVuejs, faReact, faAngular, faBolt, faLeaf, faRocket, faChartBar, faDatabase, faDiscord,
    faChartLine, faTerminal, faCube, faPaintBrush, faFile, faVectorSquare, faGamepad,
    fab
);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Particles, {
    init: async engine => {
        await loadFull(engine);
    },
})

const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')

