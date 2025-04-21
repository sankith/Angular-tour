import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renameImage'
})
export class RenameImagePipe implements PipeTransform {

  transform(value: string | unknown, ...args: unknown[]): string | unknown {
    if (typeof(value) == 'string') {
      return value.replace(' ','_');
    }
    else {
      return value
    }
  }

}
