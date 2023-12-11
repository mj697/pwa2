const array = [
    {
        id: 1, text: "پیچ را سفت ببندید"
    },
    {
        id: 2, text: "فیوز را عوض کنید"
    },
    {
        id: 3, text: "به ریاست اطلاع دهید"
    }
]

function log() {
    const inp = document.getElementById('input').value
    //console.log(inp);
    const selected = array.filter(item => item.id == inp)
    //console.log();
    if (selected.length === 0) {
        document.getElementById('results').innerText = 'موردی یافت نشد'
        return
    }
    document.getElementById('results').innerText = selected[0].text
}

