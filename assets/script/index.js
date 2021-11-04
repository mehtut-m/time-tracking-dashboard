
document.addEventListener('DOMContentLoaded', () => {
    console.log("START");

    function updateDashboard(criteria) {
        
        let cardItem = document.querySelectorAll('.card-content')

        const url = 'assets/data.json';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                let activityName = element.title.replace(/ /g, "")
                .toLowerCase();
                //update the current 
                let target = document.querySelector(`.${activityName}-card`);
                //Update the current period hours
                target.querySelector('.current-count').textContent = element.timeframes[criteria].current;
                //Update the previus period hours
                target.querySelector('.previous-count').textContent = element.timeframes[criteria].previous;
                //update last period description
                let frequency = criteria === "daily" ? "day" : criteria.replace('ly','');
                target.querySelector('.report-type').textContent = frequency;
            })
        })
        .catch(err => {console.log(`error: ${err}`)});
    }

    function filterSelected() {
        //remove the active state of filter item
        filterDashboard.forEach(element => element.classList.remove('filter-active'));
        //This access the current selected element
        this.classList.add('filter-active');
        
        let filterKey = this.text.toLowerCase();
        //call a function to update the dash board
        updateDashboard(filterKey);
    }

    // Active the selected filter
    let filterDashboard = document.querySelectorAll('.filter-item');

    filterDashboard.forEach(element => {
        
        element.addEventListener('click', filterSelected);
    })

    

})