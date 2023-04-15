import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("it should return 1 when passed 1 as an argument", () => {
    // arrange
    const number = 1;
    // act
    const result = fizzbuzz(number);
    // assert
    expect(result).toEqual("1");
  });

  test('it should return "Fizz" when passed 3 as an argument', () => {
    // arrange
    const number = 3;
    // act
    const result = fizzbuzz(number);
    // assert
    expect(result).toEqual("Fizz");
  });

  test('it should return "Buzz" when passed 5 as an argument', () => {
    // arrange
    const number = 5;
    // act
    const result = fizzbuzz(number);
    // assert
    expect(result).toEqual("Buzz");
  });

  test('it should return "FizzBuzz" when passed a multiple of 3 and 5 as an argument', () => {
    // arrange
    const number = 15;
    // act
    const result = fizzbuzz(number);
    // assert
    expect(result).toEqual("FizzBuzz");
  });

  test("it should return the number as a string when not divisible by 3 or 5", () => {
    // arrange
    const number = 7;
    // act
    const result = fizzbuzz(number);
    // assert
    expect(result).toEqual("7");
  });
});
