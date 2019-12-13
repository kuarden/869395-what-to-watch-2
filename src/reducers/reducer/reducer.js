import {combineReducers} from "redux";
import {data} from "../data/data";
import {user} from "../user/user";

export const reducer = combineReducers({data, user});
