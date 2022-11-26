const div = document.getElementById('mainDiv')
const btn = document.getElementById('btn')


async function ShowBlog(){
    const blogs = await fetch('http://localhost:8000/blogs')
    // console.log(blogs)
    return blogs.json();
}

var blogData;

async function fetchBlogs() {
    blogData = await ShowBlog();
     console.log(blogData)
    displayfeed();
}

fetchBlogs();


const displayfeed = ()=>{
const n = blogData.length;
let card = "";
    for(let i = 0 ;i < n; i++){
        // console.log(blogData[i]);
        let newdiv = document.createElement("div")
        newdiv.setAttribute("id",`show${i}`);
        card = ` <div class="card-body container border border-primary">
        <h5 class="card-title">${blogData[i].title}</h5>
        <p class="card-text">${blogData[i].description}</p>
        
        <button id='delete' class="btn btn-danger"> Delete Blog</button>
        <button id="Update" class="btn btn-primary"> Update Blog</button>
        </div><br><br>`;
        // div.innerHTML(card)
        newdiv.innerHTML = card
         div.append(newdiv);

         let show = document.getElementById(`show${i}`)
         show.addEventListener('click',()=>{
            let data;
            let fullBlog = document.createElement('div')
            data = `<div class="container border border-primary"><p>id : ${blogData[i]._id}</p>
            <p>content : ${blogData[i].content}</p>
            <p>title : ${blogData[i].title}</p>
            <p>createdAt : ${blogData[i].createdAt}</p>
            <p>createdBy : ${blogData[i].createdBy}</p>
            <p>description : ${blogData[i].description}</p>
            </div><br><br>`
            fullBlog.innerHTML = data;
            div.prepend(fullBlog)
             // console.log(blogData[i])
            //  console.log(i)
         })

        let removeB = document.getElementById('delete')
        removeB.addEventListener('click',()=>{
            console.log('Delete is click')
        })


        let updateD = document.getElementById('Update')
        updateD.addEventListener('click',()=>{
            console.log('update is click')
        })

    }
}