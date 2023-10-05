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
      title: 'VÍCIOS',
      description: 'Dependência física e/ou psicológica de substâncias ou comportamentos.'
    },
    {
      title: 'TRANSTORNOS ALIMENTARES',
      description: 'Condições psicológicas complexas que afetam os hábitos alimentares e a imagem corporal.'
    },
    {
      title: 'TOC',
      description: 'Transtorno Obsessivo-Compulsivo'
    },
    {
      title: 'ANSIEDADE',
      description: 'Caracteriza-se por preocupações excessivas, tensão, medo irracional e sintomas físicos.'
    },
    {
      title: 'BURNOUT',
      description: 'Exaustão física, emocional e mental causado por estresse crônico relacionado ao trabalho'
    },
    {
      title: 'ANGÚSTIAS EM GERAL',
      description: 'Referem-se a sentimentos de profunda ansiedade, medo ou aflição.'
    },
    {
      title: 'TRAUMAS',
      description: 'Experiências emocionalmente perturbadoras e impactantes.'
    },
    {
      title: 'ENTRE OUTROS',
      description: ''
    },

  ];
}
