import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { CHATS } from '../mock-chat';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() chats?: Chat[];
  // chats: Chat[] = []; //
  Chats = CHATS;
  selectedChat?: Chat;

  constructor() {}

  ngOnInit(): void {}

  onSelect(chat: Chat): void {
    this.selectedChat = chat;
  }
}
