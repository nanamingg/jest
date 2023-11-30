const { sum, sumOf } = require("./a");
// import { useState } from 'react';

describe("덧셈 함수들", () => {
  it("두 수의 합 구하기", () => {
    expect(sum(2, 4)).toBe(6);
  });

  it("배열의 모든 숫자 더하기", () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(sumOf(numbers)).toBe(15);
  });
});
