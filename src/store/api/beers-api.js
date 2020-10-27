import axios from "axios";
import ServerRoutes from "./routes/index";


const getBeers = async (foodFilter, rangeFilter, page) => {
    let query = "?page=" + page + "&per_page=8";
    if (foodFilter) {
        query += "&food=" + foodFilter;
    }
    if (rangeFilter) {
        query += "&abv_gt=" + rangeFilter.gt + "&abv_lt=" + rangeFilter.lt;
    }
    try {
        const { status, data, error } = await axios.get(ServerRoutes.getBeers + query);
        return { status, data, error };
    } catch (error) {
        return {
            error: error.response.data.error,
            status: error.response.status
        };
    }
};

const beersApi = {
    getBeers
};

export default beersApi;
