import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      <div className="NavContainer">
        <div className="logo">
          <Link exact="true" to="/">
            Kirana Store
          </Link>
        </div>
        <div className="items">
          <Link exact="true" to="/">
            Add Item
          </Link>

          {/* <Link exact="true" to="/cart">
            Cart ({Object.keys(products).length})
          </Link> */}

          <Link exact="true" to="/cart">
            {Object.keys(products).length <= 0 ? (
              <span>Cart</span>
            ) : (
              <span>Cart ({Object.keys(products).length})</span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// !! नराया जी !!
