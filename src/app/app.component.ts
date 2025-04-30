import { Component } from '@angular/core';
import { NotePadComponent } from "./features/note-pad/note-pad.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotePadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  testText = 'oops I did it again';
}
