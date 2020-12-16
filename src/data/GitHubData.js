import axios from 'axios';

const API = 'https://api.github.com/search/repositories?q='

//API parameters have been individualized to be able to make filters if necessary in the future
//Passing them as parameters in the main call as follows:
// GitHubGetData(searchStr, page, resultsPerPage, sortBy, order)

const GitHubGetData = (searchStr) => {

        let queryString = '?q=' + encodeURIComponent(searchStr);
        let page = '&page=1'
        let perPage = '&per_page=10'
        let sort ='&sort=stars'
        let order = '&order=desc'

        axios.get(API+queryString+page+perPage+sort+order)
        .then(res => {
        const data = res.data.items;
        //lets make a more manageable array to work with.
        const dataBasic = data.map(result => (
            {
                name: result.name,
                url: result.url
            }
        ))
        return dataBasic

    })
}

export default GitHubGetData
