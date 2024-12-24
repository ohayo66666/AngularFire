import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  standalone: true,
  imports: [AsyncPipe, FormsModule]
})
export class ChatPageComponent {
  chatService = inject(ChatService);
  messages$ = this.chatService.loadMessages() as Observable<DocumentData[]>;
  user$ = this.chatService.user$;
  text = '';

  sendTextMessage() {
    this.chatService.saveTextMessage(this.text);
    this.text = '';
  }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const imgFile = input.files[0];
      console.log('Selected file:', imgFile);

      // ChatService で画像メッセージを処理
      this.chatService.saveImageMessage(imgFile);
    } else {
      console.error('No file selected');
    }
  }
}
