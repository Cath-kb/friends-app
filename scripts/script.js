const gallery = document.getElementById('gallery');

const xhr = new XMLHttpRequest();

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
    }
};

const url = '/photos';
xhr.open('GET', url, true);
xhr.send(null);
