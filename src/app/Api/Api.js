import axios from "axios";
const proxy = 'https://cors-anywhere.herokuapp.com/';

export const searchWeather = () => {
    const ApiWeatherLink = `https://api.darksky.net/forecast/d5a7dda54f011a00ba9ac7d784cc4581/48.8587,2.3429`
    return axios({
        method: 'get',
        url: proxy + ApiWeatherLink,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then((response) => {
        if (response.data) {
            const { currently, timezone } = response.data
            const daily = response.data.daily.data
            return {
                currently: currently,
                timezone: timezone,
                daily: daily
            }
        }
        throw "no data"
    })
}