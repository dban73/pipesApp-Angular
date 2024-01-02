import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: string): string {
    return value ? ' Vuela' : ' No Vuela';
  }
}
