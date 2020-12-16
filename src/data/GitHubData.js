import axios from 'axios';

const API = 'https://api.github.com/search/repositories?q='

const GitHubGetData = (searchStr) => {
        let queryString = '?q=' + encodeURIComponent(searchStr);
        let page = '&page=1'
        let perPage = '&per_page=10'
        let sort ='&sort=stars'
        let order = '&order=desc'
        axios.get(API+queryString+page+perPage+sort+order)
        .then(res => {
        const data = res.data;
        console.log(data);
        return data
    })
}

export default GitHubGetData
