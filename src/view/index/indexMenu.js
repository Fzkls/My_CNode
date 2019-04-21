import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
export default class IndexMenu extends React.Component{
    render(){
        return(
            <Menu 
                id={this.props.id}
                mode={this.props.mode}
                defaultSelectedKeys={['indexMenuAll']}
            >
                    <Menu.Item key='indexMenuAll'>
                        <Link to='/index/all'>全部</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/good'>精华</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/ask'>问题</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/share'>分享</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/job'>招聘</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/test'>测试</Link>
                    </Menu.Item>
                </Menu>
        )
    }
}