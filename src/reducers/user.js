function user(state={
    data:{
        avatar_url:'',
        create_at:'',
        loginname:'',
        score:'',
        recent_replies:[],
        recent_topics:[],
    },
    loading:false,
},action) {
    switch (action.type) {
        case 'USER_UPDATA':
            return{
                loading:true,
                data:state.data,
            }
        case 'USER_UPDATA_SUC':
            return{
                loading:false,
                data:action.data.data,
            }
        case 'USER_UPDATA_ERR':
            return{
                loading:false,
                data:state.data,
            }
        default:
            return state;
    }
}
export default user;