const str_1 = 'Ola Mundo';
const str_2 = 'do JavaScript';


console.log(str_1===str_2);
let i = 0;
while (i<1000){
    window.location.reload(true);
    i++;
    console.log(i);

    if (i=1000){
        break;
    }
}