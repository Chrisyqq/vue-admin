/**
 * Created by Chris on 17/4/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        widgets: {
            list1:[
                {name:"barChart", id:1},
                {name:"todoList", id:2},
                {name:"radarChart", id:3},
                {name:"pieChart", id:4}
            ],
            list2:[

            ],
            list3:[

            ],
            list4:[
                
            ]
        }
    },
    actions: {
    },
    mutations: {
    },
    getters: {
        widgets: state => {
            return state.widgets
        }
    },
    modules: {

    }
})


export default store
