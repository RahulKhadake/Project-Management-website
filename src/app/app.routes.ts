import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

import { EmployeeComponent } from './Components/employee/employee.component';

import { LayoutComponent } from './Components/layout/layout.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { ProjectComponent } from './Components/project/project.component';
import { AddEditViewComponent } from './Components/add-edit-view/add-edit-view.component';
import { SingleMultipleComponent } from './Components/single-multiple/single-multiple.component';
import { ReactFormsComponent } from './Components/react-forms/react-forms.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard', component: DashbordComponent
            },
            {
                path: 'Employee', component: EmployeeComponent
            },
            {
                path: 'Project', component: ProjectComponent
            },
            
            {
                path: 'Add-edit-viwe', component: AddEditViewComponent
            },
            {
                path: 'singlewithmultiple', component: SingleMultipleComponent
            },
            {
                path: 'ReactForms', component: ReactFormsComponent
            },


        ]
    }





];
