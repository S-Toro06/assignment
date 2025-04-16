import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-meetings',
  imports: [CommonModule, RouterModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
}
