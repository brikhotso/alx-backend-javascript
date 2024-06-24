export default function createReportObject(employeesList) {
  const allEmployees = {};

  Object.keys(employeesList).forEach((department) => {
    allEmployees[department] = employeesList[department].map((employee) => employee);
  });

  return {
    allEmployees,
    getNumberOfDepartments: () => Object.keys(allEmployees).length,
  };
}
