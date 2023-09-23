function convertToCamelCase(results, fields) {  //下划线转驼峰
    return results.map(row => {
      const camelCaseRow = {};
      for (const [key, value] of Object.entries(row)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
        camelCaseRow[camelCaseKey] = value;
      }
      return camelCaseRow;
    });
}

module.exports={
    convertToCamelCase,
}