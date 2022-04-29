import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  image: string = '';

  @Input()
  score: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
