import React,{Component} from 'react';
import Nav from './nav';
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from 'antd';
import './index.css';

export default class MainHeader extends Component{
    render(){
        return(
            <Layout.Header>
                <Row className='warp'>
                    <Col md={6} xs={24}>
                        <h1 id='logo'>cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider className='headerDivider' type='vertical'/>
                        <Nav
                            id='nav'
                            mode='horizontal'
                        />
                    </Col>
                    <Col md={0} xs={24} className='xsNav'>
                        <Dropdown
                            overlay={
                                <Nav
                                    id='xsNav'
                                    mode='vertical'
                                />
                            }
                            placement = 'bottomRight'
                            trigger = {['click','touchend']}
                        >
                            <Button><Icon type='bars'/></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}