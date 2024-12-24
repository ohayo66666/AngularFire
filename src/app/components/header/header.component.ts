import { CommonModule } from '@angular/common';  // CommonModule をインポート
import { Component, inject } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],  // CommonModule をインポート配列に追加
})
export class HeaderComponent {
  chatService = inject(ChatService);
  user$ = this.chatService.user$;
}