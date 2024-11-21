import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SkyComponent } from '@app/components/sky/sky.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SkyComponent, NgOptimizedImage, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  private router = inject(Router);

  navigate(route: string) {
    this.router.navigate([route])
  }
}
