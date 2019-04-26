import React from 'react';
import {Menu,Icon} from 'antd';
import {Link, withRouter} from 'react-router-dom';
class Nav extends React.Component{
    constructor(arg){
        super(arg);
        this.state={
            activeKey:this.getActiveKey(this.props.location)
        }
    }

    getActiveKey(location){
        return location.pathname.split('/')[1];
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
        let{mode,id} =this.props;
        return(
            <Menu 
                            mode={mode}
                            id={id}
                            theme='light'
                            selectedKeys={[this.state.activeKey]}
                        >
                            <Menu.Item key='index'>
                                <Link to='/index/all'><Icon type='home'/>首页</Link>
                            </Menu.Item>
                            <Menu.Item key='book'>
                                <Link to='/book'><Icon type='book'/>教程</Link>
                            </Menu.Item>
                            <Menu.Item key='about'>
                                <Link to='/about'><Icon type='info-circle-o'/>关于</Link>
                            </Menu.Item>
                        </Menu>
        )
    }
}

export default withRouter((props)=>{
    let {mode,id,location}=props;
    return <Nav 
        mode={mode}
        id={id}
        location={location}
    />
})