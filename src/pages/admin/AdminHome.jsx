import React from "react";
//import ResumeComponent from "../../components/admin/ResumeComponent";
import SellersTableComponent from "../../components/admin/SellersTableComponent";
import OrdersTableComponent from "../../components/admin/OrdersTableComponent";

const AdminHome = () => {
    return(
        <>
            
            <div className='tables'>
              <SellersTableComponent/>
              <OrdersTableComponent/>
            </div>
        </>
    )
}

export default AdminHome