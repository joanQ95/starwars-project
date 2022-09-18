import axios from 'axios'
export const GET_PEOPLE = 'GET_PEOPLE'

export function getCharacters(){
	return function(dispatch){
		//return axios.get('http://localhost:3001/recipes')
		return axios.get('https://www.swapi.tech/api/people?page=1&limit=100')
		.then(( json ) => dispatch({type: GET_PEOPLE, payload: json.data.results}))
	}
}