gsap.fromTo("#userName", {x: -20, opacity: 0}, {duration: 1, x: 0, opacity: 1});
gsap.fromTo("#userGitPerfil", {x: -20, opacity: 0}, {duration: 1.5, x: 0, opacity: 1});
gsap.fromTo("#description", {x: -20, opacity: 0}, {duration: 1.5, x: 0, opacity: 1});
gsap.fromTo("#socialMediaList li", {y: 20, opacity: 0}, {duration: 2, y: 0, opacity: 1});


const lis = document.querySelectorAll('#socialMediaList li')

for(let li of lis){
    li.onmouseover = e => {
        gsap.to(li,{rotation: 30})
        li.style.boxShadow = '3px 3px 3px #0000009f';
        li.style.zIndex = '4';
    }
    li.onmouseout = e => {
        gsap.to(li,{rotation: 0, scale: 1})
        li.style.boxShadow = 'none';
        li.style.zIndex = '0';
    }
}
