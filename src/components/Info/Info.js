import React from 'react';
import './Info.css';

function Info() {
  const cursoInfo = [
    { id: 'curso-name', value: 'Ciência da Computação' },
    { id: 'turno', value: 'Noturno' },
    { id: 'campus', value: 'Campus Chapecó' },
    { id: 'coordenacao', value: 'Coordenação: Prof. Dr. Fulano de Tal' },
    { id: 'descricao', value: 'Descrição do curso de Ciência da Computação.' }
  ];

  const ccrsInfo = [
    { semestre: '1º Semestre', disciplinas: [
      { dia: 'Segunda-feira', horario: '19:00 - 22:00', disciplina: 'Algoritmos e Estruturas de Dados' },
      { dia: 'Terça-feira', horario: '19:00 - 22:00', disciplina: 'Redes de Computadores' },
      { dia: 'Quarta-feira', horario: '19:00 - 22:00', disciplina: 'Banco de Dados' },
      { dia: 'Quinta-feira', horario: '19:00 - 22:00', disciplina: 'Programação Orientada a Objetos' },
      { dia: 'Sexta-feira', horario: '19:00 - 22:00', disciplina: 'Engenharia de Software' }
    ] },
    { semestre: '2º Semestre', disciplinas: [
      { dia: 'Segunda-feira', horario: '19:00 - 22:00', disciplina: 'Algoritmos e Estruturas de Dados' },
      { dia: 'Terça-feira', horario: '19:00 - 22:00', disciplina: 'Redes de Computadores' },
      { dia: 'Quarta-feira', horario: '19:00 - 22:00', disciplina: 'Banco de Dados' },
      { dia: 'Quinta-feira', horario: '19:00 - 22:00', disciplina: 'Programação Orientada a Objetos' },
      { dia: 'Sexta-feira', horario: '19:00 - 22:00', disciplina: 'Engenharia de Software' }
    ] }
  ];

  return (
      <section className="container-main">
        <div className="curso-header">
            <h2>Ciência da Computação</h2>
        </div>
        <div className="container-info">
          <div className="curso-info">
            {cursoInfo.slice(1).map(info => (
              <span key={info.id} id={info.id}>{info.value}</span>
            ))}
            <p className="descricao">{cursoInfo.find(info => info.id === 'descricao').value}</p>
          </div>
          <div className="ccrs">
            {ccrsInfo.map(semestre => (
              <div key={semestre.semestre}>
                <h3>{semestre.semestre}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Dia</th>
                      <th>Horário</th>
                      <th>Disciplina</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semestre.disciplinas.map(disciplina => (
                      <tr key={disciplina.dia}>
                        <td>{disciplina.dia}</td>
                        <td>{disciplina.horario}</td>
                        <td>{disciplina.disciplina}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Info;