fetch('data.json')
  .then(res => res.json())
  .then(members => {
    function makeMemberHTML(member) {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');

      const h1 = document.createElement('h1');
      h1.textContent = member.name;

      const p = document.createElement('p');
      p.innerHTML = `To contact ${member.name}:`;

      const linkToEmail = document.createElement('a');
      linkToEmail.setAttribute('href', `mailto:${member.email}`);
      linkToEmail.textContent = 'Click here to send an email';

      const linkToPortfolio = document.createElement('a');
      linkToPortfolio.setAttribute('href', member.portfolio);
      linkToPortfolio.setAttribute('target', '_blank'); 
      linkToPortfolio.textContent = 'Click here to view the portfolio';

      const contactDiv = document.createElement('div');
      contactDiv.classList.add('contact');
      contactDiv.appendChild(linkToEmail);
      contactDiv.appendChild(linkToPortfolio);

      memberDiv.appendChild(h1);
      memberDiv.appendChild(p);
      memberDiv.appendChild(contactDiv);

      return memberDiv;
    }

    const teamMembersDiv = document.getElementById('team-members');
    members.forEach(member => {
      const memberHTML = makeMemberHTML(member);
      teamMembersDiv.appendChild(memberHTML);
    });
  });
