(function () {

  var backupStyle = editor.queryCommandValue('background');

  window.onload = function () {
    editor.getOpt('openBackground')({
      cancel:cancel,
      sureSave:sureSave
    });
  };

  function cancel(){
    editor.execCommand('background', backupStyle);
  }

  function sureSave(backgroundObj){
    var ubody = editor.container.querySelector(".edui-editor-iframeholder")
    if (ubody) {
      ubody.style.width = backgroundObj.pagewidth?(backgroundObj.pagewidth+ "px"):"100%";
    }
    editor.execCommand('background', backgroundObj);
    editor.fireEvent('saveScene');
  }
})();
