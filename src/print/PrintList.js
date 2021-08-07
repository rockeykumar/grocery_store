import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

// const PrintList = () => {
//   document.title = "Print";
//   const products = useSelector((state) => state.allProducts.products);
//   const renderList = products.map((product, ind) => {
//     const { id, ItemName, Weight } = product;
//     return (
//       <tr key={id}>
//         <th scope="row">{ind + 1}</th>
//         <td>{ItemName}</td>
//         <td>{Weight}</td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <div className="container" ref={ref}>
//         <div className="row mt-0">
//           <div className="col text-center display-5">!! नराया जी !!</div>
//         </div>
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Item Name</th>
//               <th scope="col">Kg./Gram.</th>
//             </tr>
//           </thead>
//           <tbody>{renderList}</tbody>
//         </table>
//       </div>
//     </>
//   );
// };

const PrintList = React.forwardRef((props, ref) => {
  const products = useSelector((state) => state.allProducts.products);
  //   const date = new Date();
  let currDate = new Date().getDate().toString();
  currDate = currDate.length === 1 ? "0" + currDate : currDate;
  let currMonth = new Date().getMonth().toString();
  currMonth = (Number(currMonth) + 1).toString();
  currMonth = currMonth.length === 1 ? "0" + currMonth : currMonth;
  let year = new Date().getFullYear().toString();

  // const tit = ("Manoj_Kirana_" + currDate + "/" + currMonth + "/" + year).toString;
  // console.log(tit);
  document.title = "Manoj_Kirana_" + currDate + "_" + currMonth + "_" + year;

  const renderList = products.map((product, ind) => {
    const { id, ItemName, Weight } = product;
    return (
      <tr key={id}>
        <th scope="row">{ind + 1}</th>
        <td>{ItemName}</td>
        <td>{Weight}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="container-fluid px-5" ref={ref}>
        {/* <span className="float-start fs-5" style={{ marginTop: "19px" }}>
          {currDate}/{currMonth}/{year}
        </span> */}
        <div className="row m-1">
          <div className="col text-center display-5">!! नारायण जी !!</div>
        </div>
        <span className="float-end fs-5" style={{ marginTop: "-40px" }}>
          {currDate}/{currMonth}/{year}
        </span>
        <table className="table table-striped mt-1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>{renderList}</tbody>
        </table>
      </div>
    </>
  );
});

export default PrintList;
