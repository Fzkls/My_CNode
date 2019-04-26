import React from 'react';
import { Avatar,Row,Col} from 'antd';
import UserList from './userList'
import axios from 'axios';
import {connect} from 'react-redux';
class User extends React.Component{
    constructor(arg){
        super(arg);
        let id =this.props.match.params.id;
        this.getData(id);
    }

    shouldComponentUpdate(nextPorps){
        let id=this.props.match.params.id;
        let nextid=nextPorps.match.params.id;
        if(id!==nextid){
            this.getData(nextid);
            return false;
        }
        return true;
    }

    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:'USER_UPDATA'
            })
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                .then((res)=>{
                    dispatch({
                        type:'USER_UPDATA_SUC',
                        data:res.data
                    })
                }).catch((error)=>{
                    dispatch({
                        type:'USER_UPDATA_ERR',
                    })
                })
        })
    }
    
    render(){
        let {loading,data} = this.props;
        let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} =data;
        return (
            <div className='wrap'>
                <Avatar src={avatar_url} className='userAvatar'/>
                <Row className='userInfo'>
                    <Col md={8}>
                        用户名：<a>{loginname}</a>
                    </Col>
                    <Col md={8}>
                        积分：<a>{score}</a>
                    </Col>
                    <Col md={8}>
                        注册时间：<a>{create_at.split("T")[0]}</a>
                    </Col>
                </Row>
                <UserList
                    loading={loading}
                    title='最近创建的话题'
                    data={recent_topics}
                />
                <UserList
                    loading={loading}
                    title='最近回复的话题'
                    data={recent_replies}
                />
            </div>
        );
    }
}

export default connect(state=>(state.user))(User)