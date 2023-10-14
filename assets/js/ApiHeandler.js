
const base = 'https://docs.google.com/spreadsheets/d/1kYIyK5tqivC6awmTX-4XQjRGOWSEpC4yO_oPEq1-TIk/gviz/tq?';
const output = document.querySelector('.output');
// const query = encodeURIComponent('Select A,B,C where C > 3 limit 20');
// const url = base + '&tq=' + query;
    fetch(base)
    .then(res => res.text())
    .then(rep =>{
        const data = JSON.parse(rep.substr(47).slice(0,-2));
        const row = document.createElement('tr');
        output.append(row);
        data.table.cols.forEach((heading)=>{
            const cell = document.createElement('td');
            cell.textContent = heading.label;
            row.append(cell);
        })
        data.table.rows.forEach((main)=>{
            const container = document.createElement('tr');
            output.append(container);
            main.c.forEach((ele)=>{
                const cell = document.createElement('td');
                cell.textContent = ele.v;
                container.append(cell);
            })
        })
    })