function openDetail(imageSrc, description) {
    const detailWindow = window.open('detail.html', '_blank');
    detailWindow.onload = function() {
        detailWindow.document.getElementById('detail-image').src = imageSrc;
        detailWindow.document.getElementById('detail-description').innerText = description;
    };
}

function buyItem() {
    alert('Item added to cart!');
}
