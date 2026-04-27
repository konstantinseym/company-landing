import FormAddEmployee from "../forms/FormAddEmployee.jsx";
import FormArrangeEmployees from "../forms/FormArrangeEmployees.jsx";
import FormDeleteEmployee from "../forms/FormDeleteEmployee.jsx";

export default function EmployeesSection({
  employees,
  handleAddEmployee,
  handleArrangeEmployees,
  handleDeleteEmployee,
}) {
  return (
    <>
      <FormAddEmployee handleAddEmployee={handleAddEmployee} />
      <FormArrangeEmployees
        employees={employees}
        handleArrangeEmployees={handleArrangeEmployees}
      />
      <FormDeleteEmployee
        employees={employees}
        handleDeleteEmployee={handleDeleteEmployee}
      />
    </>
  );
}
