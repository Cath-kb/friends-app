const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.responseText);
    }
};

const url = '/hello';
xhr.open('GET', url, true);
xhr.send(null);
