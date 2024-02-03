let objects = [];
let objectIdCounter = 1;

function addObject(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (name && imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newObject = { id: objectIdCounter++, name, image: e.target.result };
            objects.push(newObject);
            updateObjectsList();
            closeForm('addForm');
        };
        reader.readAsDataURL(imageFile);
    }
}

function editObject(event) {
    event.preventDefault();

}