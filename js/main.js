document.addEventListener('DOMContentLoaded', function () {
    fetch('js/interns.js')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            let topThree = ""
            let array = []
            // data.points.sort(function (a, b) { return b - a })
            // console.log(data.points)
            function compare(a, b) {
                if (a.points > b.points) {
                    return -1;
                }
                if (a.points < b.points) {
                    return 1;
                }
                return 0;
            }
            let i = 1;
            data.sort(compare)
            console.log(data)
            data.forEach(function (intern) {
                
                console.log(data[i])
                html += `<tr>
                  <th scope="row">${ i++}</th>
                  <td>${ intern.firstName} ${intern.lastName}</td>
                  <td>${ intern.slackusername}</td>
                  <td>${intern.email}</td>
                  <td>${intern.track}</td>
                  <td>${intern.points}</td>
                  
                </tr>`
            });
            
            document.querySelector('#list-container').innerHTML = html;

            let three = data.slice(0, 3).map(i => {
                console.log(i)
                topThree += `
                    <div class="col-md-4">
              <div class="tops">
                <div class="track">
                  <p>${ i.track }</p>
                </div>
                <div class="persona">
                  <div class="image-container text-center">
                    <img src="./img/prof-pic.svg" alt="">
                  </div>
                  <div class="details text-center">
                    <h3 class="">${ i.firstName} ${ i.lastName }</h3>
                    <p class="points">${ i.points }</p>
                    <button class="btn btn-primary">Share</button>
                  </div>
                </div>
               
              </div>
            </div>
                `
            });

            document.querySelector('#top-three-container').innerHTML = topThree;
                console.log(three)
            

            
    })
})