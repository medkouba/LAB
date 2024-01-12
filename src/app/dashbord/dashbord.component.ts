import { Component ,OnInit} from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ToolService } from 'src/services/tool.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import {Chart,registerables} from 'node_modules/chart.js'

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
nb_Members:number=0;
nb_Article:number=0;
nb_Tools:number=0;
nb_Events:number=0;

constructor(private memberService:MemberService, private artService:ArticleService) { }
  chartdata:any;
  labeldata:any[]=[];
  realdata:any[]=[];
  pubsdata:any;
  typePub:any[]=[];
  nbPub:any[]=[];
  mbsdata:any;
  gradeEns:any[]=[];
  nbEns:any[]=[];
  etdsdata:any;
  diplometd:any[]=[];
  nb_Etd_Ens:any[]=[];

  ngOnInit(): void {
    //NbPub by TypePub:
    this.artService.getAllArticles().subscribe((result) =>{
      console.log(result);
      this.pubsdata=result;
      if(this.pubsdata!=null){
        for(let i=0; i<this.pubsdata.length; i++){
          console.log(this.pubsdata[i]);
          if(!(this.typePub.indexOf(this.pubsdata[i].type)>-1)){
            this.typePub.push(this.pubsdata[i].type)
            this.nbPub.push(1)
          }else{
            this.nbPub[this.typePub.indexOf(this.pubsdata[i].type)]++;
          } 
        }
        this.RenderChart(this.typePub,this.nbPub,'pie','pubtypechart');

      }
      
    });

    //Enseignats charts:
    this.memberService.getAllMembers().subscribe(result =>{
      this.mbsdata=result;
      if(this.mbsdata!=null){
        for(let i=0; i<this.mbsdata.length; i++){
          if(this.mbsdata[i].grade){            
            if(!((this.gradeEns.indexOf(this.mbsdata[i].grade)>-1))){
              this.gradeEns.push(this.mbsdata[i].grade)
              this.nbEns.push(1)
            }else{
              this.nbEns[this.gradeEns.indexOf(this.mbsdata[i].grade)]++;
            } 
          }
        }
        this.RenderChart(this.gradeEns,this.nbEns,'doughnut','enseignatschart');

      }
    });

    //Etudiants et Enseigant charts:
    this.memberService.getAllMembers().subscribe(result =>{
      this.etdsdata=result;
      if(this.etdsdata!=null){
        this.diplometd.push('etudiants')
        this.nb_Etd_Ens[0]=0
        this.diplometd.push('enseigant')
        this.nb_Etd_Ens[1]=0
        for(let i=0; i<this.etdsdata.length; i++){
          if(this.etdsdata[i].grade){
           
              this.nb_Etd_Ens[0]++ }
            else{
              this.nb_Etd_Ens[1]++;
            } 
          
        }
        this.RenderChart(this.diplometd,this.nb_Etd_Ens,'bar','etud_ens_chart');

      }
    });
    //EnseignantsPub:
    this.memberService.getAllMembers().subscribe(result =>{
      this.chartdata=result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length; i++){
          if (this.chartdata[i].grade){
            this.labeldata.push(this.chartdata[i].prenom)
            this.realdata.push(this.chartdata[i].id)
          }
        }
        this.RenderChart(this.labeldata,this.realdata,'doughnut','dochart');      

      }
    });

    //EtudiantsPub:
    this.memberService.getAllMembers().subscribe(result =>{
      this.chartdata=result;
      if(this.chartdata!=null){
        this.labeldata=[];
        this.realdata=[];
        for(let i=0; i<this.chartdata.length; i++){
          if (this.chartdata[i].grade){
            this.labeldata.push(this.chartdata[i].prenom)
            this.realdata.push(this.chartdata[i].id)
          }
        }
        this.RenderChart(this.labeldata,this.realdata,'polarArea','pochart');
      }
    });
    //NombrePubParAn
    this.memberService.getAllMembers().subscribe(result =>{
      this.chartdata=result;
      if(this.chartdata!=null){
        this.labeldata=['2019', '2020', '2021', '2022', '2023'];
        for(let i=0; i<this.chartdata.length; i++){
          //console.log(this.chartdata[i]);
          this.realdata.push(this.chartdata[i].id)
        }
         this.RenderChart(this.labeldata,this.realdata,'line','linchart');
      }
    });
  }
  
  RenderChart(labeldata:any,maindata:any,type:any,id:any){
    const ctx = document.getElementById('myChart');

  new Chart(id, {
    type: type,
    data: {
      //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels:labeldata,
      datasets: [{
        label: 'nombre disponible',
        //data: [12, 19, 3, 5, 2, 3],
        data:maindata, 
        backgroundColor: [     
               'rgba(0, 255, 0, 0.4)',      // Green
          'rgba(0, 255, 255, 0.4)',    // Cyan
          
          'rgba(255, 255, 0, 0.4)',    // Yellow
          
          'rgba(255, 0, 255, 0.4)',    // Magenta
          'rgba(255, 165, 0, 0.4)'  ,   // Orange
          'rgba(255, 255, 255, 0.4)',  // White
        ],
        
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      colors:[ "#00ff00"]
    }
  });
  }
  
/*
constructor(private ms:MemberService, private as:ArticleService, private ts:ToolService,
  private es:EventService) {
  this.nb_Members=this.ms.tab.length;
  this.nb_Events=this.es.eventTab.length;

  for (let i=0; i<this.nb_Members; i++) {
    this.chartLabels.push(this.ms.tab[i].name)
  }
}


tab:number[] = [];
getNumber () {
  this.ms.getNbPubMembers().subscribe((x)=>{this.tab=x});
  return this.tab
} 

chartData: ChartDataset[] = [
  {
    // ⤵️ Add these
    label: '$ in millions',
    data: this.getNumber()
  }
];
chartLabels: string[] = [];
chartOptions: ChartOptions = {};*/
}
