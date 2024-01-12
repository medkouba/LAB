import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],  

})
export class MemberFormComponent implements OnInit{

  val!: number;
 // member!: Member;
  date = new FormControl<Date | null>(null);
  currentID!: string;
  hide = true;
  selected = 1;
  email = new FormControl('', [Validators.required, Validators.email]);
  type_m! : string; 

constructor(private MS: MemberService, private router:Router, private activatedRoute:ActivatedRoute,
  ) {}
form!: FormGroup; 
MemberGlobal!:Member;

/*
form!: FormGroup; 
member2!:Member;
MemberGlobal!:Member;

ngOnInit(): void {
const currentID = this.activatedRoute.snapshot.params['id'];
if(!! currentID) {
  this.MS.getMemberByID(currentID).subscribe((item)=>{
    this.MemberGlobal=item;
    this.initForm2(item)})
}
else   this.initForm() ; 
}
initForm() //initialiser le form
{
  this.form = new FormGroup({
    cin: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    CreatedDate: new FormControl(null, [Validators.required]),
    cv: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
  });
}

initForm2(item:Member) //initialiser le form
{
  this.form = new FormGroup({
    cin: new FormControl(item.cin, [Validators.required]),
    name: new FormControl(item.name, [Validators.required]),
    CreatedDate: new FormControl(item.createdDate, [Validators.required]),
    cv: new FormControl(item.cv, [Validators.required]),
    type: new FormControl(item.type, [Validators.required]),
  });
}

onSubmit() {
  if (this.form.valid) {
    console.log('Form submitted:', this.form.value);
  } 


const member={...this.MemberGlobal, ...this.form.value};
 this.member2={ ...member ,
id: member.id ?? Math.ceil(Math.random()*1000),
createdDate: member.createdDate ?? new Date().toISOString().toString()
}
this.MS.onsave(this.member2).subscribe(()=>{this.router.navigate(['/members'])})
}*/



ngOnInit(): void {

  //1 .. recuperation de id a partir de url
  this.currentID = this.activatedRoute.snapshot.params['id'];
  console.log(this.currentID) 
  //2 .. tester sur la valeur id 
  this.intForm() ; 

  if(!! this.currentID) {
    this.MS.getMemberByID(this.currentID).subscribe((item)=>{
      this.MemberGlobal=item;
      this.initForm2(item)})
  }
 
  }

  /*if (!!this.currentID){
        //3 .. si id a une valeur => get getMembeerById(id) => member 

    this.MS.getMemberByID(this.currentID).subscribe(
          //4 .. extraction
      (member)=>{
        this.currentMbr=member;
        console.log(this.currentMbr)
        

      }
      );
  }else{
     //5 .. sinon this.intForm();
     this.intForm();

  }*/
  //3 .. si id a une valeur => get getMembeerById(id) => member 
  //4 .. extraction 
 
 



initForm2(member:Member) //initialiser le form
{
  this.form = new FormGroup({
    cin: new FormControl(member.cin, [Validators.required]),
    nom: new FormControl(member.nom, [Validators.required]),
    prenom: new FormControl(member.prenom, [Validators.required]),
    cv: new FormControl(member.cv, [Validators.required]),
    email: new FormControl(member.email, [Validators.required]),
    password: new FormControl(member.password, [Validators.required]),
    type_mbr: new FormControl(member.type_mbr, [Validators.required]),
    grade: new FormControl(member.grade, [Validators.required]),
    etablissement: new FormControl(member.etablissement, [Validators.required]),
    diplome: new FormControl(member.diplome, [Validators.required]),
    dateInscription: new FormControl(member.dateInscription, [Validators.required]),
});

}

intForm():void{
  this.form = new FormGroup({
    cin: new FormControl(null,[Validators.required]),
    nom: new FormControl(null,[Validators.required]),
    prenom: new FormControl(null,[Validators.required]),
    cv: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
    type_mbr: new FormControl(null,[Validators.required]),
    grade: new FormControl(null,[Validators.required]),
    etablissement: new FormControl(null,[Validators.required]),
    diplome: new FormControl(null,[Validators.required]),
    date: new FormControl(new Date().toISOString(),[Validators.required]),
    dateInscription: new FormControl(null,[Validators.required]),

  });
}
ONSUB():void{
  
  if (this.currentID) {
    //this.type_m= this.form.value.type_mbr;
    this.type_m = this.form.value.grade?.valueOf == null ? 'Etudiant' : 'Enseignant'
    const member = {... this.form.value, id: this.currentID}
    this.MS.onsave(member,this.currentID,this.type_m).subscribe(
      (res)=>{this.router.navigate(["./members"])}
      );
  }
  else {
    if(this.selected==1){
      this.type_m="Enseignant"
      }else if(this.selected==2){
      this.type_m="Etudiant"
      }
      this.MS.onsave(this.form.value,this.currentID,this.type_m).subscribe(
        (res)=>{this.router.navigate(["./members"])}
        );
  }

  

   // console.log("hellllllo")
    //const objectToSubmit={...this.item1,...this.form.value}
    //this.memberService.saveMember(objectToSubmit).then(()=>{this.router.navigate(["./members"])})
  
}
}




