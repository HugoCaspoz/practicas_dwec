let pkgm = prompt('Indica Precio por kilo de manzanas');
    pkgm = Number(pkgm);

let cmanza = prompt('Cantidad de manzanas');
    cmanza = Number(cmanza);

let pkgn = prompt('Precio kg naranjas');
    pkgn = Number(pkgn);

let cnar = prompt('Cantidad de naranjas');
    cnar = Number(cnar);

let pkgp = prompt('Precio kg Plátanos');
    pkgp = Number(pkgp);

let cpla = prompt('Cantidad de plátanos');
    cpla = Number(cpla);

let kilos = cmanza+cnar+cpla;
let euros = pkgm*cmanza + pkgn*cnar + pkgp*cpla;
console.log(`Has comprado un total de ${kilos} kilos de fruta y te ha costado ${euros} euros.`);
