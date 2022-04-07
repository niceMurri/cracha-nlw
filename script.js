const socialLinks = {
    github: 'niceMurri',
    youtube: 'niceMurri',
    facebook: 'niceMurri',
    twitter: 'niceMurri',
    instagram: 'niceMurri'
}

function changeSocialMediaLinks(obj,json){
    userName.innerText = json.login;
    description.innerText = json.bio;
    avatarGit.src = json.avatar_url;
    
    
    userGitPerfil.setAttribute('href',json.html_url);
    userLogin.textContent = json.login;


    for(let li of socialMediaList.children){

        li.children[0].href += obj[li.id];

    }
}

function getGitHubProfileInfo(user){
    const url = `https://api.github.com/users/${user.github}`;
    
    fetch(url)
    .then( response => response.json())
    .then( JSON => changeSocialMediaLinks(socialLinks,JSON))
    .catch( e => 'ACONTECEU ALGO INESPERADO!\nERROR:' + e);
}


getGitHubProfileInfo(socialLinks);
