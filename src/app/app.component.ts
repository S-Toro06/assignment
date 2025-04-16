import { Component } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterModule } from '@angular/router';
import { MeetingsComponent } from "./meetings/meetings.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  title = `Anna's Architectual Firm`;
}
