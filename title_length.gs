// Get Japanese page title length (max recommended is 32)

function TITLE_LENGTH(text) {
  if (text == null) return 0;
  var count = 0;
  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    if (
      (charCode >= 0xFF01 && charCode <= 0xFF60) || // Full-width ASCII variants
      (charCode >= 0xFFE0 && charCode <= 0xFFE6) || // Full-width symbols
      (charCode >= 0x4E00 && charCode <= 0x9FFF) || // Kanji
      (charCode >= 0x3040 && charCode <= 0x309F) || // Hiragana
      (charCode >= 0x30A0 && charCode <= 0x30FF)    // Katakana
    ) {
      count += 1; // Full-width = 1
    } else {
      count += 0.5; // Half-width = 0.5
    }
  }
  return count;
}
