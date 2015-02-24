var EmployeeService = function() {

    var url;

    this.initialize = function(serviceURL) {
        console.log("url error", serviceURL);
        url = serviceURL ? serviceURL :
        //"http://latte.la/api2/tag/related_columns?limit=10&page=1&tag=%E6%97%A5%E6%9C%AC";//日本
        //"http://latte.la/api2/tag/related_columns?limit=50&page=1&tag=%E6%81%8B%E6%84%9B";//恋愛
        //"http://latte.la/api2/tag/related_columns?limit=10&page=1&tag=%E7%BE%8E%E5%AE%B9%E9%99%A2";//美容院
        //"http://latte.la/api2/tag/related_columns?limit=50&page=1&tag=%E5%86%99%E7%9C%9F";//写真
        "http://latte.la/api2/tag/related_columns?limit=10&page=10&tag=%E6%97%85%E8%A1%8C";//旅行
        //"http://localhost:5000/employees";

        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }

    this.getColumn = function(searchKey) {
      return $.ajax({url: url});

    }


}
