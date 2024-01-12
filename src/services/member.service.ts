import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url="http://localhost:8080/MEMBER-SERVICE/"
 
constructor(private httpClient:HttpClient) {}

DeleteMemberByID(id:string):Observable<void>
{
  //return this.httpClient.delete<void>
 /*this.tab= this.tab.filter(item => item.id!=id);

  return new Observable(observer=>observer.next() ) ;*/
  return this.httpClient.delete<void>(this.url+"membres/"+id)
}


/*tab :Member[]=GLOBAL._DB.members;
tabpub:number[]=[];
count: number=0;
getNbPubMembers():Observable<number[]> {
  for (let i=0 ;i<this.tab.length;i++) {
    this.count=0;
    this.count=this.tab[i].tab_pub.length;
    this.tabpub.push(this.count);
  }
  return new Observable(o=>o.next(this.tabpub))
}*/

nb_student:number=0;
nb_teacher:number=0;

// get_Student_teacher():Observable<number[]> {

// }

onsave(member:any,currentID:any,type_m:string):Observable<Member> 
{
  //return this.httpClient.post<void>('LinkToRestAPI',member);
  // this.tab.push(member) ;
  // return new Observable(observer=>observer.next() ) ;
 /* this.tab= [member,...this.tab.filter(item=>item.id!=member.id)]
  return new Observable(observer=>observer.next() ) ;*/
  if(currentID){
    if (type_m == "Enseignant") {
      //edit enseignant
      const originalObject = member ;
      const postObject = {
        id: parseInt(originalObject.id), // assuming 'id' is a number in the final format
        cin: originalObject.cin,
        nom: originalObject.nom,
        prenom: originalObject.prenom,
        dateNaissance: "2023-12-21", // Assuming 'dateInscription' is the same as 'dateNaissance'
        photo: "AAAAAAAAAAAAAA==", // Add your logic for the 'photo' property
        cv:"cv",
        email: originalObject.email,
        password: originalObject.password,
        pubs: null, // Replace with your actual logic for 'pubs'
        grade: originalObject.grade,
        etablissement: originalObject.etablissement
      };
      
      // Log the transformed object
      console.log(postObject);
      return this.httpClient.post<Member>(this.url+"membres/enseignant",postObject)

    }
    else {
      //edit etudiant 
      const originalObject = member ; 
      const postObject = {
        id: parseInt(originalObject.id), // assuming 'id' is a number in the final format
        cin: originalObject.cin,
        nom: originalObject.nom,
        prenom: originalObject.prenom,
        dateNaissance: originalObject.dateInscription, // Assuming 'dateInscription' is the same as 'dateNaissance'
        photo: "AAAAAAAAAAAAAA==", // Add your logic for the 'photo' property
        cv: "cv",
        email: originalObject.email,
        password: originalObject.password,
        pubs: null, // Replace with your actual logic for 'pubs'
        dateInscription: originalObject.dateInscription,
        diplome: originalObject.diplome,
        encadrant: null, // Replace with your actual logic for 'encadrant'
        sujet: "blockhain" // Replace with your actual logic for 'sujet'
      };
      
      // Log the transformed object
      console.log(postObject);
      return this.httpClient.post<Member>(this.url+"membres/etudiant",postObject)

    }
  }
  else {
    if (type_m == "Enseignant") {
      //add enseignant
      const originalObject = member ;
      const postObject = {
        cin: originalObject.cin,
        nom: originalObject.nom,
        prenom: originalObject.prenom,
        dateNaissance: "2023-12-21", // Assuming 'dateInscription' is the same as 'dateNaissance'
        photo: "AAAAAAAAAAAAAA==", // Add your logic for the 'photo' property
        cv: "cv",
        email: originalObject.email,
        password: originalObject.password,
        pubs: null, // Replace with your actual logic for 'pubs'
        grade: originalObject.grade,
        etablissement: originalObject.etablissement
      };
      
      // Log the transformed object
      console.log(postObject);
      return this.httpClient.post<Member>(this.url+"membres/enseignant",postObject)


    }
    else {
      //add etudiant 
      const originalObject = member ; 
      const postObject = {
        cin: originalObject.cin,
        nom: originalObject.nom,
        prenom: originalObject.prenom,
        dateNaissance: originalObject.dateInscription, // Assuming 'dateInscription' is the same as 'dateNaissance'
        photo: "AAAAAAAAAAAAAA==", // Add your logic for the 'photo' property
        cv: "cv",
        email: originalObject.email,
        password: originalObject.password,
        pubs: null, // Replace with your actual logic for 'pubs'
        dateInscription: originalObject.dateInscription,
        diplome: originalObject.diplome,
        encadrant: null, // Replace with your actual logic for 'encadrant'
        sujet: "blockhain" // Replace with your actual logic for 'sujet'
      };

      return this.httpClient.post<Member>(this.url+"membres/etudiant",postObject)

    }
  }
  
}


getMemberByID(id:String):Observable<Member> {

//return this.httpClient.get<Member>('LinkToRestAPI',id);
  /*const foundMember = this.tab.find((m) => m.id === id);

  return new Observable(observer=>observer.next(foundMember) ) ;*/

  return this.httpClient.get<Member>(this.url+"membres/"+id)

}

getAllMembers(): Observable<Member[]> {
  //return this.httpClient.get<Member[]> 
  //("link");
  //return new Observable(observer => observer.next(this.tab));
  return this.httpClient.get<Member[]>(this.url + "membres");

}
}
