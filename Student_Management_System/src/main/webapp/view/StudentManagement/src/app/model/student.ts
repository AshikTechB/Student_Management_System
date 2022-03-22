



export class Student{
    id : number;
    rollNo : number;
    name:string;
    doa : string;
    physics:number;
    chemistry:number;
    biology:number;
    division:string;
    result:string;


    constructor(id : number,
        rollNo : number,
        name:string,
        doa : string,
        physics:number,
        chemistry:number,
        biology:number,
        division:string,
        result:string)
{
    this.id =id;
    this.rollNo=rollNo;
    this.name=name;
    this.doa=doa;
    this.physics=physics;
    this.chemistry=chemistry;
    this.biology=biology;
    this.division=division;
    this.result=result;
} 
}