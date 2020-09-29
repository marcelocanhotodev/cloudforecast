'use strict';
const mapService = require('../../../services/map/index');

module.exports =  function (router) {
       router.get('/',  async function (req, res) {
        var payload = await mapService(req.query.dimensionx,req.query.dimensionx,req.query.clouds,req.query.airports);  
        return res.json(payload)
    });
};
