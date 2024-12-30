import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

import { EmployeeComponent } from './Components/employee/employee.component';

import { LayoutComponent } from './Components/layout/layout.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { ProjectComponent } from './Components/project/project.component';

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


        ]
    }





];
