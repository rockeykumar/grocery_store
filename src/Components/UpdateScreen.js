import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSelectedProducts } from "../actions/productAction";
import "../App.css";

const UpdateScreen = (props) => {
  document.title = "Update";
  const dispatch = useDispatch();
  const productId = props.match.params.itemId;

  const history = useHistory();

  const products = useSelector((state) => state.allProducts.products);
  const product = products.filter((ele) => {
    return ele.id === productId;
  });

  const [useData, setUserData] = useState({
    id: productId,
    ItemName: "",
    Weight: "",
    weightType: "",
  });

  const fillSelectedProduct = () => {
    if (products === "" || Object.keys(products).length <= 0) return;
    const { ItemName, Weight } = product[0];
    const Iname = "ItemName";
    const Wname = "Weight";
    const Wtype = "weightType";
    const SIUnit = Weight.split(" ");

    setUserData({
      ...useData,
      [Iname]: ItemName,
      [Wname]: SIUnit[0],
      [Wtype]: SIUnit[1],
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...useData, [name]: value });
  };

  const updateHandle = () => {
    dispatch(updateSelectedProducts(useData));
    alert("Update Successfully...!");
    history.goBack();
  };

  useEffect(() => {
    if (productId && productId !== "") fillSelectedProduct();

    // return () => {
    //   setIsTrue(true);
    // };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <>
      <div className="container user-select-none">
        <div className="row mt-4">
          <div className="col display-5 mb-3">Update Product</div>
          <hr />
        </div>

        <div className="row mt-3">
          <div className="col-12 mb-4">
            <label>Item Name</label>
            <input
              type="text"
              name="ItemName"
              value={useData.ItemName}
              className="form-control mt-2"
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-12 mb-4">
            <label>Weight</label>
            <input
              type="text"
              name="Weight"
              value={useData.Weight}
              className="form-control mt-2"
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-12 mb-5">
            <span>Type</span>

            <div className="row mt-2">
              <div className="col-6">
                <input
                  type="radio"
                  name="weightType"
                  value="kg"
                  style={{ marginRight: "10px" }}
                  onChange={onChangeHandler}
                  checked={"kg" === useData.weightType}
                />
                <span>Kilogram</span>
              </div>
              <div className="col-6">
                <div className="col-6">
                  <input
                    type="radio"
                    name="weightType"
                    value="gram"
                    style={{ marginRight: "10px" }}
                    onChange={onChangeHandler}
                    checked={"gram" === useData.weightType}
                  />
                  <span>Gram</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={updateHandle}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateScreen;
