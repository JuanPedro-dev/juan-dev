import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkyComponent } from '@app/components/sky/sky.component';

@Component({
  selector: 'app-select-mission',
  standalone: true,
  imports: [SkyComponent, RouterLink],
  templateUrl: './select-mission.component.html',
  styleUrl: './select-mission.component.scss',
})
export class SelectMissionComponent {}
