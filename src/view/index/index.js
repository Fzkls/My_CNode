import React from 'react';
import IndexMenu from './indexMenu'; 
import {Row, Col,Pagination} from 'antd';
import IndexList from './list';
export default class Index extends React.Component{
    render(){
        let tab=this.props.match.params.id;
        return (
            <Row className='wrap'>
            <Col md={6} xs={0} className='indexSider'>
                <IndexMenu
                    mode='vertical'
                    id='indexMenu'
                    />
            </Col>
            <Col md={0} xs={24}>
                <IndexMenu
                    mode='horizontal'
                    id='indexXsMenu'
                    />
            </Col>
            <Col md={18} xs={24}
                 className='indexList'>
                 <IndexList
                    tab={tab}
                 />
                 
            </Col>
            </Row>
            
        );
    }
}