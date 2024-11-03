var data = [
    {
      "name": "World Cup 2018",
      "groups": [
        {
          "name": "Group A",
          "standings": [
            { "pos": 1, "team": { "name": "Uruguay", "code": "URU" }, "played": 3, "won": 3, "drawn": 0, "lost": 0, "goals_for": 5, "goals_against": 0, "pts": 9 },
            { "pos": 2, "team": { "name": "Russia", "code": "RUS" }, "played": 3, "won": 2, "drawn": 0, "lost": 1, "goals_for": 8, "goals_against": 4, "pts": 6 },
            { "pos": 3, "team": { "name": "Saudi Arabia", "code": "KSA" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 2, "goals_against": 7, "pts": 3 },
            { "pos": 4, "team": { "name": "Egypt", "code": "EGY" }, "played": 3, "won": 0, "drawn": 0, "lost": 3, "goals_for": 2, "goals_against": 6, "pts": 0 }
          ]
        },
        {
          "name": "Group B",
          "standings": [
            { "pos": 1, "team": { "name": "Spain", "code": "ESP" }, "played": 3, "won": 1, "drawn": 2, "lost": 0, "goals_for": 6, "goals_against": 5, "pts": 5 },
            
            { "pos": 2, "team": { "name": "Portugal", "code": "POR" }, "played": 3, "won": 1, "drawn": 2, "lost": 0, "goals_for": 5, "goals_against": 4, "pts": 5 },
            { "pos": 3, "team": { "name": "Iran", "code": "IRN" }, "played": 3, "won": 1, "drawn": 1, "lost": 1, "goals_for": 2, "goals_against": 2, "pts": 4 },
            { "pos": 4, "team": { "name": "Morocco", "code": "MAR" }, "played": 3, "won": 0, "drawn": 1, "lost": 2, "goals_for": 2, "goals_against": 4, "pts": 1 }
          ]
        },
        {
          "name": "Group C",
          "standings": [
            { "pos": 1, "team": { "name": "France", "code": "FRA" }, "played": 3, "won": 2, "drawn": 1, "lost": 0, "goals_for": 3, "goals_against": 1, "pts": 7 },
            { "pos": 2, "team": { "name": "Denmark", "code": "DEN" }, "played": 3, "won": 1, "drawn": 2, "lost": 0, "goals_for": 2, "goals_against": 1, "pts": 5 },
            { "pos": 3, "team": { "name": "Peru", "code": "PER" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 2, "goals_against": 2, "pts": 3 },
            { "pos": 4, "team": { "name": "Australia", "code": "AUS" }, "played": 3, "won": 0, "drawn": 1, "lost": 2, "goals_for": 2, "goals_against": 5, "pts": 1 }
          ]
        },
        {
          "name": "Group D",
          "standings": [
            { "pos": 1, "team": { "name": "Croatia", "code": "CRO" }, "played": 3, "won": 3, "drawn": 0, "lost": 0, "goals_for": 7, "goals_against": 1, "pts": 9 },
            { "pos": 2, "team": { "name": "Argentina", "code": "ARG" }, "played": 3, "won": 1, "drawn": 1, "lost": 1, "goals_for": 3, "goals_against": 5, "pts": 4 },
            { "pos": 3, "team": { "name": "Nigeria", "code": "NGA" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 3, "goals_against": 4, "pts": 3 },
            { "pos": 4, "team": { "name": "Iceland", "code": "ISL" }, "played": 3, "won": 0, "drawn": 1, "lost": 2, "goals_for": 2, "goals_against": 5, "pts": 1 }
          ]
        },
        {
          "name": "Group E",
          "standings": [
            { "pos": 1, "team": { "name": "Brazil", "code": "BRA" }, "played": 3, "won": 2, "drawn": 1, "lost": 0, "goals_for": 5, "goals_against": 1, "pts": 7 },
            { "pos": 2, "team": { "name": "Switzerland", "code": "SUI" }, "played": 3, "won": 1, "drawn": 2, "lost": 0, "goals_for": 5, "goals_against": 4, "pts": 5 },
            { "pos": 3, "team": { "name": "Serbia", "code": "SRB" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 2, "goals_against": 4, "pts": 3 },
            { "pos": 4, "team": { "name": "Costa Rica", "code": "CRC" }, "played": 3, "won": 0, "drawn": 1, "lost": 2, "goals_for": 2, "goals_against": 5, "pts": 1 }
          ]
        },
        {
          "name": "Group F",
          "standings": [
            { "pos": 1, "team": { "name": "Sweden", "code": "SWE" }, "played": 3, "won": 2, "drawn": 0, "lost": 1, "goals_for": 5, "goals_against": 2, "pts": 6 },
            { "pos": 2, "team": { "name": "Mexico", "code": "MEX" }, "played": 3, "won": 2, "drawn": 0, "lost": 1, "goals_for": 3, "goals_against": 4, "pts": 6 },
            { "pos": 3, "team": { "name": "South Korea", "code": "KOR" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 3, "goals_against": 3, "pts": 3 },
            { "pos": 4, "team": { "name": "Germany", "code": "GER" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 2, "goals_against": 4, "pts": 3 }
          ]
        },
        {
          "name": "Group G",
          "standings": [
            { "pos": 1, "team": { "name": "Belgium", "code": "BEL" }, "played": 3, "won": 3, "drawn": 0, "lost": 0, "goals_for": 9, "goals_against": 2, "pts": 9 },
            { "pos": 2, "team": { "name": "England", "code": "ENG" }, "played": 3, "won": 2, "drawn": 0, "lost": 1, "goals_for": 8, "goals_against": 3, "pts": 6 },
            { "pos": 3, "team": { "name": "Tunisia", "code": "TUN" }, "played": 3, "won": 1, "drawn": 0, "lost": 2, "goals_for": 5, "goals_against": 8, "pts": 3 },
            { "pos": 4, "team": { "name": "Panama", "code": "PAN" }, "played": 3, "won": 0, "drawn": 0, "lost": 3, "goals_for": 2, "goals_against": 11, "pts": 0 }
          ]
        }
      ]
    }
  ];

  var modalParentElm = document.getElementsByClassName('modal-parent')[0];
  var modalElm = document.getElementsByClassName('modal')[0];
  var mainElm = document.getElementsByClassName('main')[0];

  function openModal() {
    modalParentElm.style.display = 'flex';
  }

  function closeModal() {
    modalParentElm.style.display = 'none';
    var modalBody = document.getElementsByClassName('modal-body')[0];
    modalBody.innerHTML = ''; // Clear previous content
  }

  function clickedGroup(gName) {
    openModal();
    var thisData = data[0].groups.find(group => group.name === gName);

    var modalBody = document.getElementsByClassName('modal-body')[0];
    var table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Position</th>
        <th>Team</th>
        <th>Code</th>
        <th>Played</th>
        <th>Won</th>
        <th>Drawn</th>
        <th>Lost</th>
        <th>Goals For</th>
        <th>Goals Against</th>
        <th>Points</th>
      </tr>
    `;

    thisData.standings.forEach(team => {
      var row = document.createElement('tr');
      row.innerHTML = `
        <td>${team.pos}</td>
        <td>${team.team.name}</td>
        <td>${team.team.code}</td>
        <td>${team.played}</td>
        <td>${team.won}</td>
        <td>${team.drawn}</td>
        <td>${team.lost}</td>
        <td>${team.goals_for}</td>
        <td>${team.goals_against}</td>
        <td>${team.pts}</td>
      `;
      table.appendChild(row);
    });

    modalBody.appendChild(table);
  }

  data[0].groups.forEach(group => {
    var groupDiv = document.createElement('div');
    groupDiv.className = 'groupDiv';
    groupDiv.innerText = group.name;
    groupDiv.onclick = () => clickedGroup(group.name);
    mainElm.appendChild(groupDiv);
  });