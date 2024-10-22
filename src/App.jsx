import "./app.css"
import { CustomerList } from "./Components/customers/CustomersList"
import { EmployeeList } from "./Components/employees/EmployeeList"
import { TicketList } from "./Components/tickets/TicketList"
import "./index.css"

export const App = () => {
  return (
    <>
      {/*<TicketList/>*/}
      {/*<CustomerList />*/}
      <EmployeeList />
    </>
  )
}