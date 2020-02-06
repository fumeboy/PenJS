import {loading} from './loading'
import {router, views} from './router'
import './sidebar'
import './footer'
import './layout.styl'
window['outer'] = {
    router,
    loading,
    views
}

window.onload = () => {
    router.run()
}
