let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    
    let colleges = await getUniversity(country);
    show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";

    for(college of colleges){
        console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getUniversity(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e){
        console.log("error - ", e);
        return [];
    }
}