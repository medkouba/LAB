import { Component } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ToolService } from 'src/services/tool.service';
import { ChartDataset, ChartOptions } from 'chart.js';


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
chartOptions: ChartOptions = {};
}
