import request from './request';

var userLocation = request('http://ip-api.com/json').then(data => ({ latitude: data.lat, longitude: data.lon }))


export default userLocation;