import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedChat: Chat | undefined;

  constructor() {}

  ngOnInit(): void {}
}
