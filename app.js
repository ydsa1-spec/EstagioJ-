const vagas = [

{
id:1,
empresa:"Google",
area:"Tecnologia",
cidade:"Remoto",
salario:"R$1800"
},

{
id:2,
empresa:"Nubank",
area:"Design",
cidade:"Remoto",
salario:"R$1600"
},

{
id:3,
empresa:"Banco do Brasil",
area:"Administração",
cidade:"Maceió",
salario:"R$1200"
}

]

function cadastrar(){

let nome=document.getElementById("nome").value
let email=document.getElementById("email").value
let senha=document.getElementById("senha").value

localStorage.setItem("usuario",JSON.stringify({nome,email,senha}))

alert("Cadastro realizado!")

location.href="index.html"

}

function login(){

let email=document.getElementById("email").value
let senha=document.getElementById("senha").value

let usuario=JSON.parse(localStorage.getItem("usuario"))

if(usuario && usuario.email==email && usuario.senha==senha){

location.href="vagas.html"

}else{

alert("Email ou senha incorretos")

}

}

function carregarVagas(){

let area=document.getElementById("lista")

if(!area) return

vagas.forEach(v=>{

area.innerHTML+=`

<div class="card">

<h3>${v.empresa}</h3>

<p>${v.area}</p>

<p>${v.cidade}</p>

<p>${v.salario}</p>

<button onclick="candidatar(${v.id})">
Candidatar
</button>

</div>

`

})

}

function candidatar(id){

let lista=JSON.parse(localStorage.getItem("candidaturas"))||[]

lista.push(id)

localStorage.setItem("candidaturas",JSON.stringify(lista))

alert("Candidatura enviada!")

}

function mostrarCandidaturas(){

let area=document.getElementById("candidaturas")

if(!area) return

let lista=JSON.parse(localStorage.getItem("candidaturas"))||[]

lista.forEach(id=>{

let vaga=vagas.find(v=>v.id==id)

area.innerHTML+=`

<div class="card">

<h3>${vaga.empresa}</h3>

<p>${vaga.area}</p>

<p>${vaga.cidade}</p>

</div>

`

})

}
