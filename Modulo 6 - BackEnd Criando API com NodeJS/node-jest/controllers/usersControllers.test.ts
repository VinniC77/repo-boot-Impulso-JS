describe('Users Controllers', () => {
    it('Deve somar 1 + 1', () => {
        function soma(a: number, b: number) { // ARRANGE - O que quer testar
            return a + b
        }

        const resultado = soma(1, 2); // ACT - Ação
        
        expect(resultado).toBe(3); // ASSET - Resultado esperado.
    })
})