import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeeService";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email: {employee.user?.email}</span>
      </div>
      <div>
        <span className="employee-info">Specialty: {employee.specialty}</span>
      </div>
      <div>
        <span className="employee-info">Rate: ${employee.rate}</span>
      </div>
      <footer className="employee-footer">
        Working on {employee.employeeTickets?.length}{" "}
        {employee.employeeTickets?.length === 1 ? "ticket" : "tickets"}
      </footer>
    </section>
  );
};
