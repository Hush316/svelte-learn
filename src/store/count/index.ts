import { writable } from 'svelte/store'

export const count = writable(0)

export function decrement() {
  count.update((n) => n - 1)
}

export function incrementer() {
  count.update((n) => n + 1)
}

export function reset() {
  count.set(0)
}
