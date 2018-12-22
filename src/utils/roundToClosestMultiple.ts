export default (num: number, interval: number): number => {
	return Math.round(num / interval) * interval
}
