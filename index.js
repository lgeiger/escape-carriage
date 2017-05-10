function escapeCarriageReturn(txt) {
  if (!txt) return '';
  if (!/\r/.test(txt)) return txt;
  txt = txt.replace(/\r+\n/gm, '\n'); // \r followed by \n --> newline
  while (/\r[^$]/.test(txt)) {
    var base = /^(.*)\r+/m.exec(txt)[1];
    var insert = /\r+(.*)$/m.exec(txt)[1];
    insert = insert + base.slice(insert.length, base.length);
    txt = txt.replace(/\r+.*$/m, '\r').replace(/^.*\r/m, insert);
  }
  return txt;
}

module.exports = escapeCarriageReturn;
