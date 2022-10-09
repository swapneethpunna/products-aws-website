import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function Order(){
    const [order,setOrder]=useState([])
    const parsedData = [];


    useEffect(()=>{
        const getData = async ()=>{
        const responseData =await axios.get(" https://rheabts8ik.execute-api.ap-south-1.amazonaws.com/production/");
        setOrder(responseData.data);
        }
        getData();
    },[]);


    order.map(val=>{
        parsedData.push(JSON.parse(val['Items']));
    })

    let result =[].concat(...parsedData);

    return (
        <div className=' container mt-5'>
          <Link to = "/"><span><box-icon name='arrow-back'></box-icon></span></Link><h1>Orders</h1>

           {   result.map((val,index)=>{
                return(
                  <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card p-2">
                    <img src={val.Image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{val.productName}</h5>
                      <p className="card-text">Rs - {val.price}/-</p>
                    </div>
                  </div>
                </div>   
                )
              })
            } 
        </div>
      )
    }

