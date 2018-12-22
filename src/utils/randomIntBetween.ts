export default (min: number, max: number): number =>
	Math.floor(Math.random() * (max + 1)) + min
