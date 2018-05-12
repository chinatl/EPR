const app={
    state:{
        show_order:true,
        show_new:true,
        show_detail:false
    },
    mutations:{
        TOGGLE_ORDER_ORDER:state=>{
            state.show_order=!state.show_order
        },
        TOGGLE_ORDER_NEWORDER:state=>{
            state.show_new=!state.show_new
        },
        TOGGLE_ORDER_DETAIL:state=>{
            state.show_detail=!state.show_detail
        },
    },
    actions:{
		
	}
}
export default app