import { Component, ViewEncapsulation } from '@angular/core';
import { SkyComponent } from '@app/components/sky/sky.component';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [SkyComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StudiesComponent {


}
