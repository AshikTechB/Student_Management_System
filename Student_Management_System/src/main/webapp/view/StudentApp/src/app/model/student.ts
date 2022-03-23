



export class Student{
    id : number;
    rollno : number;
    name:string;
    dateOfAdmission : string;
    physics:number;
    chemistry:number;
    biology:number;
    division:string;
    result:string;
 constructor(id:number,rollno:number,dateOfAdmission:string, name:string,physics:number,chemistry:number,biology:number,division:string,result:string) {
     this.id=id;
     this.rollno=rollno;
     this.name=name;
     this.dateOfAdmission=dateOfAdmission;
    
     this.physics=physics;
     this.chemistry=chemistry;
     this.biology=biology;
    
     this.division=division;
     this.result=result;


 }
}