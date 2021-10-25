let suggestions = [
    "Facebook",
    "Instagram",
    "Ice cream",
    "India",
    "Incredible",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
]

const inputShow = document.querySelector(".search-input")
const inputBox = inputShow.querySelector("input")
const suggestionBox = document.querySelector(".autocom-box")
const subIcon = document.querySelector(".icon")
let linkTag = inputShow.querySelector("a")

inputBox.onkeyup = () => {
    let webLink;
    let userEnteredVal = inputBox.value;
    let suggArray = [];
    if(userEnteredVal){
        subIcon.onclick = () =>{
            webLink = `https://www.google.com/search?q=${userEnteredVal}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        suggArray = suggestions.filter((data) =>{
            return data.toLocaleLowerCase().startsWith(userEnteredVal.toLocaleLowerCase());
        });
        suggArray = suggArray.map((data) =>{
            return data ='<li>'+ data + '</li>'
        });
        // console.log(suggArray);
        inputShow.classList.add("active");
        showSuggestions(suggArray);
        let allList = document.querySelectorAll("li");
        for(i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick", "select(this)")
        }
    
    }else{
        inputShow.classList.remove("active")

    }
    
}

function select(element){
    let userEnteredVal = inputBox.value;
    let userSelected = element.textContent;
    inputBox.value = userSelected;
    subIcon.onclick = () =>{
        webLink = `https://www.google.com/search?q=${userSelected}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
        listData = "";
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue + '</li>'

    }else{
        listData = list.join(' ');
    }
    suggestionBox.innerHTML = listData;

}
