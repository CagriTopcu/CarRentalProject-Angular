import { Pipe, PipeTransform } from '@angular/core';
import {CarDetailDto} from '../models/carDetailDto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], filteredText:string): CarDetailDto[] {
    filteredText = filteredText ? filteredText.toLocaleLowerCase() : "";
    return filteredText ? value.filter((c:CarDetailDto) => c.carName.toLocaleLowerCase().indexOf(filteredText) !==-1):value
  }
}
