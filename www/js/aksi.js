$(document).ready( function(){
  $.getJSON('https://sibulan.id/resi/drivers.php?tes=jurnalKeg',
    function(jks){
      console.log(jks);
      $("#aksibulan li").remove();
      $.each(jks,function(i,jk){
        $("#aksibulan").append(
          "<li class='list-group-item'>"+
          "<p class='nmlambung'>"+jk.nmLambung+"</p>"+
          "<p class='kegiatan'>"+jk.kegiatan+"</p>"+
          "<p class='tanggal'>"+jk.tanggal+"</p>"+
          "</li>"
        );
      });
    }
  );

  $("#btnAksi").click( function(){
    $(".app-mainbox").hide();
    $(".app-footer").hide();
    $(".hiddenForm").show();
  });

  $("#saveAksi").click( function(){
    var nmLambung = $("#nmLambung").val();
    var aktifitas = $("#berita").val();
    $.post('https://sibulan.id/resi/drivers.php?tes=aksikini',{
      nmlb : nmLambung,
      aksi : aktifitas
    },function(respon){
      $("#respon").html(respon);
      $("#respon").append(
        "<br /><a href='#' onClick=location.reload()>Periksa Kegiatan</a>"
      );
    });
  });

});
