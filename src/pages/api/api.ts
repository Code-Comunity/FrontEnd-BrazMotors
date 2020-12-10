import axios from 'axios';

const Axios = axios.create({
	baseURL: 'https://5500-ddb55904-db16-4ba4-a388-76505493c5dc.ws-us03.gitpod.io/',
	responseType: 'json',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'test',
    'X-Test': 'testing',
    'Access-Control-Allow-Origin': '*'
	}
})

export default Axios;