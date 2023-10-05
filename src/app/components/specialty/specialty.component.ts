import { Component } from '@angular/core';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent {
  cardItems = [
    {
      title: 'TDAH',
      description: 'Transtorno do Déficit de Atenção com Hiperatividade'
    },
    {
      title: 'DEPRESSÃO',
      description: 'Transtorno mental caracterizado por sintomas persistentes de tristeza.'
    },
    {
      title: 'ANSIEDADE',
      description: 'Caracteriza-se por preocupações excessivas, tensão, medo irracional e sintomas físicos.'
    },
    {
      title: 'TOC',
      description: 'Transtorno Obsessivo-Compulsivo'
    },
    {
      title: 'BURNOUT',
      description: 'Exaustão física, emocional e mental causado por estresse crônico relacionado ao trabalho'
    },
    {
      title: 'TRAUMAS',
      description: 'Experiências emocionalmente perturbadoras e impactantes.'
    },

  ];
}
