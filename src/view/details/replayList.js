import React from 'react';
import {Card,List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
export default class ReplayList extends React.Component{
    render(){
        let {replies,replayCount,loading} = this.props;
        return(
            <Card
                title={replayCount+'条回复'}
                loading={loading}
                type='inner'
            >
                <List
                    dataSource={replies}
                    itemLayout='vertical'
                    renderItem={(item)=>(
                        <List.Item
                            key={item.key}
                            extra={item.ups.length>0?<span>有{item.ups.length}人觉得这个回复很赞</span>:null}
                        >
                        <List.Item.Meta 
                            avatar={<Avatar src={item.author.avatar_url}></Avatar>}
                            description={<div>
                                <Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link><span style={{marginLeft:'5px'}}>发表于：{item.create_at.split('T')[0]}</span></div>}
                        />
                        <div
                            dangerouslySetInnerHTML={{
                                __html:item.content
                            }}
                            className='replayListContent'
                        >

                        </div>
                        </List.Item>
                    )}
                ></List>
            </Card>
        )
    }
}