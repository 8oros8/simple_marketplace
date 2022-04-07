import React from 'react';
import axios from 'axios';
import Item from '../item/Item';
import './App.modules.scss';


interface Data {
    data?: {};
    products?: [];
    filterApplied?: Boolean;
}


class App extends React.Component<Data> {
    state: Data = {
        data: {},
        products: [],
        filterApplied: false,
    }
    filterProducts = (products: [{ quantity_available: Number }]) => {
        let filteredProducts = []
        for (let product of products) {
            if (product.quantity_available !== 0) {
                filteredProducts.push(product)
            }
        }
        this.setState({
            products: filteredProducts
        })
    }
    fetchProducts() {
        axios.get('https://artisant.io/api/products')
            .then(res => {
                const data = res.data;
                this.setState({ data });
                const products = res.data.data.products
                this.setState({ products })
            })
    }
    handleClick = ((isFilter: Boolean) => {
        if (isFilter === true) {
            this.setState({
                filterApplied: true
            })
            this.filterProducts(this.state.products as unknown as [{ quantity_available: Number }])
        }
        else {
            this.setState({
                filterApplied: false
            })
            this.fetchProducts()
        }
    })
    componentDidMount() {
        this.fetchProducts()
    }
    render() {
        return (
            <div>
                <div className="app">
                    <div className="app__headerWrapper">
                        <div className="app__header1">Explore</div>
                        <div className="app__header2">Buy and sell digital fashion NFT art</div>
                        <div className="app__filtersWrapper">
                            <button className={`filterButton ${this.state.filterApplied ? 'filterButton_inactive': 'filterButton_active'}`}
                                    onClick={() => this.handleClick(false)}>
                                All
                            </button>
                            <button className={`filterButton ${this.state.filterApplied ? 'filterButton_active': 'filterButton_inactive'}`}
                                    onClick={() => this.handleClick(true)}>
                                In stock
                            </button>
                        </div>
                    </div>
                    <ul className="itemsList">
                        {this.state.products?.map((value, key) => (
                            <Item key={(key)} item={value}></Item>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
