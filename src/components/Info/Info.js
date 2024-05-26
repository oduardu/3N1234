import React from 'react';
import './Info.css';

function Info() {
  return (
      <section className="container-main">
        <div className="curso-header">
          <h2 id="curso-name">Ciência da Computação</h2>
        </div>
        <div className="container-info">
          <div className="curso-info">
            <span className="turno">Noturno</span>
            <span id="campus">Campus Chapecó</span>
            <span id="coordenacao">Coordenação: Prof. Dr. Fulano de Tal</span>
            <p id="descricao">Descrição do curso de Ciência da Computação.</p>
          </div>
          <div className="ccrs">
            <h3>1º Semestre</h3>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário</th>
                  <th>Disciplina</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Algoritmos e Estruturas de Dados</td>
                </tr>
                <tr>
                  <td>Terça-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Redes de Computadores</td>
                </tr>
                <tr>
                  <td>Quarta-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Banco de Dados</td>
                </tr>
                <tr>
                  <td>Quinta-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Programação Orientada a Objetos</td>
                </tr>
                <tr>
                  <td>Sexta-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Engenharia de Software</td>
                </tr>
              </tbody>
            </table>
            <h3>2º Semestre</h3>
            <table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Horário</th>
                  <th>Disciplina</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Algoritmos e Estruturas de Dados</td>
                </tr>
                <tr>
                  <td>Terça-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Redes de Computadores</td>
                </tr>
                <tr>
                  <td>Quarta-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Banco de Dados</td>
                </tr>
                <tr>
                  <td>Quinta-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Programação Orientada a Objetos</td>
                </tr>
                <tr>
                  <td>Sexta-feira</td>
                  <td>19:00 - 22:00</td>
                  <td>Engenharia de Software</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  );
}

export default Info;

