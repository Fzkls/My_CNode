import React from 'react';
import {Card} from 'antd';
export default class PublicCard extends React.Component{
    render(){
        let data=this.props.data;
        return (
            <div className='wrap'>
                {data.map((item,index)=>(<Card
                    title={item.title}
                    type='inner'
                    key={index}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html:item.content
                        }}
                        className={item.className}
                    ></div>
                </Card>))}
        </div>
        );
    }
}