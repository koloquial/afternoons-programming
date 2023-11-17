import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printArray'
})
export class PrintArrayPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    
    let html = '';

    value.forEach(line => {
      html += line + '<br /><br />';
    });

    console.log('html', html)

    return html;
  }

}
