//* A A A

describe("Test in the App File", () => {
  test("should be true", () => {
    //  1.  Arrange : Preparar todo lo que vamos probar

    const num1 = 10;
    const num2 = 20;

    //  2.  Act: Aplicar estimulos

    const result = num1 + num2;

    //  3.  Assert: Hacer aserciones

    expect(result).toBe(30);
  });
});
