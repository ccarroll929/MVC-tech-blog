const delButton = document.querySelector('#del-blogpost-btn');
const blogpostId = document.querySelector('input[name="blogpost-id"]').value;

const deleteHandler = async () => {
    const response = await fetch(`/api/blogpost/${blogpostId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

if(delButton!=null){
    delButton.addEventListener('click', deleteHandler);
}