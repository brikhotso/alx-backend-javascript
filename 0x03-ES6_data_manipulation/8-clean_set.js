export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const fValues = [...set].filter((value) => typeof value === 'string' && value.startsWith(startString));
  const newString = fValues.map((value) => value.slice(startString.length));

  return newString.join('-');
}
