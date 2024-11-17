import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkyComponent } from '@app/components/sky/sky.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SkyComponent, RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
