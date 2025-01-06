export class CREATEEMPPROJECT {
    empProjectId: number;
    projectId: number;
    empId: number;
    assignedDate: string;
    role: string;
    isActive: boolean;

    constructor(){
        this.empProjectId=0,
        this.assignedDate=''
        this.projectId=0,
        this.empId=0,
        this.role='',
        this.isActive=true
    }
  }

  export interface ICREATEUSERDE {
    empProjectId: number;
    projectId: number;
    empId: number;
    assignedDate: string;
    role: string;
    isActive: boolean;
    projectName: string;
    employeeName: string;

  }