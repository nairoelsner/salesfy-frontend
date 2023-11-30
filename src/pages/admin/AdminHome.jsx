import React from "react";
import ResumeComponent from "../../components/admin/resumecomponent";
import SellersTableComponent from "../../components/admin/sellerstablecomponent";
import OrdersTableComponent from "../../components/admin/orderstablecomponent";

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