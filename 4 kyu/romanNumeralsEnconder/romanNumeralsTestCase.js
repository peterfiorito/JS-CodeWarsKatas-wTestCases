describe("solution", () => {
  it ("should handle small numbers", () => {
    Test.expect(solution(1) == 'I', '1 should == "I"')
    Test.expect(solution(2) == 'II', '2 should == "II"')
    Test.expect(solution(3) == 'III', '3 should == "III"')
    Test.expect(solution(4) == 'IV', '4 should == "IV"')
    Test.expect(solution(5) == 'V', '5 should == "V"')
    Test.expect(solution(9) == 'IX', '9 should == "IX"')
    Test.expect(solution(10) == 'X', '10 should == "X"')
    Test.assertEquals(solution(11), 'XI')
    Test.assertEquals(solution(19), 'XIX')
    Test.assertEquals(solution(22), 'XXII')
    Test.assertEquals(solution(15), 'XV')
  });
  
  it ("should handle large numbers", () => {
    Test.expect(solution(1000) == 'M', '1000 should == "M"')
    Test.expect(solution(1001) == 'MI', '1001 should == "MI"')
    Test.expect(solution(1990) == 'MCMXC', '1990 should == "MCMXC"')
    Test.expect(solution(2007) == 'MMVII', '2007 should == "MMVII"')
    Test.expect(solution(2008) == 'MMVIII', '2008 should == "MMVIII"')
  });
  
  it ("random tests", () => {
    var tests = [
      [1004, 'MIV'],
      [2004, 'MMIV'],
      [3003, 'MMMIII'],
      [1991, 'MCMXCI'],
      [1992, 'MCMXCII'],
      [1992, 'MCMXCII'],
      [1992, 'MCMXCII'],
      [2091, 'MMXCI'],
      [1996, 'MCMXCVI'],
      [5748, 'MMMMMDCCXLVIII'],
      [8463, 'MMMMMMMMCDLXIII'],
      [9045, 'MMMMMMMMMXLV'],
      [7465, 'MMMMMMMCDLXV'],
      [2843, 'MMDCCCXLIII'],
      [0964, 'CMLXIV'],
      [8463, 'MMMMMMMMCDLXIII'],
      [345, 'CCCXLV'],
      [979, 'CMLXXIX'],
      [746, 'DCCXLVI']
    ]
    
    var tests2 = [
      [390, 'CCCXC'],
      [376, 'CCCLXXVI'],
      [189, 'CLXXXIX'],
      [8715, 'MMMMMMMMDCCXV'],
    ]
    
    Test.randomize(tests).forEach(v => Test.assertEquals(solution(v[0]), v[1]))
    Test.randomize(tests2).forEach(v => Test.expect(solution(v[0]) == v[1]))
  });
});
