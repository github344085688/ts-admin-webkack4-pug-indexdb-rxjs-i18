/**
 * Created by f on 2018/5/11.
 */
import { MutationTree } from 'vuex'
import TYPES from './types'
import { states } from './index';
const mutations: MutationTree<states> = {
  [TYPES.SET_USERDATA](state:any, json:any) {
    state.activeType = json;
  },
}
export default mutations;
