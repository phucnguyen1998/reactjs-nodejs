import React, { Component } from 'react';

class componentName extends Component {

    render() {
        return (
            <div className="col mt-2">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.image} alt="" />
                    <div className="card-body d-flex">
                    <b className="m-auto">{this.props.product_name}</b>
                    <i className="m-auto">{this.props.product_price}</i>
                    </div>
                </div>
            </div>  
        );
    }
}

export default componentName;