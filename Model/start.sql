CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  turno INTEGER,
  id_campus INTEGER,
  coordenadores TEXT[],
  descricao TEXT
);

INSERT INTO cursos (id, nome, turno, id_campus, coordenadores, descricao) VALUES
(1100, 'Ciência da Computação', 0, 1, ARRAY['Gian Carlo', 'Braulio'], 'O Curso de Ciência da Computação da UFFS é um curso que pretende, através de bases sólidas da área de computação, formar cientistas capazes de terem um papel importante em áreas da tecnologia da informação (TI), tanto na indústria quanto na academia. O curso oferece várias opções para o estudante se aprofundar: banco de dados, computação gráfica, redes de computadores, engenharia de software, hardware e teoria da computação. Todos os professores se dedicam integralmente ao curso e todos possuem no mínimo o título de mestre, sendo que aproximadamente a metade tem o título de doutor. Esse perfil dos professores faz com que os estudantes tenham contato com assuntos de ponta da computação. Os estudantes têm acesso aos projetos de pesquisa e de extensão do curso, experiência profissional através do projeto FronteiraTec, além de várias opções de estágios em empresas da região.'),
(1101, 'Geografia', 1, 2, ARRAY['Cristina'], 'O Curso de Graduação em Geografia – Licenciatura tem como propósito a formação de profissionais da área de Geografia, voltados ao desempenho das tarefas ligadas ao universo da educação, relativas à programação, à implementação, à pesquisa científica e à avaliação do processo ensino-aprendizagem no Ensino Fundamental e no Ensino Médio. O curso justifica-se, por um lado, pela alta demanda – nas regiões de abrangência da Universidade – de professores de Geografia com formação específica e de qualidade. Por outro lado, a importância do curso reside na sua proposta formativa, subsidiando reflexões e ações de cunho teórico e prático, relativas à problemática socioambiental e ao contexto cultural, econômico, político, científico e acadêmico em que está inserido. Assim, os objetivos do Curso de Graduação em Geografia - Licenciatura estão em sintonia com os princípios filosóficos que orientam a Universidade Federal da Fronteira Sul.');

CREATE TABLE ccrs (
  id VARCHAR(10) PRIMARY KEY,
  nome VARCHAR(255),
  horario VARCHAR(255),
  curso_id INTEGER REFERENCES cursos(id),
  semestre INTEGER,
  diaSem VARCHAR(10)
);

INSERT INTO ccrs (id, nome, horario, curso_id, semestre, diaSem) VALUES
('GEX613', 'Programação I', 'Seg. 17:20 - 19:00', 1100, 1, 'seg'),
('GEX610', 'Banco de Dados I', '19:20 - 21:00', 1100, 1, 'ter'),
('GEX623', 'Programação II', 'Seg. 17:20 - 19:00', 1100, 2, 'seg'),
('GEX611', 'História da Fronteira Sul', '20:30 - 22:00', 1101, 1, 'qua');
