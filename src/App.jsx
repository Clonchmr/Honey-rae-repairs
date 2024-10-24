import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css";
import { CustomerList } from "./Components/customers/CustomersList";
import { EmployeeList } from "./Components/employees/EmployeeList";
import { TicketList } from "./Components/tickets/TicketList";
import "./index.css";
import { NavBar } from "./Components/Nav/NavBar";
import { Welcome } from "./Components/Welcome/Welcome";
import { CustomerDetails } from "./Components/customers/CustomerDetails";
import { EmployeeDetails } from "./Components/employees/EmployeeDetails";

export const App = () => {
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
