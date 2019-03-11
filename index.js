const request = require('request');
const cheerio = require('cheerio');

const CURR_ELEMENT_COUNT = 7;

function checkForNewAwards() {
    request('https://polakpotrafi.pl/projekt/auto-stop-race-2019/', function (err, resp, html) {
        if (!err) {
            const $ = cheerio.load(html);
            const selectors = ['.card.clearfix'];
            selectors.forEach(selector => {
                if ($(selector).length > CURR_ELEMENT_COUNT) {
                    console.log('NEW AWARD!!!!!!!!!!!!!!!');
                }
                else {
                    console.log(':(');
                }
            });
        }
    });
}
checkForNewAwards();
setInterval(checkForNewAwards, 10 * 1000);