import { Component } from '@angular/core';
import { SkyComponent } from '@app/components/sky/sky.component';

interface Language {
  code: string;
  name: string;
  href: string;
}

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [SkyComponent],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
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
}
