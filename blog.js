const postContainer = document.querySelector('.post-container');
let blogData = [
    {
        id: 1,
        post: "place",
        link: "https://www.klook.com/en-MY/blog/best-things-to-do-in-melaka/",
        img : "./img/blog/melaka.jpg",
        category: "Tourist Attractions",
        title: "28 Best Things To Do In Melaka",
        desc: "This charming UNESCO World Heritage city located an easy drive from Kuala Lumpur is rich with history, culture, colonial buildings, ancient landmarks...",
        profileimg: "./img/people/jin.jpg",
        author: "Kim Seok Jin",
    },
    {
        id: 2,
        post: "eat",
        link: "https://www.klook.com/en-MY/blog/penang-hill-restaurants/",
        img : "./img/blog/penang.jpg",
        category: "Food & Dining",
        title: "Penang Hill Food Guide: Restaurants & Cafes",
        desc: "Set 821m above the capital city of Penang, Penang Hill is a must-visit in Penang! Also affectionately known as Bukit Bendera by the locals, Penang Hill has a long history...",
        profileimg: "./img/people/lsk.jpg",
        author: "Lee Sung-kyung",
    },
    {
        id: 3,
        post: "hotel",
        link: "https://www.klook.com/en-MY/blog/best-hotels-in-cameron-highlands/",
        img : "./img/blog/cameron.jpg",
        category: "Accommodation",
        title: "Best Accomodations In Cameron Highlands",
        desc: "Dotted with dense forests and rolling tea plantations, is one of Malaysia's most popular getaway destinations - locals and tourists flock here to escape the humidity...",
        profileimg: "./img/people/v.jpg",
        author: "Kim Tae-Hyung",
    },
    {
        id:4,
        post: "eat",
        link: "https://www.klook.com/en-MY/blog/hipster-cafe-2019-penang/",
        img : "./img/blog/cafe.jpg",
        category: "Food & Dining",
        title: "18 New & Iconic Penang Cafes 2021",
        desc: "If you thought cafe-hopping is so last year, think again. Penang isn’t just for its mouth-watering street eats – this Malaysian food paradise hides a buzzing cafe scene...",
        profileimg: "./img/people/rose.jpg",
        author: "Rose",
    },
    {
        id: 5,
        post: "place",
        link: "https://www.klook.com/en-MY/blog/day-trips-selangor-kl/",
        img : "./img/blog/selangor.jpg",
        category: "Tourist Attractions",
        title: "8 Fun Day Trips Within Selangor",
        desc: "Everyone needs a break from the city lights and evening traffic once in a while. Despite the CMCO restrictions, a day trip close to nature isn't actually out of the....",
        profileimg: "./img/people/suga.jpg",
        author: "Min Yoongi",
    },
    {
        id: 6,
        post: "hotel",
        link: "https://www.klook.com/en-MY/blog/best-hotels-penang-george-town/",
        img : "./img/blog/penang2.jpg",
        category: "Accommodation",
        title: "18 Best Penang Hotels 2022",
        desc: "It's hard to get bored of Penang. From mouth-watering street food to heritage buildings and a vibrant old town vibe, the city always feels refreshing...",
        profileimg: "./img/people/iu.jpg",
        author: "Lee Ji-eun",
    },
    {
        id: 7,
        post: "hotel",
        link: "https://www.klook.com/en-MY/blog/best-hotels-in-jb/",
        img : "./img/blog/johor.jpg",
        category: "Accommodation",
        title: "10 Best Hotels In Johor Bahru",
        desc: " Head south to the beautiful city of Johor Bahru, Malaysia for an exciting trip, whether you're visiting Legoland, cafe hopping around city, or simply looking for a fun getaway...",
        profileimg: "./img/people/lsk.jpg",
        author: "Lee Sung-kyung",
    },
    {
        id: 8,
        post: "eat",
        link: "https://www.klook.com/en-MY/blog/best-food-restaurants-ipoh-malaysia/",
        img : "./img/blog/ipoh.jpg",
        category: "Food & Dining",
        title: "23 Best Food to try In Ipoh",
        desc: "Home to the famed Ipoh white coffee, silky tau fu fah, and hearty chicken rice, Ipoh is a proud foodie paradise in Malaysia, with lots of amazing local food",
        profileimg: "./img/people/v.jpg",
        author: "Kim Tae-Hyung",
    },
    {
        id: 9,
        post: "place",
        link: "https://www.klook.com/en-MY/blog/langkawi-tourism-travel-bubble-sop/",
        img : "./img/blog/langkawi.jpg",
        category: "Tourist Attractions",
        title: "Langkawi Travel Bubble SOPs",
        desc: " After over a year of border closures, the Thai government introduced the \"Phuket Sandbox\" scheme, a calculated effort aimed to revive Thailand's tourism...",
        profileimg: "./img/people/v.jpg",
        author: "Min Yoongi",
    },
    {
        id: 10,
        post: "place",
        link: "https://www.thecrazytourist.com/25-best-things-to-do-in-perak-malaysia/",
        img : "./img/blog/perak.jpg",
        category: "Tourist Attractions",
        title: "25 best things to do in Perak Malaysia",
        desc: " Limestone cliffs dominate much of Perak giving rise to rugged landscapes and mysterious cave temples. During British colonial day...",
        profileimg: "./img/people/jin.jpg",
        author: "Kim Seok Jin",
    },
    {
        id: 11,
        post: "eat",
        link: "https://www.klook.com/en-MY/blog/kl-restaurants-special-occasions/",
        img : "./img/blog/kl.jpg",
        category: "Food & Dining",
        title: "24 Best Restaurants In KL For Date Nights & Gatherings",
        desc: " Looking for a spot for a dinner date, to catch up with your long-lost girlfriends, or to celebrate a special occasion? We've compiled a list of restaurants...",
        profileimg: "./img/people/jin.jpg",
        author: "Kim Seok Jin",
    },
    {
        id: 12,
        post: "hotel",
        link: "https://www.klook.com/en-MY/blog/pulau-redang-island-resorts-and-hotels/",
        img : "./img/travel/redang.jpg",
        category: "Accommodation",
        title: "10 Best Resorts & Hotels In Pulau Redang 2022",
        desc: "Soak in all that sun and ocean spray at Pulau Redang, one of the most beautiful islands in Malaysia. A literal paradise located right on our East coastline, it's the perfect spot...",
        profileimg: "./img/people/lsk.jpg",
        author: "Lee Sung-Kyung",
    }
]

function displayMenuItems(blogData){
    let displayMenu = blogData.map(function(item){
      return ` <div class="post-box ${item.post}">
            <a href="${item.link}">
                <img src=${item.img} alt="" class="post-img">
            </a>
            <h2 class="post-category">${item.category}</h2>
            <a href="${item.link}" class="post-title">${item.title}</a>
            <p class="post-description">
                ${item.desc}
            </p>
            <div class="post-profile">
                <img src=${item.profileimg} alt="" class="profile-img">
                <span class="profile-name">${item.author}</span>
            </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    postContainer.innerHTML = displayMenu;
};
displayMenuItems(blogData);

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.post-box').show('1000')
        }
        else{
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')
        }
    });

    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    })
})