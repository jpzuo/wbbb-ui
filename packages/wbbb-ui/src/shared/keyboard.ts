export function isKeyboardActivation(event: unknown) {
  const key = (event as { key?: string }).key
  return key === 'Enter' || key === ' ' || key === 'Spacebar'
}

export function preventKeyboardDefault(event: unknown) {
  ;(event as { preventDefault?: () => void }).preventDefault?.()
}
