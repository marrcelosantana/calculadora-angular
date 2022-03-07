import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CalculadoraService ]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 4 - 7 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(4, 7, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 2 * 10 = 20',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 10, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(20);
    })
  );

  it('deve garantir que 50 / 2 = 25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(50, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(25);
    })
  );

});
