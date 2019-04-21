import React from 'react';
import data from './data';
import PublicCard from '../publicCard';
export default class About extends React.Component{
    render(){
        return (
            <PublicCard
                data={data}
                />
        );
    }
}