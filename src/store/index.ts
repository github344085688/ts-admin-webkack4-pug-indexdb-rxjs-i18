/**
 * Created by f on 2018/5/11.
 */
import Vuex, {ActionTree, MutationTree} from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export interface List {
    top: Array<number>;
    new: Array<number>;
    show: Array<number>;
    ask: Array<number>;
    job: Array<number>;
    [key: string]: Array<number>;
}

export interface user {
    accessToken: any | null;
    id: string | null;
    name: string | null;
}

export interface dbMessage {
    dbName: string | null;
    dbTable: string | null;
    dataKey: string | null;
}

export interface states {
    users: user;
    activeType: string | null;
    PerPage: any;
    items: any;
    lists: List;
    dbMessage: dbMessage;
}
let state: states = {
    users: {
        accessToken: null,
        id: null,
        name: null,
    },
    dbMessage: {
        dbName: 'Stagesdb',
        dbTable: 'stage',
        dataKey: "user"
    },
    activeType: null,
    PerPage: {},
    items: {},
    lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
    }


}
export default () => {
    return new Vuex.Store({
        state,
        actions,
        getters,
        mutations
    })
}
