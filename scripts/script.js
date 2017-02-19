const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4) {
        const response = JSON.parse(xhr.responseText);
        const photos = response.photos;
        console.log(photos);
    }
};

const url = '/photos';
xhr.open('GET', url, true);
xhr.send(null);
