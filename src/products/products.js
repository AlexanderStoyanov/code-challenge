import React from 'react';
import { connect } from 'react-redux';
import { loadProducts, loadProduct } from './productsAction';

import Block2 from './block2';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceRange: null,
            sorting: null,
            searchText: '',
            sliderMaxPrice: 0,
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    //load products after component mounted
    componentDidMount() {
        this.props.loadProducts();
    }

    onChange(event) {
        if (event.target.id === 'sorting') {
            this.setState({ sorting: event.target.value });
        } else if (event.target.id === 'price-range') {
            this.setState({ priceRange: event.target.value.split('-') });
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    onClick(event) {
        this.props.loadProduct(event.target.getAttribute('data-id'));
    }

    render() {
        if (this.props.products.products) {
            var size = Object.keys(this.props.products.products).length;
        }

        //null check
        if (this.props.products.products) {
            const { products } = this.props;
            //populate products
            var block2Entries = products.products.map(product => {
                return <Block2
                    key={product._id}
                    _id={product._id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    onClick={this.onClick}
                />;
            });
        }

        //Filter by price range
        if (this.state.priceRange && this.state.priceRange[0] !== 'Price') {
            block2Entries = block2Entries.filter(product => product.props.price > parseFloat(this.state.priceRange[0]) && product.props.price < parseFloat(this.state.priceRange[1]));
        }

        //Filter by price order
        if (this.state.sorting && this.state.sorting !== 'Default Sorting') {
            this.state.sorting === 'lth' ? block2Entries.sort((a, b) => {
                return a.props.price - b.props.price;
            }) : block2Entries.sort((a, b) => {
                return b.props.price - a.props.price;
            })
        }

        //Fliter by price slider
        if (this.state.sliderMaxPrice !== 0) {
            block2Entries = block2Entries.filter(product => product.props.price < parseFloat(this.state.sliderMaxPrice));
        }

        //Search products based on name
        if (this.state.searchText) {
            block2Entries = block2Entries.filter(product => product.props.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
        }


        return (
            <section className="bgwhite p-t-55 p-b-65">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                            <div className="leftbar p-r-20 p-r-0-sm">
                                <h4 className="m-text14 p-b-7">
                                    Categories
						</h4>

                                <ul className="p-b-54">
                                    <li className="p-t-4">
                                        <a href="#" className="s-text13 active1">
                                            All
								</a>
                                    </li>

                                    <li className="p-t-4">
                                        <a href="#" className="s-text13">
                                            Women
								</a>
                                    </li>

                                    <li className="p-t-4">
                                        <a href="#" className="s-text13">
                                            Men
								</a>
                                    </li>

                                    <li className="p-t-4">
                                        <a href="#" className="s-text13">
                                            Kids
								</a>
                                    </li>

                                    <li className="p-t-4">
                                        <a href="#" className="s-text13">
                                            Accesories
								</a>
                                    </li>
                                </ul>

                                <h4 className="m-text14 p-b-32">
                                    Filters
						</h4>

                                <div className="filter-price p-t-22 p-b-50 bo3">
                                    <div className="m-text15 p-b-17">
                                        Price
							</div>

                                    <div className="wra-filter-bar">
                                        <input type="range" min="0" max="500" name="sliderMaxPrice" value={this.state.sliderMaxPrice} onChange={this.onChange} />
                                    </div>

                                    <div className="flex-sb-m flex-w p-t-16">
                                        <div className="w-size11">
                                            <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                                                Filter
									</button>
                                        </div>

                                        <div className="s-text3 p-t-10 p-b-10">
                                            Range: $<span id="value-lower">0</span> - $<span id="value-upper">{this.state.sliderMaxPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-color p-t-22 p-b-50 bo3">
                                    <div className="m-text15 p-b-12">
                                        Color
							</div>

                                    <ul className="flex-w">
                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" />
                                            <label className="color-filter color-filter1" htmlFor="color-filter1"></label>
                                        </li>

                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" />
                                            <label className="color-filter color-filter2" htmlFor="color-filter2"></label>
                                        </li>

                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" />
                                            <label className="color-filter color-filter3" htmlFor="color-filter3"></label>
                                        </li>

                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" />
                                            <label className="color-filter color-filter4" htmlFor="color-filter4"></label>
                                        </li>

                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" />
                                            <label className="color-filter color-filter5" htmlFor="color-filter5"></label>
                                        </li>

                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" />
                                            <label className="color-filter color-filter6" htmlFor="color-filter6"></label>
                                        </li>

                                        <li className="m-r-10">
                                            <input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" />
                                            <label className="color-filter color-filter7" htmlFor="color-filter7"></label>
                                        </li>
                                    </ul>
                                </div>

                                <div className="search-product pos-relative bo4 of-hidden">
                                    <input className="s-text7 size6 p-l-23 p-r-50"
                                        type="text"
                                        placeholder="Search Products..."
                                        onChange={this.onChange}
                                        value={this.state.searchText}
                                        name="searchText"
                                    />

                                    <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                                        <i className="fs-12 fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                            <div className="flex-sb-m flex-w p-b-35">
                                <div className="flex-w">
                                    <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                        <select className="selection-2" id="sorting" name="sorting" onChange={this.onChange}>
                                            <option>Default Sorting</option>
                                            <option>Popularity</option>
                                            <option value="lth">Price: low to high</option>
                                            <option value="htl">Price: high to low</option>
                                        </select>
                                    </div>

                                    <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                        <select className="selection-2" id="price-range" name="sorting" onChange={this.onChange}>
                                            <option>Price</option>
                                            <option value="0-50">$0.00 - $50.00</option>
                                            <option value="50-100">$50.00 - $100.00</option>
                                            <option value="100-150">$100.00 - $150.00</option>
                                            <option value="150-200">$150.00 - $200.00</option>
                                            <option value="200-99999">$200.00+</option>
                                        </select>
                                    </div>
                                </div>

                                <span className="s-text8 p-t-5 p-b-5">
                                    Showing 1–{size} of {size} results
						</span>
                            </div>

                            <div className="row">
                                {block2Entries}
                            </div>

                            <div className="pagination flex-m flex-w p-t-26">
                                <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                                <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: async () => {
            await dispatch(loadProducts());
        },
        loadProduct: async (productId) => {
            await dispatch(loadProduct(productId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);