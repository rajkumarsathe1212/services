import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  students : any;

  constructor (private anyname:CommonService){
    this.students = anyname.students;
  }

}
