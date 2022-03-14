let Url='https://script.google.com/macros/s/AKfycbzrRfrQwesEbCKXMWTeFg1K78RdoZMq4EAJW6I9Z4ipaReNK_yH_YOScumrFPic10rm9Q/exec'

let form=document.forms['google-sheet']
form.addEventListener('submit',(e)=>{
    e.preventDefault();
fetch(Url,{method:"POST",body:new FormData(form)}).then(res=>alert('thanks')).catch(err=>alert(err.message))})