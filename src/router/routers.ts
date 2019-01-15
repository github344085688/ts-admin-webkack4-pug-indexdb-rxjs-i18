/**
 * Created by f on 2019/1/9.
 */

const main  = (): any => import(/* webpackChunkName: "group-foo" */ '@/views/login/index.ts')
const warehouse =(): any => import(/* webpackChunkName: "warehouse" */ '../views/warehouse/warehouse.ts')

export default [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/main',
        name: 'main',
        component: main
    },
    {
        path: '/warehouse',
        name: 'warehouse',
        component: warehouse
    }
]