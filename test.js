function findMyText(needle, replacement) {
  haystackText = document.getElementById("haystack").value;

  var match = new RegExp(needle, "ig");
  var replaced = "";
  if (replacement.length > 0) {
    replaced = haystackText.replace(match, replacement);
  } else {
    replaced = haystackText.replace(match, boldText);
  }
  document.getElementById("haystack").value = replaced;
}
