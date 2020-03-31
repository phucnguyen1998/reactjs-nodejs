import React, { Component } from 'react';
import HeadTitle from './components/HeadTitle';
import ProductInfo from './components/ProductInfo';
import axios from 'axios';



const getProductData = (path) => {
  return axios.get(path).then((res) => {
    return res.data
  })
}

const addProductAction = (product_name,product_price,product_image) => {
  return axios.post('/add', {product_name,product_price,product_image}).then((response) => response.data);
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name : "",
      product_price : "",
      image : ""
    }
  }
  
  
  componentWillMount() {
    if(this.state.data === null){
      getProductData('/getdata')
      .then((res) => {
        this.setState({
          data: res
        })
      })
    }
  }
  
  isChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    
    this.setState({
      [name] : value
    })
    
  }

  handleClick = () => {
    let {product_name,product_price,image} = this.state;
    let dataTemp = [];
    let item = {}

    item.product_name = product_name;
    item.product_price = product_price;
    item.image = image

    dataTemp = this.state.data;
    if(item.product_name !== ''){
      dataTemp.push(item);
      this.setState({
        data:dataTemp
      });
    }

    addProductAction(product_name,product_price,image)
    .then((response) => {
      console.log(response);
    }).catch((err)=>{
      console.log(err);
      
    })
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
        <div className="container">
          <div className="row d-flex">
            <div className="col-4">
              <form action="" method="">
                <div className="form-group">
                  <label htmlFor="name">Ten sp</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="name" aria-describedby="helpId" placeholder="Nhap ten san pham" />
                  <small id="helpId" className="form-text text-muted">Nhap ten sp</small>
                </div>
                <div className="form-group">
                  <label htmlFor="name">gia sp</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="price" aria-describedby="helpId" placeholder="Nhap gia san pham" />
                  <small id="helpId" className="form-text text-muted">Nhap gia sp</small>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Anh sp</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="helpId" placeholder="Nhap anh san pham" />
                  <small id="helpId" className="form-text text-muted">Nhap link anh sp</small>
                </div>
                <button type="reset" onClick={() => {this.handleClick()}} className="btn btn-primary">Them moi</button>
              </form>
            </div>
            <div className="col row">
              {this.printData()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

