import React from 'react';
import './Item.modules.scss'

type itemProps = {
    item?: {
        name: String
        created_by: { display_name: String }
        quantity: Number
        quantity_available: Number
        initial_price: Number
    },
}

class Item extends React.Component<itemProps> {
    render() {
        return (
            <div className="item">
                <div className="item__topWrapper">
                    <div className="item__creatorInfo"><div className="item__createdBy">created by</div>{ this.props.item?.created_by?.display_name }</div>
                    <img className="item__picture" src="https://picsum.photos/305/404"/>
                    <div className="item__name">{ this.props.item?.name }</div>
                </div>
                <div className="item__bottomWrapper">
                    <div className="item__available">available<div className="item__available__count">{this.props.item?.quantity_available} of {this.props.item?.quantity}</div></div>
                    <div className="item__price">price<div className="item__price__value">{this.props.item?.initial_price} ETH</div></div>
                </div>
            </div>
        );
    }
}

export default Item