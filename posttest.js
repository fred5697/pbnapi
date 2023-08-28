fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'This is a test message' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
