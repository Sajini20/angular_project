import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { FormOneComponent } from './componets/form-one/form-one.component';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'reg-form', component: RegFormComponent },
  { path: 'form-one', component: FormOneComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    FormOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Add RouterModule.forRoot with your routes configuration
  ],
  providers: [],
  
})
export class AppModule { }