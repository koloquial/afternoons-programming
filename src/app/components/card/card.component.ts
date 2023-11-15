import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  name: string = '';

  @Input()
  category: string = '';

  @Input()
  description: string = '';

  @Input()
  iconSource: string = '';

  @Input()
  screenshots: string[] = [''];

  @Input()
  deployment: string = '';

  openLink(source: string){
    window.open(source, "_blank")
  }

}
