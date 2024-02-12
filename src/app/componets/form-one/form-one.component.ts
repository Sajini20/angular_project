import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent {
  selectedDate: string = '';
  tableData: any[] = [
    { name: 'John Doe', serviceId: '12345', manager: 'Jane Smith' },
    { name: 'Alice Johnson', serviceId: '67890', manager: 'Bob Brown' }
  ];

  constructor(private router: Router, private http: HttpClient) {}
}