const programmimng = {
    couresName: 'programmimng hero',
    money: 5500,
    support: true,
    supportSection: ['sokal: 11am-1.00pm', 'bikal: 4-6.00pm', 'rath: 9-11.00pm'],
    assignment: function(j) {
        // for(let i = 1; i <= j; i++) {
        //     // console.log(i);/
        //     return i;
        // }
        return j * 12
    }
}
// console.log(programmimng.assignment(6));
// console.log(programmimng.supportSection);

function dispaly(data) {

    const pHero = document.getElementById('p-hero');
    data.supportSection.forEach(li => {
        console.log(li);
        const div = document.createElement('div');
        div.innerHTML =`
        <p>${li}</p>
        `;
        pHero.appendChild(div);
    });
    const pFun = document.getElementById('p-fun');
    pFun.innerHTML = `
        <p>${data.assignment(9)}</p>

    `;
}
dispaly(programmimng);