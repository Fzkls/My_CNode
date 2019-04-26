import React from 'react';
import {Menu} from 'antd';
import tab from './tab'
import {Link,withRouter} from 'react-router-dom';
class IndexMenu extends React.Component{
    
    constructor(arg){
        super(arg);
        this.state={
            activeKey:this.getActiveKey(this.props.location)
        }
    }

    getActiveKey(location){
        return location.pathname.split('/')[2];
    }
    shouldComponentUpdate(nextProps){
        let activeKey=this.getActiveKey(nextProps.location)
        if (activeKey!==this.state.activeKey) {
            this.setState({
                activeKey
            })
            return false;
        }
        return true;
    }

    render(){
        return(
            <Menu 
                id={this.props.id}
                mode={this.props.mode}
                defaultSelectedKeys={[this.state.activeKey]}
            >{
                tab.map((item)=>{
                    if(!item.isIndex){
                        return false;
                    }
                    return(<Menu.Item key={item.tab}>
                        <Link to={'/index/'+item.tab}>{item.txt}</Link>
                    </Menu.Item>)
                })
            }
                </Menu>
        )
    }
}

export default withRouter((props)=>{
    let {mode,id,location}=props;
    return <IndexMenu 
        mode={mode}
        id={id}
        location={location}
    />
})