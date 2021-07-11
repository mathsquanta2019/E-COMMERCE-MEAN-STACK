import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
            <header className="rows">
                <div>
                    <a className="brand-text" href="/">EasyShop</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/login">Login</a>
                </div>
            </header>

            <main>
                <div className="rows center">

                    {
                        data.products.map((product)  =>(
                        <div key = {product._id}  className="card">
                        <a href={`/product/${product._id}`}>
                            
                            <img className="medium" src = {product.image} alt={product.name} />
                        </a>
                        <div className="card-body">
                        <a href={`/product/${product._id}`}>
                                <h2>{product.name}</h2>
                            </a>
                            <div className="rating">
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star-o"></i></span>
                            </div>
                            <div className="price">
                                ${product.price}
                            </div>
                        </div>
                    </div>
                        ))
                    }

                     
                </div>
            </main>

            <footer className="rows center">&copy Prabina Raut ITSS438</footer>
        </div>
  );
}

export default App;
