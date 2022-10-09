import data from '../data.js';
import {useState} from 'react'
import {useCart } from "react-use-cart";
import {Link} from 'react-router-dom';

import 'boxicons';


 function Search() {  
  const {totalItems} = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const { addItem } = useCart();
  return (
    <>
    <div className='App'>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"><b>Zomato</b></a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={event =>{setSearchTerm(event.target.value)}} aria-label="Search"/>
            <Link to="/cart">
             <span className="cart"><box-icon name='cart' ></box-icon>
             <span className=" top-10 start-97 translate-middle badge rounded-pill bg-danger size">
                        {totalItems}
            </span>
            </span>
            </Link>
            <Link to = "/order"><span className="box"><box-icon type='logo' name='dropbox'></box-icon></span></Link>
          </form>
        </div>
      </nav>
      {/* Container */}
      <div className='container mt-3 mb-3'>
        {/* Start of Row */}
        <div className="row row-cols-1 row-cols-lg-4 g-4">
          {/* Searc cum rendering data */}
            {data.filter((val) =>{
              if (searchTerm === ""){
                return val
              } else if (val.productName.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            }).map((val,index) =>{
              return (
                    <div className="col-md-6 col-lg-3" key={index}>
                      <div className="card p-2">
                        <img src={val.Image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{val.productName}</h5>
                          <p className="card-text">Rs - {val.price}/-</p>
                          {/* <button type="button" className="btn btn-dark">Add to cart</button> */}
                          <button type="button" className="btn btn-dark" onClick={() => addItem(val)}>Add to cart</button>

                        </div>
                      </div>
                    </div>
              )
            })}
        </div>  
      </div>
    </div>
  );
    </>
  )
}



export default Search;