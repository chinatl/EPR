import request from './request'
export function get(url, data) {
	return request({
		url: url,
		method: 'get',
		data: data
	})
};
export function post(url, data) {
	return request.post(url, data)
}
