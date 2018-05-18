const app={
    state:{
        show_resevice:false,
        show_msg:true,
    },
    mutations:{
        TOGGLE_SAC_RESEVICE:state=>{
            state.show_reservice=!state.show_resevice;
        },
        TOGGLE_SAC_MSG:state=>{
            state.show_msg=!state.show_msg;
        }
    }
}
export default app