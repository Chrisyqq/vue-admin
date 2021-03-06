/**
 * Created by Chris on 17/4/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        widgets: {
            list1:[
                {name:"barChart",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:"",mustData:[]},
                {name:"todoList",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:"",mustData:[]},
                {name:"radarChart",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:"",mustData:[]},
                {name:"pieChart",inputHeight:"200",inputWidth:"",shrink:"",placeholder:false,byMyselfOne:"",byMyselfTwo:"",byMyselfThree:"",byMyselfFour:"",mustData:[]}
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
        },
        inputData:[
            {chineseName: "小白",englishName: "small red"},
            {chineseName: "小黑",englishName: "small black"},
            {chineseName: "小黄",englishName: "small yellow"},
            {chineseName: "小蓝",englishName: "small blue"},
            {chineseName: "小紫",englishName: "small purple"},
            {chineseName: "小紫",englishName: "small purple"},
            {chineseName: "小紫",englishName: "small purple"}
        ]
    },
    mutations: {
        changeDate(state,all){
            var list = all.title;
            var num = all.num;
            var type = all.type;
            var value = all.value;
            console.log(all)
            state.widgets[list][num][type] = value;
        },
        changeDateBoth(state,all){
            var list = all.title;
            var num = all.num;
            var typeOne = all.typeOne;
            var typeTwo = all.typeTwo;
            var valueOne = all.valueOne;
            var valueTwo = all.valueTwo;
            console.log(all)
            state.widgets[list][num][typeOne] = valueOne;
            state.widgets[list][num][typeTwo] = valueTwo;
        }
    },
    actions: {

    },
    getters: {
        widgets: state => {
            return state.widgets
        },
        dxAlert: state => {
            return state.dxAlert
        },
        inputData: state => {
            return state.inputData
        }
    },
    modules: {
    }
})

export default store;
