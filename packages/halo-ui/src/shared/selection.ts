export interface HaloSelectionOption {
  value: string | number
}

/**
 * Native uni-app radio and checkbox controls always emit strings. Using the
 * option index as the native value lets us restore the original value without
 * conflating `1` and `'1'`.
 */
export function getOptionByIndex<T extends HaloSelectionOption>(options: T[], rawIndex: string | number): T | undefined {
  const index = Number(rawIndex)

  return Number.isInteger(index) && index >= 0 ? options[index] : undefined
}

export function getOptionsByIndex<T extends HaloSelectionOption>(options: T[], rawIndexes: Array<string | number>): T[] {
  return rawIndexes
    .map((rawIndex) => getOptionByIndex(options, rawIndex))
    .filter((option): option is T => option !== undefined)
}
