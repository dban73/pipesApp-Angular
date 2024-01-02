import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toupper: boolean = false): string {
    return toupper ? value.toUpperCase() : value.toLowerCase();
  }
}
