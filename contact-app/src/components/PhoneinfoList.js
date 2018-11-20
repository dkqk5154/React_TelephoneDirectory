import React, { Component } from 'react';
import Phonelnfo from './Phonelnfo';

class PhoneinfoList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const {data, onRemove, onUpdate} = this.props;

        console.log('rendering list')
        const list = data.map(
            info => (
            <Phonelnfo 
                onRemove={onRemove }
                onUpdate={onUpdate}
                info={info} 
                key={info.id}
            />)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneinfoList;