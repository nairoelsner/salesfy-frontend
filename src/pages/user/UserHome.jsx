import React from "react";
import OrdersTableComponent from "../../components/user/OrdersTableComponent";
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