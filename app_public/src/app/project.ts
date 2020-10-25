export class Bug {
    _id:string;
    owner: string;
    description: string;
    status: string;
    severity: string;
  }
  
  export class Project {
    _id: string;
    name: string;
    owner: string;
    description: string[];
    bugs: Bug[];
  }