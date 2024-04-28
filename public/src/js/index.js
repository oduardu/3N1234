const apiUrl = 'http://localhost:3001/'

const badgeNoturno = 'badge bg-secondary-subtle border border-secondary-subtle text-secondary-emphasis rounded-pill'
const badgeVespertino = 'badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill'
const badgeMatutino = 'badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill'

$(document).ready(function() {

  async function getCursos() {
    try {
      const response = await fetch(apiUrl + 'cursos');
      const cursos = await response.json();
      $('#dropdown-cursos').empty().append('<option disabled selected>Selecione o curso</option>');
      cursos.forEach((curso, index) => {
        $('#dropdown-cursos').append(`<option id="curso-${curso.id}" value="${curso.id}">${curso.nome}</option>`);
        if (index === 0) {
          $('#dropdown-cursos').val(curso.id).change();
        }
      });
      $('#error-curso').hide();
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
      $('#without-curso').show();
      $('#select-curso').hide();
    }
  }

  getCursos();

  async function getCcrs(cursoId) {
    try {
      const response = await fetch(apiUrl + 'curso-ccrs/' + cursoId);
      const ccrs = await response.json();
      return ccrs;
    } catch (error) {
      console.error('Erro ao buscar informações da ccr:', error);
      return [];
    }
  }

  async function getCurso(cursoId) {
    try {
      const response = await fetch(apiUrl + 'cursos/' + cursoId);
      const curso = await response.json();
      showCurso(curso);
    } catch (error) {
      console.error('Erro ao buscar informações do curso:', error);
    }
  }
  
  $('#dropdown-cursos').change(function() {
    const selected = $(this).children("option:selected").val();
    getCurso(selected);
  });

  $('#liveToast').show();

  setTimeout(() => {
    $('#liveToast').hide();
  }, 5000);

  $("input[type='checkbox']").change(function() {
    $('body').attr('data-bs-theme', $(this).is(':checked') ? 'dark' : 'light');
  });

  function showCurso(curso) {
    $('#ccrs').empty();
    let coordenacao = 'Coordenadores: ' + curso.coordenadores.join(' e ') + '.';
    $('#curso-name').html(curso.nome);
    selectedBadge(curso.turno);
    selectCampus(curso.id_campus);
    $('#descricao').html(curso.descricao);
    $('#coordenacao').html(coordenacao);

    ccrs = getCcrs(curso.id)
    showCcrs(ccrs);
  }
})

function selectedBadge(turno) {
  const element = $('#turno');
  switch (turno) {
    case 0:
      element.attr('class', badgeMatutino).html('Matutino');
      break;
    case 1:
      element.attr('class', badgeVespertino).html('Vespertino');
      break;
    case 2:
      element.attr('class', badgeNoturno).html('Noturno');
      break;
  }
}

function showCcrs(ccrs) {
  ccrs.then(ccrs => {
    const semestres = ccrs.reduce((acc, ccr) => {
      const semestreKey = `${ccr.semestre}`;
      const diaKey = `${ccr.diaSem}`;
      acc[semestreKey] = acc[semestreKey] || {};
      acc[semestreKey][diaKey] = acc[semestreKey][diaKey] || [];
      acc[semestreKey][diaKey].push({ nome: ccr.nome, horario: ccr.horario });
      return acc;
    }, {});
    let html = '';
    Object.keys(semestres).sort().forEach(semestre => {
      html += `<div class="card mb-3">
        <div style="background-color: #00693E;" class="card-header text-white">Semestre ${semestre}</div>
        <div class="card-body">`;

      Object.keys(semestres[semestre]).sort().forEach(diaSem => {
        let diaNomeCompleto = '';
        switch (diaSem.toLowerCase()) {
          case 'seg':
            diaNomeCompleto = 'Segunda-feira';
            break;
          case 'ter':
            diaNomeCompleto = 'Terça-feira';
            break;
          case 'qua':
            diaNomeCompleto = 'Quarta-feira';
            break;
          case 'qui':
            diaNomeCompleto = 'Quinta-feira';
            break;
          case 'sex':
            diaNomeCompleto = 'Sexta-feira';
            break;
        }
        let diaHeader = `
          <div class="divider"></div>
          <div class="mb-2">
          <h5 class="card-title">Dia: ${diaNomeCompleto}</h5>
          <div>`;
        html += diaHeader;

        semestres[semestre][diaSem].forEach(ccr => {
          let horarioRow = `<p class="card-text"><strong>${ccr.nome}</strong>: ${ccr.horario}</p>`;
          html += horarioRow;
        });
        html += '</div></div>';
      });
      html += '</div></div>';
    });
    $('#ccrs').empty().append(html); // Alteração para evitar duplicação: limpar e depois adicionar o HTML gerado
  });
}
function selectCampus(campus) {
  const element = $('#campus');
  switch (campus) {
    case 1:
      element.html('Chapecó');
      break;
    case 2:
      element.html('Laranjeiras');
      break;
  }
}