import { Component } from '@angular/core';
import { SkyComponent } from '@app/components/sky/sky.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SkyComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
