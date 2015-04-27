/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    index: function(req, res) {
        var options = {
            region: "Kerala",
            limit: 7,
            start_date: (new Date()).toISOString()
        };
        getEvents(options, function(err, data) {
            return res.view("homepage", {
                events: data
            });
        });
    }
};

function getEvents(opt, callback) {
    var request = require("request");
    var url = "https://reps.mozilla.org/api/v1/event/?";
    if (opt.region)
        url += "&region=" + opt.region;
    if (opt.limit)
        url += "&limit=" + opt.limit;
    if (opt.start_date)
        url += "&start__gte=" + opt.start_date;
    request(url, function(error, response, data) {
        if (!error) {
            callback(error, JSON.parse(data));
        } else {
            console.log(error);
        }
    });
}
