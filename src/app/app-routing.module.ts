import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './componets/form-one/form-one.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';

const routes: Routes = [
  { path: 'form-one', component: FormOneComponent },
  {path:'reg-form',component:RegFormComponent},
  // Add other route definitions as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
