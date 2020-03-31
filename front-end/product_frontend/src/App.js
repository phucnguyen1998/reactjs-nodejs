import React, { Component } from 'react';
import HeadTitle from './components/HeadTitle';
import ProductInfo from './components/ProductInfo';
import axios from 'axios';
import AddData from './components/AddData';


const getProductData = (path) => {
  return axios.get(path).then((res) => {
    return res.data
  })
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
  
  componentWillMount() {
    if(this.state.data === null){
      getProductData('http://localhost:4000/getdata')
      .then((res) => {
        this.setState({
          data: res
        })
      })
    }
  }
  
  printData = () => {
    if(this.state.data !== null){
     return this.state.data.map((value,key) => {
        return (
          <ProductInfo key={key} image={value.image} product_name={value.product_name} product_price={value.product_price} />
        )
      })
    }
  }
   
  render() {
    return (
      <div className="App">
        <HeadTitle/>
        <AddData/>
        <div className="container">
          <div className="row">
            {this.printData()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

