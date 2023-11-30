import React from "react";
import OrdersTableComponent from "../../components/user/OrdersTableComponent";
import ResumeComponent from "../../components/admin/ResumeComponent";

const UserHome = () => {
    return(
        <>
            <ResumeComponent/>
            <div className='tables'>
              <OrdersTableComponent/>
            </div>
        </>
    )
}

export default UserHome