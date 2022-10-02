export function genkoYoshiFormat(text) {
  let lines = text.split(/\n/).map(v => v.replace(/\n/, ''))
  const result = lines.join('\n')
  return result
}
