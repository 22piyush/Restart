import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(empArr: any[], searchText: string): any[] {
    if (!searchText) {
      return empArr;
    }

    return empArr.filter((emp) => emp.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
