import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { CHATS } from '../mock-chat';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // chats: Chat[] = []; //
  Chats = CHATS;

  constructor() {}

  ngOnInit(): void {}
}
