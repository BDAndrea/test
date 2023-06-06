"use strict";

console.log("V 01");
console.log("V 02");
console.log("V 03");

// git config --global user.email "example@example.com"
// treba biti isto kao github name (preporuka je, ne mora)
// git config --global user.name "UserName"
// git add . - za dodavanje
// git log - moze vidjeti samo prijasnje verzije (ako se prebacimo ize verzije 3 u verziju 2, onda on vidi samo verziju 2 i one prije)
// ako opet zelimo vidjeti sve verzije, i te poslije pisemo git log --all
// git log --all --graph
// git commit -m "Verzija 1"
// git commit -m "Verzija 1"--amend ispravlja postojecu verziju
// git checkout nekibrojevicommita
// git checkout  ?? master
// q (ili ctr + q) omogucava izlazak i pisanje u terminal
// git checkout broj . - za povlacenje filea - pr script iz 1. commitea
// .. ako stavimo . znaci da zelimo povuci sve, ako stavimo script.js onda povlacimo samo to
// git remote
// git remote -v
// git remote origin urlGithub
// git config --global credential.username "userName"
// git push origin/master - push na github
// skracena verzija git push origin master --set-upstream, nakon sto to upisem od tada je dovoljno pisati samo git push
// branching - grananje radimo kada nas vise radi na istom kodu, onda svatko napravi svoj branch pa se to kasnije doda u master
// fix radimo na branchu, odvojeno od glavnog koda, prije nego to pushamo u glavni kod radi se push request kako bi svi sudionici projekta pregledali kod prije nego se napravi marge
// git branch grana1 - izrada grane
// git checkout grana1 prebacivanje u tu granu
