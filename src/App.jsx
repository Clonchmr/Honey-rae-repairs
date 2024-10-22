import "./app.css"
import { CustomerList } from "./Components/customers/CustomersList"
import { TicketList } from "./Components/tickets/TicketList"
import "./index.css"

export const App = () => {
  return (
    <>
      {/*<TicketList/>*/}
      <CustomerList />
    </>
  )
}