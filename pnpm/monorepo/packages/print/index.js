import { add } from '@whinc/add'
import { sub } from '@whinc/sub'
export function print() {
  console.log('1 + 2 = %d', add(1, 2))
  console.log('1 - 2 = %d', sub(1, 2))
}

if (import.meta.url === `file://${process.argv[1]}`) {
  print()
}