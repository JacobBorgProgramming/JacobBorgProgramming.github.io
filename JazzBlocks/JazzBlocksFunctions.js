//JazzBlocksFunctions.js
//discourage selection with the "disableselect" function!
//Import JazzBlocksFunctions via link src="https://jacobborgprogramming.github.io/JazzBlocks/JazzBlocksFunctions.js"
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
