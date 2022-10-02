export function genkoYoshiFormat(text) {
  let lines = text.split(/\n/).map(v => v.replace(/\n/, ''))

  let splittedLines = lines.reduce((result, line) => {
    let splitted = []
    const maxLength = 20

    for (let i = 0; i < line.length; i += maxLength) {
      splitted.push(line.substr(i, maxLength))
    }
    return result.concat(splitted)
  }, [])

  const result = splittedLines.join('\n')
  return result
}
