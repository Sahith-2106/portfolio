// src/app/components/get-in-touch/get-in-touch.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngFor, ngIf
import { MatIconModule } from '@angular/material/icon'; // For Material Icons

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [CommonModule, MatIconModule], // Import MatIconModule
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  // Your contact details
  contactInfo = [
    { 
      icon: 'email', 
      label: 'Email', 
      value: 'sahith.kadapaiahgari2106@gmail.com', // Replace with your actual email
      link: 'mailto:sahith.kadapaiahgari2106@gmail.com' 
    },
    { 
      icon: 'location_on', 
      label: 'Location', 
      value: 'Frankfurt, Deutschland', // Replace with your actual location
       // Optional map link
    }
  ];

  // Your social/connect links
  connectLinks = [
    { 
      icon: 'linkedin-in', 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/sahithk99',
      // Unified gradient for all buttons
      bgColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:brightness-110 dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500'
    },
    { 
      icon: 'merge', 
      label: 'GitHub', 
      url: 'https://github.com/Sahith-2106',
      // Unified gradient for all buttons
      bgColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:brightness-110 dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500'
    },
    { 
      icon: 'mail', 
      label: 'Email', 
      url: 'mailto:sahith.kadapaiahgari2106@gmail.com', 
      // Unified gradient for all buttons
      bgColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:brightness-110 dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500' 
    }
  ];

  constructor() { }
}