const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    const config = {
      headers: {
          'Authorization': `Basic ${Buffer.from(
          'widget.builder.ba.project@gmail.com:Xd9Rwk5kyrRstNo4bliI5806'
        ).toString('base64')}`,
        'Accept': 'application/json'
      }
    }
    axios.get('https://widget-builder-ba-project-19.atlassian.net/rest/api/3/users/search', config)
            .then((response) => {
                res.send(response.data);
            })
            .catch(err => console.log(err));
});

router.get('/get-workload/:id', (req, res) => {
    const config = {
      headers: {
          'Authorization': `Basic ${Buffer.from(
          'widget.builder.ba.project@gmail.com:Xd9Rwk5kyrRstNo4bliI5806'
        ).toString('base64')}`,
        'Accept': 'application/json'
      }
    }
    axios.get(`https://widget-builder-ba-project-19.atlassian.net/rest/api/3/search?jql=assignee=${req.params.id}`, config)
            .then((response) => {
                res.send(response.data);
            })
            .catch(err => console.log(err));
});

module.exports = router;