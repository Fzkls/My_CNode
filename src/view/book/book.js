import React from 'react';
import data from './data'
import PublicCard from '../publicCard';
export default class Book extends React.Component{
    render(){
        return (<PublicCard
            data={data}
            />);
    }
}