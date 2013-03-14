var timerId;
$(function() {
  // タイマー開始ボタンの動作
  $("#start_timer").click(function(){
    if (timerId != null) {
      clearInterval(timerId);
    }
    var ltLength = $("#lt_length").val();
    if (ltLength == null || ltLength == "") {
      ltLength = 300;
    }
    $("#bar").css("top","0%");
    $("#bar").css("height","100%");
    renderTime(ltLength);
    var startTime = new Date();
    timerId = setInterval(
      function() {
        var currentTime = new Date();
        var elapsed = Math.round((currentTime - startTime) / 1000);
        var remain = ltLength - elapsed;
        var rate = elapsed / ltLength * 100;
        $("#bar").css("top",rate + "%");
        $("#bar").css("height",(100 - rate) + "%");
        renderTime(remain);
        if (remain == 0) {
          timeup();
        }
      },1000);
   });

  // タイマー停止ボタンの動作
  $("#stop_timer").click(function(){
    if (timerId != null) {
      clearInterval(timerId);
    }
  })

})

function renderTime(len) {
  var min = Math.floor(len / 60);
  var sec = Math.floor(len % 60);
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  $("#rem_test").html(min + ':'+ sec);
}

function timeup() {
  clearInterval(timerId);
  $("#rem_test").html("終了！");
}

