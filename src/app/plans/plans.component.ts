import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
})
export class PlansComponent {
  planCard = [
    {
      label: 'LITE PLAN',
      features: [
        'Specific training',
        'Career Advice',
        `Starter Pack [Material Guide]`,
        '-',
        '-',
        '-',
        '-',
        'Free Internship',
      ],
      apply: '',
      backgroundColor: '#ffffff',
    },

    {
      label: 'bEta PLAN',
      features: [
        'Full training',
        'Career Advice',
        `Starter Pack [Pen & Material Guide]`,
        'Portfolio Setup',
        '-',
        '-',
        '-',
        'Free Internship',
      ],
      apply: '',
      backgroundColor: '#E6EBFB',
    },

    {
      label: 'pro PLAN',
      features: [
        'Full training',
        'Career Advice',
        `Starter Pack [Tees,Pen & Material Guide]`,
        'Portfolio Setup',
        '-',
        'Certificate on completion',
        '-',
        'Free Internship',
      ],
      apply: '',
      backgroundColor: '#D9E1F8',
    },

    {
      label: 'pro max PLAN',
      features: [
        'Full training',
        'Career Advice',
        `Starter Pack [Tees, Mug, Pen, Notepad, Flash, Material Guide]`,
        'Portfolio Setup',
        'LinkedIn Optimization',
        'Certificate on completion',
        'Job Placement',
        'Free Internship',
      ],
      apply: '',
      backgroundColor: '#C2CFF3',
    },
  ];

}
