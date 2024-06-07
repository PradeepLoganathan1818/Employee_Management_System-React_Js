import Axios from "axios";



const GetURL = 'http://localhost:8080/employee';
const CreateURL = "http://localhost:8080/employee/save";

class Employeeservice {
    getEmployees() {
        return Axios.get(GetURL);
    }

    createEmployees(employees) {
        return Axios.post(CreateURL, employees);
    }

    getEmployeebyId(employeeId) {
        return Axios.get(GetURL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee) {
        console.log(employeeId);
        return Axios.put(GetURL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return Axios.delete(GetURL + '/' + employeeId);
    }
}

export default new Employeeservice();