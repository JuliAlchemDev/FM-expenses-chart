const barChart = document.querySelector('.expenses-chart__bars');

const getData = async () => {
    const res = await fetch('./data.json');
    const data  = await res.json();
    return data
}

const init = async () => {
    const spendingInfo = await getData();
    const amounts = spendingInfo.map(spending => spending.amount);
    const maxAmount = Math.max(...amounts);
    barChart.innerHTML = '';
    
    spendingInfo.forEach(({day, amount}) => {
        
        const li = document.createElement('li');
        li.classList.add('expenses-chart__bar-day');

        const tooltip = document.createElement('span')
        tooltip.classList.add('expenses-chart__bar-tooltip');
        tooltip.textContent = `$${amount}`
       

        const bar = document.createElement('span');
        bar.classList.add('expenses-chart__bar');
        bar.style.height = `${amount * 0.17}rem`;

        if(amount === maxAmount){
            bar.classList.add('max-amount')
            // bar.style.backgroundColor = 'var(--primary-blue-300)'
            
        }

        li.append(tooltip);
        li.append(bar)
        li.append(day);
        barChart.appendChild(li);
    });
    
} 

init();