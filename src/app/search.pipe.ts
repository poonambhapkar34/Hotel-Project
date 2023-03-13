import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: string) {
    console.log('value',value);
    
   // if (input) {
      input = input?.toLowerCase();
      //const filterValue = value.toLowerCase();

      return value.filter((ele:any )=> ele?.toLowerCase().includes(input));
       // return el.indexOf(input) > -1;
      // return item.sensor.toLowerCase().includes(searchValue.toLowerCase());
      
   // }
    // return value;
    
  // searchKey(data: string) {
  //   this.searchText = data;
  //   this.search();
  // }

  // search() {
  //   this.filteredEmployees = this.searchText === ""? this.employeeList : this.employeeList.filter((element) => {
  //     return element.name.toLowerCase() == this.searchText.toLowerCase();
  //   });
  // }
  }
}


