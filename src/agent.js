//SUPERAGENT CALL REST API
/*import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://conduit.productionready.io/api';
const responseBody = res => res.body;
const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
  all: page =>
    requests.get(`/datasets?limit=10`)
};

export default {
  Articles
};*/


//SUPERAGENT MOCK
import Dataset from './data/dataset'
const datasets = Dataset.getDataset();

var request = require('superagent');
var mock = require('superagent-mock');

var config = [
    {
        pattern: 'https://domain.example(.*)',
        fixtures: function (match, params, headers) {
            return datasets
        },
        get: function (match, data) {
            return data
        }
    }
];

mock(request, config);

const Articles = {
  all: page =>
    request
    .get('https://domain.example')
    .end((err, res) => {
        console.log('calling mock service');
    })
};

export default {
  Articles
};