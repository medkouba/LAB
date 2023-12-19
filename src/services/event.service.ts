import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Event } from 'src/models/Event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  eventTab:Event[]=GLOBAL._DB.events

  onsave(event:Event):Observable<void> 
{
  //return this.httpClient.post<void>('LinkToRestAPI',member);
  // this.tab.push(member) ;
  // return new Observable(observer=>observer.next() ) ;
  this.eventTab= [event,...this.eventTab.filter(item=>item.id!=event.id)]
  return new Observable(observer=>observer.next() ) ;
}

  getAllEvents(): Observable<Event[]> {
    //return this.httpClient.get<Member[]> 
    //("link");
    return new Observable(observer => observer.next(this.eventTab));
  }
}
