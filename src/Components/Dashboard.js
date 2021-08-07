import "../App.css";
import { useState } from "react";
import Select from "react-select";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProductList, WeightInKilogram, WeightInGram } from "../DataList";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/productAction";

const Dashboard = () => {
  document.title = "MyStore";
  const notify = () => {
    toast.success("Item add successfully...!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const Products = useSelector((state) => state.allProducts.products);
  const isExist = (useData) => {
    return Products.some((item) => useData.ItemName === item.ItemName);
  };

  const dispatch = useDispatch();

  const [useData, setUserData] = useState({
    ItemName: "",
    Weight: "",
  });

  const [userManualData, setUserManualData] = useState({
    ItemName: "",
    customWeight: "",
    type: "",
  });

  const [ItemNameValue, setItemNameValue] = useState("");
  const NameHandleChange = (ItemNmameProps) => {
    const ItemName = "ItemName";
    const value = ItemNmameProps.value;
    setItemNameValue(ItemNmameProps);
    setUserData({ ...useData, [ItemName]: value });
  };

  const [KilogramValue, setKilogramValue] = useState("");
  const KilogramHandleChange = (KilogramProps) => {
    const Weight = "Weight";
    const value = KilogramProps.value;
    setKilogramValue(KilogramProps);
    setUserData({ ...useData, [Weight]: value });
    setGramValue(null);
  };

  const [GramValue, setGramValue] = useState("");
  const GramHandleChange = (GramProps) => {
    const Weight = "Weight";
    const value = GramProps.value;
    setGramValue(GramProps);
    setUserData({ ...useData, [Weight]: value });
    setKilogramValue(null);
  };

  const addItemButton = () => {
    if (useData.ItemName.length <= 0 || useData.Weight.length <= 0) {
      toast.info("Choose any one Item !", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (isExist(useData)) {
        toast.error("Item Already Exit...!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        notify();
        dispatch(setProducts(useData));
      }
      setItemNameValue(null);
      setKilogramValue(null);
      setGramValue(null);
      setUserData({ ItemName: "", Weight: "" });
    }
  };

  const manualInputHandle = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setUserManualData({ ...userManualData, [name]: value });
  };

  const manualAddItemButton = () => {
    if (userManualData.ItemName.length <= 2) {
      toast.info("Type Item Name...!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (
        userManualData.customWeight.length > 0 &&
        userManualData.type.length > 0
      ) {
        let custItemName = userManualData.ItemName;
        let custWeight = userManualData.customWeight;
        let type = userManualData.type;

        let value = custWeight + " " + type;
        const data = {
          ItemName: custItemName,
          Weight: value,
        };
        helperAddItem(data);
      } else {
        toast.info("Select weight + type...!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const helperAddItem = (propsData) => {
    console.log(propsData.Weight);
    if (propsData.ItemName.length <= 0 || propsData.Weight.length <= 0) {
      toast.info("Invalid Input...!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if (isExist(propsData)) {
        toast.error("Item Already Exit...!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        notify();
        dispatch(setProducts(propsData));
      }
      setItemNameValue(null);
      setKilogramValue(null);
      setGramValue(null);
      setUserManualData({ ItemName: "", customWeight: "" });
    }
  };

  return (
    <>
      <div className="container p-4 user-select-none">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Item Name
              </label>

              <Select
                placeholder="Choose any one"
                name="ItemName"
                value={ItemNameValue}
                onChange={NameHandleChange}
                options={ProductList}
                isSearchable={false}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Weight(Kg.)
                </label>
                <div className="input-group mb-3">
                  <Select
                    className="dropDownQunatity"
                    placeholder="Select...!"
                    name="KilogramValue"
                    value={KilogramValue}
                    onChange={KilogramHandleChange}
                    options={WeightInKilogram}
                    isSearchable={false}
                  />
                </div>
              </div>
              <div className="col ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Weight(gram.)
                </label>
                <div className="input-group mb-3">
                  <Select
                    className="dropDownQunatity"
                    placeholder="Select...!"
                    name="GramValue"
                    value={GramValue}
                    onChange={GramHandleChange}
                    options={WeightInGram}
                    isSearchable={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={addItemButton}
            >
              Add Item
            </button>
          </div>
        </div>

        {/*=================== custome / manual product here =================================================================================== */}

        <div className="mt-4">
          <span className="display-5">Product Not In The List</span>

          <div className="row mt-4">
            <div className="col-12 ">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Item Name
                </label>
                <input
                  name="ItemName"
                  type="text"
                  className="form-control"
                  placeholder="Enter Item Name"
                  onChange={manualInputHandle}
                  value={userManualData.ItemName}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className=" col-lg-6 mb-3">
              <label className="form-label">Set / Packet / Kg. / Gram</label>
              <input
                type="text"
                name="customWeight"
                className="form-control"
                placeholder="eg. 2 set, 4 packet, 5 kg, 250 gram"
                onChange={manualInputHandle}
                value={userManualData.customWeight}
              />
            </div>

            <div className="col-lg-6 mb-3">
              <div className="row mt-1">
                <div className="col-3 border-end">
                  <label className="form-label">Set</label>
                  <br />
                  <input
                    type="radio"
                    name="type"
                    value="set"
                    className="mx-1"
                    onChange={manualInputHandle}
                  />
                </div>
                <div className="col-3 border-end ">
                  <label className="form-label">Packet</label>
                  <br />
                  <input
                    type="radio"
                    name="type"
                    value="packet"
                    className="mx-3"
                    onChange={manualInputHandle}
                  />
                </div>
                <div className="col-3 border-end ">
                  <label className="form-label">Kg.</label>
                  <br />
                  <input
                    type="radio"
                    name="type"
                    value="kg"
                    className="mx-1"
                    onChange={manualInputHandle}
                  />
                </div>
                <div className="col-3 ">
                  <label className="form-label">Gram</label>
                  <br />
                  <input
                    type="radio"
                    name="type"
                    value="gram"
                    className="mx-2"
                    onChange={manualInputHandle}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* button  */}
          <div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={manualAddItemButton}
              >
                Manual Add Item
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Dashboard;
