const gallery = document.getElementById('gallery');
const avatar = document.querySelector('.avatar');
const name = document.querySelector('.name');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const friends = document.getElementById('friends');

const button = document.querySelector('button');
const input = document.querySelector('input');
const replies = document.querySelector('.replies');

button.addEventListener('click', addReply);
input.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        addReply();
    }
});

function addReply() {
    const text = input.value.trim();

    if (!text.length) {
        return;
    }
    const reply = document.createElement('div');
    reply.classList.add('reply');
    reply.innerHTML = `<p>${text}</p>`;
    replies.appendChild(reply);
    input.value = null;
}

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.status == 200 && xhr.readyState == 4) {
        const response = JSON.parse(xhr.responseText);
        const photos = response.photos;
        photos.forEach((photo) => {
            const div = document.createElement('div');
            const img = document.createElement('img');

            div.classList.add('photo');
            img.src = photo.url;

            div.appendChild(img);
            gallery.appendChild(div);
        });

        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                const response = JSON.parse(xhr.responseText);
                const profile = response.results[0];
                avatar.src = profile.picture.large;
                name.textContent = `${profile.name.first} ${profile.name.last}`;
                phone.textContent = profile.cell;
                email.textContent = profile.email;

                xhr = new XMLHttpRequest();
                xhr.onreadystatechange = () => {
                    if (xhr.status == 200 && xhr.readyState == 4) {
                        const response = JSON.parse(xhr.responseText);
                        const friendList = response.results;
                        friendList.forEach((friend) => {
                            const div = document.createElement('div');
                            const img = document.createElement('img');
                            div.classList.add('friend');
                            img.src = friend.picture.large;
                            div.appendChild(img);
                            friends.appendChild(div);
                        });
                    }
                };
                xhr.open('GET', 'https://randomuser.me/api/?results=15', true);
                xhr.send(null);
            }
        };
        xhr.open('GET', 'https://randomuser.me/api/', true);
        xhr.send(null);
    }
};

const url = '/photos';
xhr.open('GET', url, true);
xhr.send(null);
