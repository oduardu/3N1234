const database = {
  cursos: [
    {
      id: 1100,
      nome: "Ciência da Computação",
      turno: 0,
      id_campus: 1,
      coordenadores:  [
        "Gian Carlo",
        "Braulio"
      ],
      descricao: 'O Curso de Ciência da Computação da UFFS é um curso que pretende,' + 
      'através de bases sólidas da área de computação, formar cientistas ' +
      'capazes de terem um papel importante em áreas da tecnologia da ' +
      'informação (TI), tanto na indústria quanto na academia. O curso oferece ' +
      'várias opções para o estudante se aprofundar: banco de dados, computação' +
      'gráfica, redes de computadores, engenharia de software, hardware e ' +
      'teoria da computação. Todos os professores se dedicam integralmente ao ' +
      'curso e todos possuem no mínimo o título de mestre, sendo que ' +
      'aproximadamente a metade tem o título de doutor. Esse perfil ' +
      'dos professores faz com que os estudantes tenham contato com assuntos ' +
      'de ponta da computação. Os estudantes têm acesso aos projetos de ' +
      'pesquisa e de extensão do curso, experiência profissional através do ' +
      'projeto FronteiraTec, além de várias opções de estágios em empresas ' +
      'da região.'
    },
    {
      id: 1101,
      nome: "Geografia",
      turno: 1,
      id_campus: 2,
      coordenadores:  [
        "Cristina"
      ],
      descricao: 'O Curso de Graduação em Geografia – Licenciatura tem como propósito a ' +
      'formação de profissionais da área de Geografia, voltados ao desempenho ' + 
      'das tarefas ligadas ao universo da educação, relativas à programação, à ' +
      'implementação, à pesquisa científica e à avaliação do processo ' +
      'ensino-aprendizagem no Ensino Fundamental e no Ensino Médio. O curso ' +
      'justifica-se, por um lado, pela alta demanda – nas regiões de ' +
      'abrangência da Universidade – de professores de Geografia com formação ' + 
      'específica e de qualidade. Por outro lado, a importância do curso ' +
      'reside na sua proposta formativa, subsidiando reflexões e ações de ' + 
      'cunho teórico e prático, relativas à problemática socioambiental e ao ' +
      'contexto cultural, econômico, político, científico e acadêmico em que ' +
      'está inserido. Assim, os objetivos do Curso de Graduação em Geografia - ' +
      'Licenciatura estão em sintonia com os princípios filosóficos que ' +
      'orientam a Universidade Federal da Fronteira Sul:' +
      'a) Garantir a formação de licenciados em Geografia que pensem, ' +
      'pratiquem e trabalhem o ensino de Geografia;' +
      'b) Tornar disponível aos graduandos um referencial teórico, ' +
      'metodológico e instrumental que lhes garanta condições de obter ' +
      'uma visão geral em Geografia e trabalhá-la no âmbito do ensino ' +
      'e da pesquisa;' +
      'c) Formar profissionais em Geografia para práticas de ensino e' +
      'de pesquisa com as bases teóricas e práticas para reflexão;' +
      'd) Promover a formação sociocultural e política dos acadêmicos' +
      'para aplicação em sua vida pessoal e profissional;' +
      'e) Desenvolver reflexão e competência crítica propositiva.'
    },
  ],
  ccrs: [
    {
      id: "GEX613",
      nome: "Programação I",
      horario: "Seg. 17:20 - 19:00",
      curso_id: 1100,
      semestre: 1,
      diaSem: "seg"
    },
    {
      id: "GEX610",
      nome: "Banco de Dados I",
      horario: "19:20 - 21:00",
      curso_id: 1100,
      semestre: 1,
      diaSem: "ter"
    },
    {
      id: "GEX623",
      nome: "Programação II",
      semestre: 2,
      horario: "Seg. 17:20 - 19:00",
      curso_id: 1100,
      diaSem: "seg"
    },
    {
      id: "GEX611",
      nome: "História da Fronteira Sul",	
      semestre: 1,
      horario: "20:30 - 22:00",
      curso_id: 1101,
      diaSem: "qua"
    },
  ],
};
module.exports = database;