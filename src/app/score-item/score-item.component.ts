import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent implements OnInit {

  @Input()
  score: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
