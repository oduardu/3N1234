$(document).ready(function() {
  
  $('#liveToast').show();

  setTimeout(() => {
    $('#liveToast').hide();
  }, "5000");

  $("input[type='checkbox']").change(function() {
    if ($(this).is(':checked')) {
      $('body').attr('data-bs-theme', 'dark');
    } else {
      $('body').attr('data-bs-theme', 'light');
    }
  })

  $('#selected-cc').change(function() {
    showCurso($(this).attr('id'))
  })

  $('#selected-geo').change(function() {
    showCurso($(this).attr('id'))
  })

  $('#selected-ciencia-sociais').change(function() {
    showCurso($(this).attr('id'))
  })


  function showCurso(id) {
    $('#ciencia-computacao, #geografia, #ciencia-sociais').hide();
    switch (id) {
      case 'selected-cc':
        $('#ciencia-computacao').show();
        break;
      case 'selected-geo':
        $('#geografia').show();
        break;
      case 'selected-ciencia-sociais':
        $('#ciencia-sociais').show();
        break;
      default:
        break;
    }
  }
})