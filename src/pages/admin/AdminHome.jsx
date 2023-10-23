import React from "react";
import SellersTableComponent from "../../components/Admin/SellersTableComponent";
import OrdersTableComponent from "../../components/Admin/OrdersTableComponent";
import ResumeComponent from "../../components/Admin/ResumeComponent";

const AdminHome = () => {
    return(
        <>
            <ResumeComponent/>
            <div className='tables'>
              <SellersTableComponent/>
              <OrdersTableComponent/>
            </div>
        </>
    )
}

export default AdminHome