import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sky',
  standalone: true,
  imports: [],
  templateUrl: './sky.component.html',
  styleUrl: './sky.component.scss'
})
export class SkyComponent {
  @Input() rocketEnable = false;
}
