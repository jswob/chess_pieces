module.exports = function test(testName, testFunction) {
  const { data, results } = testFunction();

  let errors = [];

  results.forEach((result, index) => {
    if (!result)
      errors.push({
        index: index,
        input: data[index].input,
        expectedOutput: data[index].output,
      });
  });

  return {
    test: testName,
    result: `${results.length - errors.length}/${results.length}`,
    errors: errors,
  };
};
