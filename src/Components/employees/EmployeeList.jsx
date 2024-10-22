import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../../users/User"
import "./employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map((employee) => {
                return (
                <User user={employee} key={User.id}/>
                )
            })}
        </div>
    )
}