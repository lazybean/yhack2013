YUI.add('yootravel-yql-fmt', function (Y) {
  Y.namespace('yootravel.yql').fmt = {
    getWarningUK : "select * from html where url=\"https://www.gov.uk/foreign-travel-advice/{country}\" and xpath='//div[@class=\"inner\"]/p'",
    getVisa: "select * from html where url='http://china.visahq.com/requirements/{country}' and xpath='//div[@class=\"visa_info_req\"]/dl[@class!=\"\"]'",
    getWarningUS : ""
  };

}, '0.0.1', {requires: []});
