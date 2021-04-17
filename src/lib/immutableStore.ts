//! useless piece of CRAP

import { writable, Writable } from 'svelte/store'
import { produce } from 'immer'

export type WritableImmutable<TData> = Writable<TData> & {
	update: (fn: (value: TData) => TData | void) => void
}

const writableImmutable = <TData>(value: TData): WritableImmutable<TData> => {
	const writableFns = writable(value)
	const { update } = writableFns

	return {
		...writableFns,
		update: (fn: (value: TData) => TData | void) => update((value) => produce(value, fn))
	}
}

export const createImmutableStore = <TData, TActions>(
	value: TData,
	actionsFn: (writableImmutableFns: WritableImmutable<TData>) => TActions
): { subscribe: Writable<TData>['subscribe'] } & TActions => {
	const writableImmutableFns = writableImmutable(value)
	const { subscribe } = writableImmutableFns

	return { subscribe, ...actionsFn(writableImmutableFns) }
}
