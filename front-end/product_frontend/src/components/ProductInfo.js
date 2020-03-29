import React, { Component } from 'react';

class componentName extends Component {

    render() {
        return (
            <div className="col-4 mt-2">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.image} alt="" />
                    <div className="card-body d-flex">
                    <h4 className="card-title m-auto">{this.props.product_name}</h4>
                    <p className="card-text m-auto">{this.props.product_price}</p>
                    </div>
                </div>
            </div>  
        );
    }
}

export default componentName;