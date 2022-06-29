const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees)

function getEmployeeByName(employeeName) {
  if (employeeName === undefined || employeeName.length === 0) {
    return {};
  }
  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

module.exports = getEmployeeByName;
