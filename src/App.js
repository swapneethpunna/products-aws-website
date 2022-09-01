import './App.css';
import data from './data.js';
import {useState} from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='App'>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"><b>ZOMATO</b></a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={event =>{setSearchTerm(event.target.value)}} aria-label="Search"/>
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
            }).map((val) =>{
              return (
                    <div className="col-md-6 col-lg-4">
                      <div className="card">
                        <img src={val.Image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{val.productName}</h5>
                          <p className="card-text">Rs - {val.price}/-</p>
                        </div>
                      </div>
                    </div>
              )
            })}
        </div>  
      </div>
    </div>
  );
}

export default App;

