import {configureStore} from '@reduxjs/toolkit'
import Reducer from "./Reducer";
import api from "./api";

export default configureStore({
    reducer:{Reducer},
    middleware:[api]
})