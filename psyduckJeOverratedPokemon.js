const kraliciCudlik = document.getElementById('kraliciCudlik')
const kraliciObrazek = document.getElementById('kraliciObrazek')
const kraliciInput = document.getElementById('kraliciInput')
const kraliciInputSubmit = document.getElementById('kraliciInputSubmit')
const kociciCudlik = document.getElementById('kociciCudlik')
const kociciObrazek = document.getElementById('kociciObrazek')
const kociciInput = document.getElementById('kociciInput')
const kociciInputSubmit = document.getElementById('kociciInputSubmit')

const kraliciObrazky = [
    'https://i.pinimg.com/474x/17/f1/71/17f171be9d53ddd15757809c850e7bc6.jpg',
    'https://i.pinimg.com/474x/f4/9c/56/f49c56101fd4303b502a5a36e958f874.jpg',
    'https://i.pinimg.com/474x/f1/57/58/f15758b794dccab11d8101e0c80265c5.jpg',
    'https://i.pinimg.com/736x/d1/01/79/d101794dff8e1774d2a206ed4e72a644.jpg',
    'https://i.pinimg.com/474x/81/83/0d/81830d27f956a659ae82bd50a45c1afa.jpg',
    'https://i.pinimg.com/474x/45/be/a8/45bea8a3bd7fcec3ebe8cbecca438ac0.jpg',
    'https://i.pinimg.com/474x/11/c6/26/11c6269d5296ef404f5e9ab8f8324b35.jpg',
    'https://i.pinimg.com/474x/58/9c/4a/589c4a36d3c8516aa3996176e0058982.jpg',
    'https://i.pinimg.com/474x/82/0d/73/820d737031a0172747999b98a0b2ff32.jpg',
    'https://i.pinimg.com/736x/44/40/91/4440910958b00c6414692135dca12e02.jpg',
    'https://i.pinimg.com/474x/fb/78/41/fb7841f0e719349305d680991d96cbc5.jpg',
    'https://i.pinimg.com/474x/18/81/f4/1881f42462636867e955bf9c5689efc8.jpg',
    'https://i.pinimg.com/474x/46/00/31/46003125558eb3a06eb98fa7e592ec91.jpg',
    'https://i.pinimg.com/474x/3f/08/7b/3f087b05b16e9f2a2ca3fad1de0624f9.jpg',
    'https://i.pinimg.com/474x/e6/92/9f/e6929f091332481bee4854c2064615f5.jpg'
];
const kociciObrazky = [
    'https://i.pinimg.com/474x/2e/c1/eb/2ec1ebab8e569af274eaa835f91d0e72.jpg',
    'https://i.pinimg.com/474x/26/c7/35/26c7355fe46f62d84579857c6f8c4ea5.jpg',
    'https://i.pinimg.com/474x/2a/b2/7c/2ab27cc8faa343de2f99f23270914800.jpg',
    'https://i.pinimg.com/474x/e4/80/53/e480539900f77026a596232e9a4c6fe6.jpg',
    'https://i.pinimg.com/474x/af/f0/1c/aff01cea24b478bec034cf412406dbe5.jpg',
    'https://i.pinimg.com/474x/16/8b/05/168b058bf98a23459b3aa9b82c94c039.jpg',
    'https://i.pinimg.com/474x/46/67/58/466758dba42e2faa832a86160675ae47.jpg',
    'https://i.pinimg.com/474x/51/df/d0/51dfd06e2e6992fd127107a0b699be14.jpg',
    'https://i.pinimg.com/474x/04/e8/07/04e807f66a140ac3beb29b0689974f41.jpg',
    'https://i.pinimg.com/474x/7c/48/ad/7c48addaa248ca48a1b76a424a4ff29a.jpg',
    'https://i.pinimg.com/474x/7d/cc/cb/7dcccb31541da10d7fd0266c3d9b5d85.jpg',
    'https://i.pinimg.com/474x/28/e7/05/28e70539f7005822bb6c4500aeb94d24.jpg',
    'https://i.pinimg.com/474x/14/40/26/1440260542f3e84ba3bc4e35d69bd1ba.jpg',
    'https://i.pinimg.com/474x/df/58/5b/df585b482c5639fa25627e4247a864cb.jpg',
    'https://i.pinimg.com/474x/d9/84/d2/d984d261f7febbb26bc2384db9f8f0cf.jpg',
    'https://i.pinimg.com/474x/15/eb/85/15eb85a0dd6106062172ee61c468f659.jpg'
]
kraliciCudlik.addEventListener('click', () => {
    const nahodnyObrazek = Math.floor(Math.random() * kraliciObrazky.length);
    kraliciObrazek.src = kraliciObrazky[nahodnyObrazek];
    console.log(`Králíček číslo ${nahodnyObrazek - 1}`)
});
kraliciInputSubmit.addEventListener('click', () => {
    const input = parseInt(kraliciInput.value)
    kraliciObrazek.src = kraliciObrazky[input - 1];
    console.log(`Králíček číslo ${input - 1}`)
})
kociciCudlik.addEventListener('click', () => {
    const nahodnyObrazek = Math.floor(Math.random() * kociciObrazky.length);
    kociciObrazek.src = kociciObrazky[nahodnyObrazek];
    console.log(`Kočička číslo ${nahodnyObrazek}`)
});
kociciInputSubmit.addEventListener('click', () => {
    const input = parseInt(kociciInput.value)
    kociciObrazek.src = kociciObrazky[input - 1];
    console.log(`Kočička číslo ${input - 1}`)
})