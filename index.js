let toggleLink = document.querySelector('.share_image');
var content = document.querySelector('.social');
let anotherContent = document.querySelector('.profile');
let profileSection = document.querySelector('.profile_section')

toggleLink.addEventListener('click', (e) => {
 event.preventDefault();
 anotherContent.style.display = 'none';
 
 if (content.style.display === 'none') {
  content.style.display = 'flex';
  profileSection.style.backgroundColor = "#48556A"
  anotherContent.style.display = 'none';
 } else {
  content.style.display = 'none';
  anotherContent.style.display = 'flex';
  profileSection.style.backgroundColor = "white"
 }
});
