var expect = require("chai").expect;

it("should make an AJAX request to the correct URL", function() {
    spyOn($, "ajax");
    getProduct(123);
    expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/products/123");
});

function getProduct(id) {
    $.ajax({
        type: "GET",
        url: "/products/" + id,
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });
}