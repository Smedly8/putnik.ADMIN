export const shortText = (text) => {
  const limit = 32
  if (text.length > limit) {
    return text.slice(0, limit - 4).trim() + '...'
  }
  return text
}
