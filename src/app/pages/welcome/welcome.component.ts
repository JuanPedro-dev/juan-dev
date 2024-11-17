import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SkyComponent } from '@app/components/sky/sky.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SkyComponent, NgOptimizedImage],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
