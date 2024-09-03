function countWords(lines, p) {
  //   console.log(lines, p);
  if (lines) {
    let linesBackToString;
    let sortable = [];
    let sortedWords = [];
    // console.log(lines);
    linesBackToString = p.join(lines, " ");
    // console.log(entirePlay);
    // let splitted = p.splitTokens(entirePlay, '.,?!:()){}[]] "');
    let splitted = linesBackToString
      .replace(/[`'".,;:|?¿!¡() ]/g, " ")
      .toLowerCase()
      .split(/\s/);
    // console.log(splitted);
    linesBackToString = p.join(splitted, " ");
    // console.log(entirePlay);

    function wordFreq(string) {
      return string
        .replace(/[`'".,;:|?¿!¡(){}[] ]/g, "")
        .split(/\s/)
        .reduce(
          (map, word) =>
            Object.assign(map, {
              [word.toLowerCase()]: map[word] ? map[word] + 1 : 1,
            }),
          {},
        );
    }
    sortable = wordFreq(linesBackToString);
    for (var word in sortable) {
      sortedWords.push({ key: word, value: sortable[word] });
    }
    // console.log(sortable);
    return sortedWords.sort((b, a) => a.value - b.value);
  } else {
    return;
  }
}
export default countWords;
