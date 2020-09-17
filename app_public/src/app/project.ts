export class Bug {
    owner: string;
    description: string;
    status: string;
  }
  
  export class Project {
    _id: string;
    name: string;
    owner: string;
    description: string[];
    bugs: Bug[];
  }