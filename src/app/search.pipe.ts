import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchBoxInp: string):any {
    console.log('value',value);
    if(!value){
        return null;
    }
    if(!searchBoxInp){
        return value;
    }

    searchBoxInp = searchBoxInp?.toLowerCase();
    return  value.filter((item:any)=>{
    return  JSON.stringify(item).toLowerCase().includes(searchBoxInp)
    })
   
  }
}


