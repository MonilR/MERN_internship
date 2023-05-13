import React, { Fragment } from 'react'
import { CgMouse } from "react-icons/cg"
import "./Home.css"
import Product from "./Product.js"


//temporary product for checking
const product = {
    name:"Macbook",
    images:[{url:"https://i.ibb.co/87FW1MQ/macbook.jpg" }],
    
    price:"89000/-",
    _id:"monil"
}

const Home = () => {
  return <Fragment>
    <div className="banner">
            <p>Welcome to eAccessories</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button> 
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
            <div className='container' id='container'>
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />

                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
    </Fragment>;
  
}

export default Home
