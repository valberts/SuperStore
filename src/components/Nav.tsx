import React from "react";
import { Link } from 'react-router-dom';

export interface NavState {
    page: string,
}

export default class Nav extends React.Component<{}, NavState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            page: 'home',
        }
    }

    render() {
        return(
            <nav>
                <Link className = 'logo' to='/' onClick={() => this.setState({page: 'home'})}>
                <h3>Logo</h3>
                </Link>
                {/* There is probably a better way to make a nav item appear "active"
                It would probably be better to use the stylesheet for that somehow
                Please let me know if you know a better way
                */}
                <ul className='nav-links'>
                    <Link className = 'link' to='/' 
                    onClick={() => this.setState({page: 'home'})}
                    style = {{'color': this.state.page === 'home' ? '#9d8df5' : 'white'}}>
                        <li>Home</li>
                    </Link>
                    <Link className = 'link' to='/deals' 
                    onClick={() => this.setState({page: 'deals'})}
                    style = {{'color': this.state.page === 'deals' ? '#9d8df5' : 'white'}}>
                        <li>Deals</li>
                    </Link>
                    <Link className = 'link' to='/cart' 
                    onClick={() => this.setState({page: 'cart'})}
                    style = {{'color': this.state.page === 'cart' ? '#9d8df5' : 'white'}}>
                        <li>Cart</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}