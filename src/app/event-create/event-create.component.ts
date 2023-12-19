import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/services/event.service';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  range = new FormGroup({
    dateDebut: new FormControl<Date | null>(null),
    dateFin: new FormControl<Date | null>(null),
  });

  constructor(private ES: EventService, private router:Router, private activatedRoute:ActivatedRoute,
    ) {

    }
  
  form!: FormGroup; 
  event2!:Event;
  EventGlobal!:Event;
  
  ngOnInit(): void {
  
  
     this.initForm() ; 
  }
  initForm() //initialiser le form
  {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      lieu: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),
      
    });
  }
  
  
  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
  
      // Generate a random ID
      const randomId = Math.ceil(Math.random() * 1000);
  
      // Combine form values with EventGlobal
      const event = { ...this.EventGlobal, ...this.form.value, id: randomId };
  
      // Save the event
      this.ES.onsave(event).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
  
  }


