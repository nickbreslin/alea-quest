import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDiceTwo)

export default (app) => {
  app.component('fa', FontAwesomeIcon)
}
