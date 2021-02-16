import axios from 'axios';
import { ActionType } from '../type/type';
import {Dispatch}from 'redux'
import {Action} from '../action'


export const fetchDataApi = (term: string)=>async(dispatch: Dispatch<Action>)=>{

    dispatch({type: ActionType.SEARCH_REPO});

    try {
        const {data} = await axios.get(`https://registery.npmjs.org/-/v1/search`,{
            params: {text:term},
        });

        const names = data.objects.map((result: any)=>{

            return result.package.name;

        })

        dispatch({type:ActionType.SEARCH_REPO_SUCCESS, payload:names});
    } catch (error) {
        
        dispatch({type:ActionType.SEARCH_REPO_ERROR, payload:error.message});

    }

}