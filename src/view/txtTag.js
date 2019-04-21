import React from 'react';
import {Tag} from 'antd';
const tab={
    top:{
        color:'magenta',
        txt:'置顶'
    },
    good:{
        color:'geekblue',
        txt:'精华'
    },
    job:{
        color:'cyan',
        txt:'招聘'
    },
    ask:{
        color:'green',
        txt:'问答'
    },
    share:{
        color:'purple',
        txt:'分享'
    },
    dev:{
        color:'lime',
        txt:'测试'
    },
}

function getTab(data){
    return(data.top?'top':data.good?'good':data.tab);
}

export default class TxtTag extends React.Component{
    render(){
        let nowTab = tab[getTab(this.props.data)];
        return(<Tag color={nowTab.color}>{nowTab.txt}</Tag>)
    }
}