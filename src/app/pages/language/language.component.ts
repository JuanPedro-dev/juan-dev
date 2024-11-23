import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from '@app/commons/directive/click-outside-directive.directive';
import { SkyComponent } from '@app/components/sky/sky.component';
import anime from 'animejs/lib/anime.es.js';

interface Language {
  code: string;
  name: string;
  href: string;
}

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [SkyComponent, ClickOutsideDirective],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  private _router = inject(Router)
  isOpen = false;

  languages: Language[] = [
    { code: 'es', name: 'Español', href: '/es' },
    { code: 'en', name: 'English', href: '/en' },
    { code: 'fr', name: 'Français', href: '/fr' },
  ];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    anime({
      targets: '#animatedBox',
      translateX: [-500, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
    });
  }

  selectLanguage() {
    anime({
      targets: '#animatedBox',
      translateX: [0, 500],
      opacity: [1, 0],
      duration: 1000,
      easing: 'linear',
    });

    setTimeout(() => {
      this._router.navigate(['/select-mission']);
    }, 1000);
  }
}
