// Test
const insertText = "안녕하세요 용석이 다빈이";
const badWords: Array<string> = ["용석", "다빈"];
// Test

const filtering: (text: string) => string = (text) => {
  const isFindBadText: string[] = badWords.filter((word) =>
    text.includes(word)
  );

  if (isFindBadText.length > 0) {
    let filterText = text;

    isFindBadText.forEach((word) => {
      if (text.includes(word)) {
        const filter = new RegExp(word, "g");
        const replacement = "*".repeat(word.length);
        filterText = filterText.replace(filter, replacement);
      }
    });
    return filterText;
  }
  return text;
};

const filterText = filtering(insertText);
