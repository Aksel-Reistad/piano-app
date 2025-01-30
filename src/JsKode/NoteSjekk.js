import '../App.css';

function NoteSjekk(){
    const tekst = document.querySelector('[contenteditable="true"]').innerText;

const sjekk = () => {

    if (tekst === tilfeldigNote){
        alert("riktg");
        }
        else{
            alert("feil");

        }
    }


}
return(
<div>
<button on onClick={sjekk}>test Svar</button>

<div contentEditable="true">
    <p>her svare du </p>

</div>

</div>
);



}
export default NoteSjekk;