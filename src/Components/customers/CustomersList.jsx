import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import "./customers.css";

import { User } from "../../users/User";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj, i) => {
        return (
          <Link to={`/customers/${customerObj.id}`} key={i}>
            <User user={customerObj} key={customerObj.id} />
          </Link>
        );
      })}
    </div>
  );
};
