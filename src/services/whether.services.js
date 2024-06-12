import { VITE_API_KEY } from "@/constants";
import axios from "axios";

class whether {
    ForecastWhether = async ({ dateOptions, citiesForcasting }) => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
                q: citiesForcasting,
                days: String(dateOptions)
            },
            headers: {
                'x-rapidapi-key': VITE_API_KEY,
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        try {

            const response = await axios.request(options);
            return response.data
        } catch (error) {
            console.error(error);
            return null
        }
    }


}

export const Whether = new whether()
