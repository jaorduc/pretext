var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "part-basics",
  "level": "1",
  "url": "part-basics.html",
  "type": "Part",
  "number": "I",
  "title": "Basics",
  "body": " Basics      "
},
{
  "id": "part-algebra",
  "level": "1",
  "url": "part-algebra.html",
  "type": "Part",
  "number": "II",
  "title": "Algebra",
  "body": " Algebra        "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
