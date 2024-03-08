const blogpostId = document.querySelector('input[name="blogpost-id"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(comment);

    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'post',
            body: JSON.stringify({
                comment: comment,
                blogpostId: blogpostId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
} 

if(document.querySelector('.comment-form') !=null) {  
    document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
}