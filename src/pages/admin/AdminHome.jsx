import React from "react";
import ResumeComponent from "../../components/admin/resumecomponent";
import SellersTableComponent from "../../components/admin/SellersTableComponent";
import OrdersTableComponent from "../../components/admin/OrdersTableComponent";

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