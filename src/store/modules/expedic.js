const app={
    state:{
        show_order:false,
        show_inform:false,
        
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