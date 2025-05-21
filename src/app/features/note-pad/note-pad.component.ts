import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-pad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-pad.component.html',
  styleUrl: './note-pad.component.scss',
})
export class NotePadComponent {
  noteContent: any;
  savedMessage: any;

  saveNote() {
    console.log('Note saved');
  }
  clearNote() {
    console.log('Note cleared');
  }

  prescription() {
    const newName: string = 'cool stuff';
    this.noteContent;        
  }
}
