import { Component, OnInit } from '@angular/core';
import { List } from './list.constant';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  list = List;

  constructor() { }

  ngOnInit(): void {
  }

}
