import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { CHATS } from '../mock-chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Chats = CHATS;
  selectedChat?: Chat;

  onSelect(chat: Chat): void {
    this.selectedChat = chat;
  }
  constructor() {}

  ngOnInit(): void {}
}
