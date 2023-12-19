import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
constructor(private httpClient:HttpClient) {}

DeleteMemberByID(id:string):Observable<void>
{
  //return this.httpClient.delete<void>
 this.tab= this.tab.filter(item => item.id!=id);

  return new Observable(observer=>observer.next() ) ;
}


tab :Member[]=GLOBAL._DB.members;
tabpub:number[]=[];
count: number=0;
getNbPubMembers():Observable<number[]> {
  for (let i=0 ;i<this.tab.length;i++) {
    this.count=0;
    this.count=this.tab[i].tab_pub.length;
    this.tabpub.push(this.count);
  }
  return new Observable(o=>o.next(this.tabpub))
}

nb_student:number=0;
nb_teacher:number=0;

// get_Student_teacher():Observable<number[]> {

// }

onsave(member:Member):Observable<void> 
{
  //return this.httpClient.post<void>('LinkToRestAPI',member);
  // this.tab.push(member) ;
  // return new Observable(observer=>observer.next() ) ;
  this.tab= [member,...this.tab.filter(item=>item.id!=member.id)]
  return new Observable(observer=>observer.next() ) ;
}

getMemberByID(id:String):Observable<Member> {

//return this.httpClient.get<Member>('LinkToRestAPI',id);
  const foundMember = this.tab.find((m) => m.id === id);

  return new Observable(observer=>observer.next(foundMember) ) ;

}

getAllMembers(): Observable<Member[]> {
  //return this.httpClient.get<Member[]> 
  //("link");
  return new Observable(observer => observer.next(this.tab));
}
}
