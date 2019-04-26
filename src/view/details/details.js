import React from 'react';
import TxtDetails from './txtDetails';
import data from './data';
import ReplayList from './replayList'
import {connect} from 'react-redux';
import axios from 'axios';
class Details extends React.Component{
    constructor(arg){
        super(arg);
        let id =this.props.match.params.id;
        this.getData(id);
    }

    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:'DETAILS_UPDATA'
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=>{
                    dispatch({
                        type:'DETAILS_UPDATA_SUC',
                        data:res.data
                    })
                }).catch((error)=>{
                    dispatch({
                        type:'DETAILS_UPDATA_ERR',
                    })
                })
        })
    }
    
    render(){
        let {loading,data}=this.props;
        return (
            <div className='wrap'>
            <TxtDetails 
                data={data}
                loading={loading}
                />
            <ReplayList 
                loading={loading}
                replies={data.replies}
                replayCount={data.reply_count}
            />
            </div>
        );
    }
}

export default connect(state=>(state.details))(Details)