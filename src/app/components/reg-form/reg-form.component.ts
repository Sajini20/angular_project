import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  todayDate: Date = new Date();
  supervisorName: string = '';
  serviceNumber: string = '';
  sub1Checked: boolean = false;
  sub2Checked: boolean = false;
  sub3Checked: boolean = false;
  sub4Checked: boolean = false;
  sub5Checked: boolean = false;

  submitForm() {
    // Implement your form submission logic here
    console.log('Form submitted');
  }

constructor(private router: Router, private http: HttpClient) {}
}
