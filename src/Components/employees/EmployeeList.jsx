import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import "./employees.css";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee, i) => {
        return (
          <Link to={`/employees/${employee.id}`} key={i}>
            <User user={employee} key={employee.id} />
          </Link>
        );
      })}
    </div>
  );
};
