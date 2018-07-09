import request from './request';

var userLocation = request('https://ipinfo.io/geo/?token=2ef535515b7afb').then(data => {
    let coords = data.loc.split(',');
    return { latitude: coords[0], longitude: coords[1] };
})


export default userLocation;