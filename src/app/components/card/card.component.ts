import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() name: string = '';

  @Input() category: string = '';

  @Input() description: string = '';

  @Input() iconSource: string = '';

  @Input() screenshots: string[] = [''];

  @Input() deployment: string = '';

  @Input() content: string[] = [''];

  openLink(source: string){
    window.open(source, "_blank")
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        name: this.name,
        content: this.content
      }
    });
  }

}
