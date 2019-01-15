/**
 * Created by f on 2018/5/11.
 */
import { GetterTree } from 'vuex'
 import indexDb  from '../store/indexDb';
import { states } from './index';
const getters: GetterTree<any, any> = {
 async getAccessToken(states:states){
    const { users, dbMessage }=states;
    if(users.accessToken===null){
      await indexDb.getDataFromDb(dbMessage).then((data)=>{
          users.accessToken=data;
      })
    }
    return users
  }
}

function getDataFromDb(getData:object){
  return new Promise((resolve, reject)=>{
    try {
      indexDb.getDataFromDb(getData).then((data: any) => {
        console.log(data === undefined)
        if (data != undefined) {
          resolve(data.accessToken)
        } else {
          resolve('undefined');
        }
      })
    } catch (err) {
      reject(err);
    }
  })

}
export default getters;
