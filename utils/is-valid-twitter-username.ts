export function isValidTwitterUsername(name: string) {
  return /^[a-zA-Z0-9_]{4,15}$/.test(name);
}
