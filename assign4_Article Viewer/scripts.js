const apiResponse = {
    "data": [
        {
            "id": "1",
            "title": "Learning JSON",
            "body": "JSON helps us send and receive data.",
            "created": "2023-01-10",
            "author": {
                "name": "John Doe",
                "age": 45
            }
        },
        {   
            "id": "2",
            "title": "Understanding the DOM",
            "body": "The DOM lets us change the page using JavaScript.",
            "created": "2023-05-22",
            "author": {
                "name": "Mary Smith",
                "age": 33
            }
        },
        {
            "id": "3",
            "title": "JavaScript Essentials",
            "body": "Loops, variables, functions - all important!",
            "created": "2024-01-01",
            "author": {
                "name": "John Doe",
                "age": 45
            }
        }
    ]   
};

const container = document.getElementById("articles");

for (let i = 0; i < apiResponse.data.length; i++) {
    const article = apiResponse.data[i];
    const articleDiv = document.createElement("div");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;
    articleDiv.appendChild(titleElement);

    const bodyElement = document.createElement("p");
    bodyElement.textContent = article.body;
    articleDiv.appendChild(bodyElement);

    const dateElement = document.createElement("p");
    dateElement.textContent = "Created: " + article.created;
    articleDiv.appendChild(dateElement);


    const authorElement = document.createElement("p");
    authorElement.textContent = "Author: " + article.author.name;
    articleDiv.appendChild(authorElement);  

    const authorAge = document.createElement("p");
    authorAge.textContent = "Age: " + article.author.age;
    articleDiv.appendChild(authorAge);

    container.appendChild(articleDiv);
}