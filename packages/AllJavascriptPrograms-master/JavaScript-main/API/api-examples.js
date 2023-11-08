fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => {
            htmlTable = `<table border='1' cellspacing='0' bgcolor='aquamarine'>
            <tr>
                <th>Post ID</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>`;

            data.forEach(rowData => {
                htmlTable += `<tr>
                <td>${rowData.postId}</td>
                <td>${rowData.id}</td>
                <td>${rowData.name}</td>
                <td>${rowData.email}</td>
                <td>${rowData.body}</td>
            </tr>`;
            });

            htmlTable += `</table>`;

            document.getElementById('table-container').innerHTML=htmlTable;
            
        })