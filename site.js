
const $=id=>document.getElementById(id);
const menu=$("menuBtn"),links=$("navLinks");if(menu&&links)menu.onclick=()=>links.classList.toggle("open");
const copy=$("copyDonation");if(copy)copy.onclick=async()=>{try{await navigator.clipboard.writeText("76740 97096");$("donateStatus").textContent="Number copied. Thank you for supporting FreePDF Hub!";}catch(e){$("donateStatus").textContent="Copy this number: 76740 97096";}};
const like=$("likeBtn");if(like){let liked=false;like.onclick=()=>{liked=!liked;like.textContent=liked?"♥ Thank you for liking!":"♡ Like this website";like.setAttribute("aria-pressed",String(liked));};}
const share=$("shareBtn");if(share)share.onclick=async()=>{const d={title:"FreePDF Hub",text:"Try FreePDF Hub — free PDF tools for everyone.",url:location.href};try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.text+" "+d.url);$("donateStatus").textContent="Website link copied. Share it with your friends!";}}catch(e){}};
const search=$("toolSearch");if(search)search.oninput=()=>{let q=search.value.toLowerCase();document.querySelectorAll(".toolcard").forEach(c=>c.hidden=!c.innerText.toLowerCase().includes(q));};

// Floating quick actions
const topQuick=$("sideTop"); if(topQuick) topQuick.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
const shareQuick=$("sideShare"); if(shareQuick) shareQuick.onclick=async()=>{const d={title:"FreePDF Hub",text:"Try FreePDF Hub — free PDF tools for everyone.",url:location.href};try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.url);shareQuick.querySelector("small").textContent="Copied";}}catch(e){}};
const likeQuick=$("sideLike"); if(likeQuick) likeQuick.onclick=()=>{const on=likeQuick.getAttribute("aria-pressed")==="true";likeQuick.setAttribute("aria-pressed",String(!on));likeQuick.querySelector("small").textContent=on?"Like":"Liked";likeQuick.style.filter=on?"none":"brightness(1.15)";};
const donateQuick=$("sideDonate"); if(donateQuick) donateQuick.onclick=()=>document.querySelector(".sp-donate,.simple-donate")?.scrollIntoView({behavior:"smooth"});
