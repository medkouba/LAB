import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],  

})
export class MemberFormComponent {
constructor(private MS: MemberService, private router:Router, private activatedRoute:ActivatedRoute,
  ) {}

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
}

}


