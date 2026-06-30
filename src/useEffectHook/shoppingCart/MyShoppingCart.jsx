import { useState } from "react";
import { initialProducts } from "./productList";

export const MyShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  function addToCart(product) {

    product.qty += 1;
    
    if (product.qty > 1) {
      cart.map(function (e) {
        if (e.name == product.name) {
          e.qty = product.qty;
        }
      });
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }

  }
  return (
    <>
      <h1 className="text-center display-6 py-3 mb-5 bg-dark text-white">
        Shopping Cart
      </h1>

      <table className="table table-striped table-hover table-dark text-dark">
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
        {cart.map(function (e, i) {
          return (
            <>
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.qty}</td>
                <td>{e.qty * e.price}</td>
              </tr>
            </>
          );
        })}
      </table>
      <div className="d-flex justify-content-evenly align-content-around flex-wrap">
        {products.map((e, i) => {
          return (
            <>
              <div
                key={i}
                className="card bg-light my-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {e.stock > 0 ? (
                      <span className="text-success">In stock {e.stock}</span>
                    ) : (
                      <span className="text-danger">Out of stock</span>
                    )}
                  </h6>
                  <p className="card-text">
                    <h4 className="text-primary">{e.price}/-</h4>
                    <strong>Category {e.category}</strong>
                  </p>
                  <button
                    className="btn btn-success me-3"
                    onClick={() => addToCart(e)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
