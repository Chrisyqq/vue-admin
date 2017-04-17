/**
 * Created by Chris on 17/4/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    list1:[{name:"barChart", id:1},
        {name:"todoList", id:2},
        {name:"radarChart", id:3},
        {name:"pieChart", id:4} ],
    list2:[{name:"pieChart", id:5},
        {name:"todoList", id:6},
        {name:"todoList", id:7} ],
    list3:[{name:"pieChart", id:8},
        {name:"todoList", id:9},
        {name:"todoList", id:10} ],
    list4:[]
}

const mutations = {}

const gatters = {
    list1: state => {
        return state.list1
    },
    list2: state => {
        return state.list2
    },
    list3: state => {
        return state.list3
    },
    list4: state => {
        return state.list4
    }
}

export default new Vuex.Store({
    state,
    mutations,
    gatters
})