
console.log('aaaaaa');
const getData = async (url) => {
const res = await fetch((url),{
    method: "GET",
    headers: { "Accept": "application/json" }
})
const json = await res.json()
return json
}

getData("http://localhost:3000/api/newPost")
.then(posts => {
    console.log(posts[0].Name);
    let div = document.querySelector(".add");
    Object.keys(posts).forEach((i) => {
        let article = document.createElement('article');
    
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
    
        div1.classList.add('form-group');
        div2.classList.add('form-group');

        let h2 = document.createElement('h2');
        h2.innerHTML = posts[i].Name;

        let p1 = document.createElement('p')
        p1.innerHTML = posts[i].Info;
        
        
        div1.appendChild(h2);
        div2.appendChild(p1);
        
        article.appendChild(div1);
        article.appendChild(div2);

        div.appendChild(article);
    });
})
.catch(error => console.log(error.message))

