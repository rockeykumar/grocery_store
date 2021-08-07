import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { removeSelectedProduct } from "../actions/productAction";
import "../App.css";
import PrintList from "../print/PrintList";

const Cart = () => {
  const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  // ======== (Above print page code)  =================================================================================
  document.title = "Cart";
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    console.log(id);
    dispatch(removeSelectedProduct(id));
    toast.error("Item Deleted successfully...!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const renderList = products.map((product, ind) => {
    const { id, ItemName, Weight } = product;
    return (
      <tr key={id}>
        <th scope="row">{ind + 1}</th>
        <td>{ItemName}</td>
        <td>{Weight}</td>
        <td>
          <Link exact="true" to={`/update/${id}`}>
            <i
              className="fas fa-edit"
              style={{
                color: "white",
                padding: "4%",
                backgroundColor: "orange",
                marginRight: "0px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            ></i>
          </Link>

          <i
            onClick={(e) => deleteProduct(ind)}
            className="fas fa-trash-alt"
            style={{
              color: "white",
              padding: "4%",
              backgroundColor: "red",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          ></i>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="container user-select-none">
        <div className="row mt-2">
          <div className="col">
            <div style={{ display: "none" }}>
              <PrintList ref={componentRef} />
            </div>
            <ReactToPrint
              // pageStyle="@page { size: A4; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 0px !important; } }"
              trigger={() => (
                <button className="btn btn-primary float-end">Print</button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>
        <div className="row mt-0">
          <div className="col text-center display-5">!! नारायण जी !!</div>
        </div>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Type</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>{renderList}</tbody>
        </table>
      </div>

      <ToastContainer />
    </>
  );
};

export default Cart;

// !! नराया जी !!
