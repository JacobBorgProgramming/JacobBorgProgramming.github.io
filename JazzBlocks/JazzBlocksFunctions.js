//JazzBlocksFunctions.js
//discourage selection with the "disableselect" function!
//Import JazzBlocksFunctions via below code
//<script type="text/javascript" src="https://jacobborgprogramming.github.io/JazzBlocks/JazzBlocksFunctions.js"></script>

//JazzBlock DisableSelect (start)
function disableselect(e) {
  return false
}

function reEnable() {
  return true
}

document.onselectstart = new Function ("return false")

if (window.sidebar) {
  document.onmousedown = disableselect
  document.onclick = reEnable
}
//(end)
