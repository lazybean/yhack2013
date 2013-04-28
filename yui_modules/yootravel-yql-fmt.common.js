YUI.add('yootravel-yql-fmt', function (Y) {
  Y.namespace('yootravel.yql').fmt = {
    getWarningUK : "select * from html where url=\"https://www.gov.uk/foreign-travel-advice/{country}\" and xpath='//div[@class=\"inner\"]/p'",
    getVisa: "select * from html where url='http://china.visahq.com/requirements/{country}' and xpath='//div[@class=\"visa_info_req\"]/dl[@class!=\"\"]'",
    getBossImage: "select * from boss.search where q=\"{city} {country} -map\" and ck=\"dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz\" and secret=\"a3d93853ba3bad8a99a175e8ffa90a702cd08cfa\" and service=\"images\" and count=2",
    getWeather: "select item.description from weather.forecast where {woeid}",
    getEanLandmarks: "http://api.ean.com/ean-services/rs/hotel/v3/geoSearch?cid=55505&apiKey=e89mfmwrj3xhtvjnemeq4t9q&destinationString={city}&type=2",
    getCurrency: "use \"store://C3urhmUVXUw3Dg7dk6biSD\" as yootravel.xchange; select * from yootravel.xchange where from_country=\"{from}\" and to_country=\"{to}\""
  };

}, '0.0.1', {requires: []});
