import Router , { RouterOptions }from 'vue-router'
import routers from './routers';
export default ():any => {
    return new Router ({
        mode: 'history',
        base: '/',
        fallback: false,
        scrollBehavior: () => ({ x: 0, y: 0 }),
        routes:routers
    }as RouterOptions)
}

