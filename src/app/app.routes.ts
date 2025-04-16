import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { MeetingsComponent } from './meetings/meetings.component';

export const routes: Routes = [
    {path: 'forms', component: FormsComponent},
    {path: 'meetings', component: MeetingsComponent},
    {path: '', redirectTo: 'forms', pathMatch: 'full'},];