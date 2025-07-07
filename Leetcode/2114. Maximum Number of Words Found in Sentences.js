var mostWordsFound = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const words = s[i].trim().split(" ");
    if (words.length > max) {
      max = words.length;
    }
  }

  return max;
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])