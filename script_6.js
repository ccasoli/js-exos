const genetic_code ={
    UCU: 'Sérine',
    UCC: 'Sérine',
    UCA: 'Sérine',
    UCG: 'Sérine',
    AGU: 'Sérine',
    AGC: 'Sérine',
    CCU: 'Proline',
    CCC: 'Proline',
    CCA: 'Proline',
    CCG: 'Proline',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UUU: 'Phénylalanine',
    UUC: 'Phénylalanine',
    CGU: 'Arginine',
    CGC: 'Arginine',
    CGA: 'Arginine',
    CGG: 'Arginine',
    AGA: 'Arginine',
    AGG: 'Arginine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
  };

function readArn(arn) {
aminoAcids = []
for(let i = 0; i < arn.length; i+=3) {
    aminoAcid = genetic_code[arn.slice(i, i+3)];
    aminoAcids.push(aminoAcid);
};
console.log(aminoAcids.join("-"));
};
