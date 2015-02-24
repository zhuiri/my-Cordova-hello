var EmployeeService = function() {

    var url;

    this.initialize = function(serviceURL) {
        console.log("url error", serviceURL);
        url = serviceURL ? serviceURL : "http://latte.la/api2/tag/related_columns?limit=5&page=1&tag=%E6%97%85%E8%A1%8C";
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

    this.getColumn = function() {
      return $.ajax({url: url });

    }


}
