// console.log('fgsdg')
const loadBill = async(limit) => {
    try{
        const res = await fetch(`https://forbes400.onrender.com/api/forbes400?limit=${limit}`);
        const data = await res.json();
        display(data)
        // console.log(data);
    }
    catch(error) {
        console.log(error);
    }
};

function display(data) {
    const topBill = document.getElementById('top-bill');
    topBill.textContent = '';
    data.forEach(d => {
        console.log(d.squareImage);
        const div = document.createElement('div');
        topBill.innerHTML += `
        <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="${d.squareImage}" alt="Album"/></figure>
        <div class="card-body">
        <h2 class="card-title">${d.name}</h2>
        <h2 class="title-rank">Rank: ${d.rank}</h2>
        
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
        </div>
        </div>
        </div>
        `;
        // topBill.appendChild(div);
    });
    loading(false);
};

document.getElementById('show-all').addEventListener('click', function() {
    loadBill(100)
})

document.getElementById('display').addEventListener('click', function() {
    const btn = document.getElementById('display');
    btn.classList.add('hidden')
    console.log('fdbfd');
    loadBill(10);
    loading(true);
})

const loading = load => {
    const loaderDisplay = document.getElementById('loader');
    if(load) {
        loaderDisplay.classList.remove('hidden')
    }
    else {
        loaderDisplay.classList.add('hidden');
    }
}