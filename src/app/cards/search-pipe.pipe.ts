import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search_Pipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(cards_Data_Arr: any[], recive_from_nav: string): any {

    if (recive_from_nav.length >= 3) {
      let searcH_data = recive_from_nav.trim().toLowerCase();
      
      let newArr = cards_Data_Arr.filter((ele: any) => {
        console.log("Data from nav " ,searcH_data);
          return ele.redit_title.trim().toLowerCase().includes(searcH_data)
      })
      return newArr;
    } 
    else {
      return cards_Data_Arr;
    }
  }

}
