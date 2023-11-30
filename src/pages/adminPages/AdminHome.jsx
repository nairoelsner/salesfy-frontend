import React from "react";
import ResumeComponent from "../../components/adminComponents/ResumeComponent";
import SellersTableComponent from "../../components/adminComponents/SellersTableComponent";
import OrdersTableComponent from "../../components/adminComponents/OrdersTableComponent";

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