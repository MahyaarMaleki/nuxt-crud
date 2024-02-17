// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ece6d9',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#12b488',
    'secondary-darken-1': '#018786',
    default: '#1a1a1a',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};
const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#242F46',
    primary: '#7b78b3',
    'primary-darken-1': '#504d91',
    secondary: '#03dac6',
    'secondary-darken-1': '#018786',
    default: '#f1f1f1',
    error: '#ff5722',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
        myCustomDarkTheme
      }
    }
  })
  app.vueApp.use(vuetify)
})
