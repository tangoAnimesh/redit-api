import { Component, DoCheck, Input,  OnInit,  } from '@angular/core';
import { CommunicatServiceService } from '../services/communicat-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, DoCheck {
  @Input('cards_Data') public cards_Data_Arr: any = [];

  constructor(public comm_service: CommunicatServiceService) { }


  // recive navbar Data using communicateservice
  public recive_from_nav: string = '';


  // Pagination Works Start ---------------------------
  public totalCardRows: number = 0;
  public startLinkIndex: number = 1;

  ngOnInit(): void {
    // console.log(this.cards_Data_Arr);
    this.totalCardRows = this.cards_Data_Arr.length
    // console.log("==>",this.totalCardRows);

  }


  // Pagination Works End ---------------------------

  ngDoCheck(): void {
    this.recive_from_nav = this.comm_service.comm_service_Data;
    console.log("Card Data ==>", this.recive_from_nav);
  }

    
  

}
