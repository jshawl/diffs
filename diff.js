          return "<h3>"+hunk.filename+"</h3>" + hunk.content.split("\n").map(line=>{
	    if(line === '') return
    if(names[0] === "ev/null")
      return names[1] + " created"
    if(names[1] === "ev/null")
      return names[0] + " deleted"
    return names[0] + " modified"
          return !line.match(/^(diff --git|index|---|\+\+\+|@@|deleted file mode|new file mode)/)