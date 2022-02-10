// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 


//  Fetch data from randomUser website

const randomUserLoad=()=>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res=>res.json())
    .then(data=>randomUserDisplay(data.results))
}
randomUserLoad()

// display user details

const randomUserDisplay=data=>{
    const userDetail=document.getElementById('user-detail')
    data.forEach(info=>{
        console.log(info)
        const div=document.createElement('div')
        div.innerHTML=`
        
        <div class="col">
        <div class="card">
          <img src="${info.picture.large}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${info.name.title} ${info.name.first} ${info.name.last} </h5>
            <p class="card-text">Email:${info.email}</p>
            <p class="card-text">Gender:${info.gender}</p>
            <p class="card-text">Location:${info.location.city},${info.location.state},${info.location.country}</p>
          </div>
        </div>
      </div>
        
        `
        userDetail.appendChild(div)

    })
}