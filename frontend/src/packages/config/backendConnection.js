export default function (Vue) {
	Vue._connection = {
			client_id: 2,
    	client_secret: '3cRchukxRKykuZr0XgdHZWI5eRD3jXqaTzTOWYK9',
    	domain: 'http://localhost:8000'
	}

	Object.defineProperties(Vue.prototype, {
		$_connection: {
			get: () => {
				return Vue._connection
			}
		}
	})
}
