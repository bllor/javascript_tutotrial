function test() {
  let result = "";
  if (a) {
    if (!b) {
      result = "c";
    }
  } else {
    result = "a";
  }
  result += "b";
  return result;
}

function test() {
  let result = "";
  if (!a) {
    result += "ab";
    return;
  }
  if (!b) {
    result = "c";
  }
  result += "b";
}
