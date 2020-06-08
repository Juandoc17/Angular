import { Component } from '@angular/core';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  employeeArray: Employee[] = [
    { id: 1, name: "Elver", country: "USA" },
    { id: 2, name: "Juan", country: "USA" },
    { id: 3, name: "Valeria", country: "USA" },
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }


  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  delete() {
    if(confirm('Are you sure to delete this employee?')){
      this.employeeArray =this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
