document.addEventListener('DOMContentLoaded', () => {
    const url = 'assets/data.json';
    let retrieved;
    //fetch json data
        fetch(url)
        .then(response => response.json())
        .then(data => retrieved = data)
        .catch(err => {console.log(`error: ${err}`)});


    // Active the selected filter
    let filterDashboard = document.querySelectorAll('.filter-item');

    function filterSelected() {
        //remove the active state of filter item
        filterDashboard.forEach(element => element.classList.remove('filter-active'));
        //This access the current selected element
        this.classList.add('filter-active');
        
        let filterKey = this.text.toLowerCase();
        console.log(filterKey)
    }

    filterDashboard.forEach(element => {
        element.addEventListener('click', filterSelected);
    })

    updateDashboard();
    function updateDashboard() {
        let criteria = 'weekly';

    }
})