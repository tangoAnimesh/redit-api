import { Component ,OnInit,OnChanges} from '@angular/core';
import { CommunicatServiceService } from '../services/communicat-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  
  constructor(public comm_service:CommunicatServiceService){}
  
  ngOnInit(): void {
    
  }
  
  
  // Pass data to the communicat-service By below method---------------
  public nav_search_data="";

  search_Str(ip:any){
    this.nav_search_data = ip.value
    this.comm_service.comm_service_Data = this.nav_search_data;
    console.log("NavData => " ,this.comm_service.comm_service_Data);
  }
  
}
