var diff = (function(){
  return function(content){
    return {
      hunks: hunks(content),
      toHTML: function(){
        return this.hunks.map(hunk => {
          return "<h2>"+hunk.filename+":"+hunk.lineRange.from[0]+"</h2>" + hunk.content.split("\n").map(line=>{
            line = line.replace('<','&lt;')
            if(line.match(/^-/))
              return "<div class='minus'>" + line + "</div>"
            if(line.match(/^\+/))
              return "<div class='plus'>" + line + "</div>"
            return "<div>" + line + "</div>"
          }).join("")
        }).join("<hr>")
      }
    }
  }

  function filename(str){
    var names = str.split("\n").filter((line) => {
      return line.match(/^[-+]{3}/)
    }).map(function(name){
      return name.substr(6)
    })
    return names[0]
  }
  function lineRange(str){
    var matches = str.match(/@@ (.*) @@\n/)[1].split(" ")
    var from = matches[0].substr(1).split(",").map(Number)
    var to = matches[1].substr(1).split(",").map(Number)
    return {
      from: from,
      to: to
    }
  }
  function hunks(str){
    var lines = str.split("\n")
    var hs = []
    var hunk = []
    for(var i = 0; i < lines.length; i++){
      if(lines[i].match(/^diff --git/) && i != 0){
        hs.push(hunk.join("\n"))
        hunk = []
      }
      hunk.push(lines[i])
    }
    hs.push(hunk.join("\n"))
    return hs.map( h => {
      return {
        content: h.split("\n").filter(line=>{
          return !line.match(/^(diff --git|index|---|\+\+\+|@@)/)
        }).join("\n"),
        filename: filename(h),
        lineRange: lineRange(h)
      }
    })
    return hs
  }
})()
