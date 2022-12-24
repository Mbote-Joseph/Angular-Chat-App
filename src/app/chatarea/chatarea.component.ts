import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../chat';

@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css'],
})
export class ChatareaComponent implements OnInit {
  @Input() chat?: Chat;

  constructor() {}

  ngOnInit(): void {}
}
