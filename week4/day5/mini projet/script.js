const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

const container = document.getElementById('container');

robots.forEach(element => {
    const robot = document.createElement('div');
    const imag = document.createElement('img');
    const names = document.createElement('h1');
    const usernames = document.createElement('p');
    const mail = document.createElement('p');

    imag.src = element.image;
    imag.alt = element.name;
    names.textContent = element.name;
    usernames.textContent = element.username;
    mail.textContent = element.email;

    robot.appendChild(imag);
    robot.appendChild(names);
    robot.appendChild(usernames);
    robot.appendChild(mail);
    container.appendChild(robot);

});


const output = document.getElementById('search');

output.addEventListener('input', function (event) {

  const filteredRobots = robots.filter(robo => 
    robo.username.toLowerCase().includes(output.value.toLowerCase()) ||
    robo.name.toLowerCase().includes(output.value.toLowerCase()) ||
    robo.email.toLowerCase().includes(output.value.toLowerCase())
  );
    container.innerHTML = '';
    filteredRobots.forEach(element => {
        const robot = document.createElement('div');
    const imag = document.createElement('img');
    const names = document.createElement('h1');
    const usernames = document.createElement('p');
    const mail = document.createElement('p');

    imag.src = element.image;
    imag.alt = element.name;
    names.textContent = element.name;
    usernames.textContent = element.username;
    mail.textContent = element.email;

    robot.appendChild(imag);
    robot.appendChild(names);
    robot.appendChild(usernames);
    robot.appendChild(mail);
    container.appendChild(robot);
    });
})