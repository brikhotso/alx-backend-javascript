export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new RangeError('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const uint8 = new Uint8Array(buffer);
  uint8[position] = value;

  return new DataView(buffer);
}
