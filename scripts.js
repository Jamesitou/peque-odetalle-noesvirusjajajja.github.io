$(document).ready(function () {

  $(document).on("click", ".no", function () {
    $('#f1').hide();
    $('#f2').css('display', 'flex');
  });

  $(document).on("click", ".weno", function () {
    $('#f2').hide();
    $('#f1').css('display', 'flex');
  });

  $(document).on("click", ".si", function () {
    $('#f1').hide();
    $('#f3').css('display', 'flex');
  });

  $(document).on("click", ".dale", function () {
    $('#f3').hide();
    $('#f4').css('display', 'flex');
  });

  $(document).on("click", ".rega", function () {
    $('#f4').hide();
    $('#f5').css('display', 'flex');
  });

  $(document).on("click", ".ojo", function () {
    $('#f5').hide();
    $('#f6').css('display', 'flex');
  });

  $(document).on("click", ".afi", function () {
    $('#f6').hide();
    $('#f7').css('display', 'flex');
    $('#f8').css('display', 'flex');
  });

  $(document).on("click", ".salu", function () {
    $('#f8').hide();
    $('#f9').css('display', 'flex');
  });

  $(document).on("click", ".copy", function () {
    $('#f9').hide();
    $('#f10, #f11').css('display', 'flex');
  });

  $(document).on("click", "span.go", function () {
    $('#f13').hide();
    $('#f14').css('display', 'block');
  });

  $(document).on("click", ".ca1", function () {
    $('#f12').css('display', 'flex');
    $('#f13').css('display', 'block');
  });

  $(document).on("click", ".ca3", function () {
    $('#f15').css('display', 'block');
    $('#f16').css('display', 'flex');
  });

  $(document).on("click", ".ca2", function () {
    $('#f18').css('display', 'block');
    $('#f19').css('display', 'flex');
  });

  $(document).on("click", ".carta", function () {
    $('#f12').hide();
  });

  $(document).on("click", ".anillo", function () {
    $('#f16').hide();
    $('#f17').css('display', 'flex');
  });

  $(document).on("click", ".marry", function () {
    $('#f15, #f17').hide();
  });

  $(document).on("click", ".meme", function () {
    $('#f19').hide();
    $('#f20').css('display', 'flex');
  });

  $(document).on("click", ".meme2", function () {
    $('#f20').hide();
    $('#f21').css('display', 'flex');
  });

  $(document).on("click", ".yes", function () {
    $('#f21').hide();
    $('#f22').css('display', 'flex');
  });

});
