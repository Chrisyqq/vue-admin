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
                {name:"barChart",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:""},
                {name:"todoList",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:""},
                {name:"radarChart",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:""},
                {name:"pieChart",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:""}
            ],
            list2:[

            ],
            list3:[

            ],
            list4:[

            ]
        },
        dxAlert:{
            dialogVisible: false
        }
    },
    actions: {
    },
    mutations: {
    },
    getters: {
        widgets: state => {
            return state.widgets
        },
        dxAlert: state => {
            return state.dxAlert
        }
    },
    modules: {

    }
})


export default store
