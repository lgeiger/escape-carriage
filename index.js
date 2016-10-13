function escapeCarriageReturn(txt) {
  txt = txt.replace(/\r+\n/gm, '\n'); // \r followed by \n --> newline
  while (txt.search(/\r/g) > -1) {
    let base = txt.match(/^.*\r+/m)[0].replace(/\r/, '');
    let insert = txt.match(/\r+.*$/m)[0].replace(/\r/, '');
    insert = insert + base.slice(insert.length, base.length);

    txt = txt.replace(/\r+.*$/m, '\r').replace(/^.*\r+/m, insert);
  }
  return txt;
}

module.exports = escapeCarriageReturn;
