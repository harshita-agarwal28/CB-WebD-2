/*axios.get("https://www.boredapi.com/api/activity")
.then((res) =>{
    console.log("RESPONSE!",res.data.activity);
})
.catch((e)=>{
    console.log("ERROR!",e)
})*/
const form=document.querySelector('#api');
form.addEventListener('submit',async function(e){
    e.preventDefault(form);
    const res= await axios.get("https://www.boredapi.com/api/activity");
    console.log(res.data.activity);
    const newli=document.createElement('LI');
    newli.append(res.data.activity);
    form.append(newli);
})