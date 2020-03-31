import React, { Component } from 'react';
import axios from 'axios';

const addProductACtion = (name,price,image) => {
  return axios.post('http://localhost:4000/getdata', {name,price,image}).then((response) => response.data);
}

class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name : "",
      product_price : "",
      image : ""
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
    console.log(JSON.stringify(this.state));
    let name = this.state.product_name;
    let price = this.state.product_price;
    let image = this.state.image;

    addProductACtion(name,price,image).then((res) => {
      console.log(res);
      
    })
  }

  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-8 m-auto">
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
        </div>
      </div>

    );
  }
}

export default AddData;