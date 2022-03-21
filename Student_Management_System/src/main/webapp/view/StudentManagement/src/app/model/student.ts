



export class Student{
    id : Number;
    rollNo : Number;
    doa : String;
    physics:Number;
    chemistry:Number;
    biology:Number;
    division:String;
    result:String;


    constructor(id : Number,
        rollNo : Number,
        doa : String,
        physics:Number,
        chemistry:Number,
        biology:Number,
        division:String,
        result:String)
{
    this.id =id;
    this.rollNo=rollNo;
    this.doa=doa;
    this.physics=physics;
    this.chemistry=chemistry;
    this.biology=biology;
    this.division=division;
    this.result=result;
} 
}