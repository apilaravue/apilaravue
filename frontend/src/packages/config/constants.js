export default function (Vue) {
	Vue._constants = {
		constant1: 'example',
	}

	Object.defineProperties(Vue.prototype, {
		$_constants: {
			get: () => {
				return Vue._constants
			}
		}
	})
}
