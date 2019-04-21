import React from 'react';
import TxtDetails from './txtDetails';
import data from './data';
import ReplayList from './replayList'
export default class Details extends React.Component{
    render(){
        return (
            <div className='warp'>
            <TxtDetails 
                data={data.data}
                loading={false}
                />
            <ReplayList 
                loading={false}
                replies={data.data.replies}
                replayCount={data.data.reply_count}
            />
            </div>
        );
    }
}