//your JS code here. If required.


async function display(){
	const textvalue=document.getElementById("text").value;
const time=document.getElementById("delay").value;
	const outputDiv = document.getElementById('output');
	await new Promise((resolve)=>{
		setTimeout(()=>{
			resolve()
		},time)
	})
	outputDiv.textContent=textvalue;
}
document.getElementById('btn').addEventListener('click', display);

//console.log(textvalue)
