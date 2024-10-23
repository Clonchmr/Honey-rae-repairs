import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css";
import { CustomerList } from "./Components/customers/CustomersList";
import { EmployeeList } from "./Components/employees/EmployeeList";
import { TicketList } from "./Components/tickets/TicketList";
import "./index.css";
import { NavBar } from "./Components/Nav/NavBar";

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
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees" element={<EmployeeList />} />
      </Route>
    </Routes>
  );
};
