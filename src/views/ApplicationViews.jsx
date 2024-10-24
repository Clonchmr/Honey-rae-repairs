import { Route, Outlet, Routes } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome";
import { TicketList } from "../Components/tickets/TicketList";
import { EmployeeList } from "../Components/employees/EmployeeList";
import { EmployeeDetails } from "../Components/employees/EmployeeDetails";
import { CustomerList } from "../Components/customers/CustomersList";
import { CustomerDetails } from "../Components/customers/CustomerDetails";
import { NavBar } from "../Components/Nav/NavBar";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
