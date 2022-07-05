let n = parseInt(gets(0));
let p = 0;

//TODO: Complete os espaços em branco com uma possível solução para o desafio
        
while(parseInt(gets()) != -1) {
  if( n == 0 ) {
    print (0);
} else {
    print (--n);
    n = parseInt(gets());
    }
}