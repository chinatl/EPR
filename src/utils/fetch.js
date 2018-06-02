import request from './request'
import config from '@/config'
import qs from 'qs'
export function get(url, data) {
	return request({
		url: config + url,
		method: 'get',
		params: data
	})
};
export function post(url, data) {
	return request.post(config + url, qs.stringify(data))
}
