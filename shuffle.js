function shuffle(a) {
  var j, x, i;

  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;
}

var collection = eval($('#js-products').attr('data-define'));

$.ajax({
  url: "/admin/" + collection.type + "s/" + collection.collectionId + "/order.json",
  dataType: "json",
  type: "PUT",
  data: {
    products: shuffle(collection.selectedProducts),
    sort_order: "manual",
    page_size: 1000
  }
}).done(function() {
  collection._refreshProductsList();
});
