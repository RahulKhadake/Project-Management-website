import { Component } from '@angular/core';
import { DashboardService } from '../../core/Services/dashboard.service';
import { IProject } from '../../core/model/project.model';
import { Chart, registerables } from 'chart.js';
import { JsonPipe, NgFor } from '@angular/common';
Chart.register(...registerables)

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

  dashboardList:IProject[]=[];
  totalEmployee: number = 0;
  totalProject: number = 0;
  recentEmployees: any[] = [];
  recentProjects: any[] = [];
  barChart: any;
  pieChart: any;

  constructor(private dashService:DashboardService){}

  ngOnInit(): void {
    this.getAlldata();
    
  }
 
  getAlldata() {
    this.dashService.getDashboardData().subscribe({
      next: (res: any) => {
        console.log(res, "CHECKING API RESPONSE");
        
        // Assign data from API response
        this.totalEmployee = res.totalEmployee || 0;
        this.totalProject = res.totalProject || 0;

        this.recentEmployees = res.recentEmployee || [];
        this.recentProjects = res.recentProjects || [];

        // Destroy existing charts before re-rendering
        if (this.barChart) this.barChart.destroy();
        if (this.pieChart) this.pieChart.destroy();

        // Render the charts with new data
        this.renderBarChart();
        this.renderPieChart();
      },
      error: (err: any) => {
        console.error(err, "Error in API Call");
      },
      complete() {
        console.log("API Call Completed");
      }
    });
  }

  renderBarChart() {
    const ctx = document.getElementById("barChart") as HTMLCanvasElement;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Total Employees', 'Recent Employees', 'Total Projects', 'Recent Projects'],
        datasets: [{
          label: 'Dashboard Stats',
          data: [
            this.totalEmployee, 
            this.recentEmployees.length, 
            this.totalProject, 
            this.recentProjects.length
          ],
          backgroundColor: ['blue', 'lightblue', 'red', 'pink'],
          borderColor: ['darkblue', 'darkblue', 'darkred', 'darkred'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  renderPieChart() {
    const ctx = document.getElementById("pieChart") as HTMLCanvasElement;
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Total Employees', 'Recent Employees', 'Total Projects', 'Recent Projects'],
        datasets: [{
          data: [
            this.totalEmployee, 
            this.recentEmployees.length, 
            this.totalProject, 
            this.recentProjects.length
          ],
          backgroundColor: ['blue', 'lightblue', 'red', 'pink']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

