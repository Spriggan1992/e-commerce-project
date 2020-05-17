import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PreviewColletion from '../../components/preview-collection/collection-preview.componen'


class ShopPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const { collection } = this.state
        return (
            <div>
                {collection.map(({ id, ...otherCollecionProps }) => (
                    <PreviewColletion key={id} {...otherCollecionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;