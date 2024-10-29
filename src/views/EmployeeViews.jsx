import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNav } from "../Components/Nav/EmployeeNav";
import { Welcome } from "../Components/Welcome/Welcome";
import { TicketList } from "../Components/tickets/TicketList";
import { EmployeeList } from "../Components/employees/EmployeeList";
import { EmployeeDetails } from "../Components/employees/EmployeeDetails";
import { CustomerList } from "../Components/customers/CustomersList";
import { CustomerDetails } from "../Components/customers/CustomerDetails";
import { EmployeeForm } from "../Components/Forms/Form";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
