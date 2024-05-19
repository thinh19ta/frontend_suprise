import axios from "axios"
import '../constants/AppConstants'
import AppConstants from "../constants/AppConstants";

const home_url = AppConstants.HOME_PATH
const url = `${home_url}/accounts`

class AccountService{

    register(account){
        return axios.post(`${url}/register`, account)
    }

    login(account){
        return axios.post(`${url}/login`, account)
    }

    getAccountById(accountId){
        return axios.get(`${url}/${accountId}`)
    }



}

const accountServiceInstance = new AccountService()
export default accountServiceInstance