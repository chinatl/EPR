const app={
    state:{
        show_order:true,
        show_inform:true
    },
    mutations:{
        TOOGLE_EXPEDIC_ORDER:state=> {
			state.show_order = !state.show_order
		},
        TOOGLE_EXPEDIC_INFORM:state=> {
			state.show_inform = !state.show_inform
		},
    },
    actions:{

    }
}
export default app 