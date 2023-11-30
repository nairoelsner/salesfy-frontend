import React from "react";
import ResumeComponent from "../../components/admin/ResumeComponent.jsx";
import SellersTableComponent from "../../components/admin/SellersTableComponent.jsx";
import OrdersTableComponent from "../../components/admin/OrdersTableComponent.jsx";

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