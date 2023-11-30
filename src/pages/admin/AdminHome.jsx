import React from "react";
import SellersTableComponent from "../../components/admin/SellersTableComponent";
import OrdersTableComponent from "../../components/admin/OrdersTableComponent";
import ResumeComponent from "../../components/admin/ResumeComponent";

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