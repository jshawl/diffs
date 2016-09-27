const content = `diff --git first
index bcfe2e7..5468958 100644
--- a/diff.js
+++ b/diff.js
@@ -1,3 +1,25 @@
 var diff = (function(){
-  return function(){}
-})
diff --git second
index 926aa1d..91c015a 100644
--- a/test/index.html
+++ b/test/index.html
@@ -11,15 +11,12 @@
   <script src="lib/jasmine-2.5.2/jasmine-html.js"></script>
   <script src="lib/jasmine-2.5.2/boot.js"></script>

-  <!-- include source files here... -->
diff --git third
index 81bb922..fa6b03c 100644
--- a/test/spec/DiffSpec.js
+++ b/test/spec/DiffSpec.js
@@ -1,5 +1,37 @@
 describe("Diff", function(){
+  var d = diff(content)`

describe("Diff", function(){
  var d = diff(content)
  it("is a function", function(){
    expect(typeof diff).toBe("function")
  })
  it("has hunks", function(){
    expect(d.hunks.length).toBe(3)
  })
  it("has a filename", function(){
    expect(d.hunks[0].filename).toBe("diff.js")
  })
  it("has a line range", function(){
    expect(d.hunks[0].lineRange.from[0]).toBe(1)
    expect(d.hunks[0].lineRange.from[1]).toBe(3)
    expect(d.hunks[0].lineRange.to[0]).toBe(1)
    expect(d.hunks[0].lineRange.to[1]).toBe(25)
  })
  it("has a toHTML() method", function(){
    var html = d.toHTML()
    console.log(html)
  })
})
