import axios from "axios"
import '../constants/AppConstants'
import AppConstants from "../constants/AppConstants";

const home_url = AppConstants.HOME_PATH
const url = `${home_url}/categories`

class CategoryService {
    getAllCategories() {
        return axios.get(url)
    }
}

const categoryerviceInstance = new CategoryService();
export default categoryerviceInstance;