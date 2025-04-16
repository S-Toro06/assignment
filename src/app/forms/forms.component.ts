import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { MeetingsComponent } from '../meetings/meetings.component';

@Component({
  selector: 'app-forms',
  imports: [CommonModule, RouterModule, RouterLink ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
}
