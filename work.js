var data = [
  {
    title: "Final Fantasy VII",
    price: "$23.07",
    category: "Action-adventure",
    imgSrc: "https://twinfinite.net/wp-content/uploads/2019/09/final-fantasy-vii-art-Crop.jpg",
  },
  {
    title: "God of war",
    price: "$19.99",
    category: "Action-adventure",
    imgSrc: "./images/action.jpg",
  },
  {
    title: "ASSASSINS CREED BROTHERHOOD",
    price: "$19.99",
    category: "Action-adventure",
    imgSrc: "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw634ad17f/images/large/56c4948088a7e300458b46b6.jpg?sw=341&sh=450&sm=fit",
  },
  {
    title: "FAR CRY 6",
    price: "$99.99",
    category: "Action-adventure",
    imgSrc: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
  },
  {
    title: "The Forest ",
    price: "$21.99",
    category: "Action-adventure",
    imgSrc: "https://image.api.playstation.com/cdn/EP0238/CUSA12398_00/QABZIx8Ubf69EcsYvaiC1Zx0PPON7XvG.png",
  },
  {
    title: "ARK SURVIVAL EVOLVED ",
    price: "$29.99",
    category: "Action-adventure",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2b/ArkSurvivalEvolved.png",
  },
  {
    title: "Horizon Zero Down ",
    price: "$49.99",
    category: "Action-adventure",
    imgSrc: "https://s2.gaming-cdn.com/images/products/6202/orig-fallback-v1/horizon-zero-dawn-complete-edition-pc-game-steam-cover.jpg?v=1651566259",
  },
  {
    title: "Red Dead Redemption 2",
    price: "$59.99",
    category: "Action-adventure",
    imgSrc: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg",
  },
  {
    title: "NBA 2K20",
    price: "$49.99",
    category: "sport games",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81c8G7Ukg6L._SL1500_.jpg",
  },
  {
    title: "fifa 2k21",
    price: "$49.99",
    category: "sport games",
    imgSrc: "https://media.gamestop.com/i/gamestop/11109999/FIFA-21",
  },
  {
    title: "FORZA HORIZON 6",
    price: "$12.95",
    category: "sport games",
    imgSrc: "https://cdnb.artstation.com/p/assets/images/images/016/553/141/large/pietro-donzelli-forza-horizon-6.jpg?1552579114&dl=1",
  },
  {
    title: "ERO TRUCK 2 ",
    price: "$4.99",
    category: "sport games",
    imgSrc: "https://cdn-products.eneba.com/resized-products/V8fK6Td_350x200_1x-0.jpg",
  },
  {
    title: "Dakar desert Rally",
    price: "$39.99",
    category: "sport games",
    imgSrc: "https://s1.gaming-cdn.com/images/products/10224/orig-fallback-v1/dakar-desert-rally-pc-game-steam-cover.jpg?v=1641822709",
  },
  {
    title: "Roler champion 2022 ",
    price: "1.99",
    category: "sport games",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/Roller%20Champions.jpg4",
  },
  {
    title: "Need For Speed Rivals",
    price: "$4.99",
    category: "sport games",
    imgSrc: "https://www.newgamesbox.net/wp-content/uploads/2016/09/Need-For-Speed-Rivals-Download-Free-NFS-Rivals-PC-Game.jpg",
  },
  {
    title: "fifa 2k22",
    price: "$29.99",
    category: "sport games",
    imgSrc: "https://cdn-products.eneba.com/resized-products/MOyMg_5zUJYN6GtvpTgeaPpdhybIgKRFdRQHD1oJqEg_350x200_3x-0.jpeg",
  },
  {
    title: "outlast 2",
    price: "$29.99",
    category: "horor games",
    imgSrc: "https://image.api.playstation.com/cdn/EP4467/CUSA06633_00/8jdfNPVFM9lSN84bPAAIDXfEw2a2BSZW.png",
  },
  {
    title: "Resident evil 7",
    price: "$19.99",
    category: "horor games",
    imgSrc: "https://cdn-products.eneba.com/resized-products/775e29241e8b57f2701c7e042ccbb53d_350x200_1x-0.jpg",
  },
  {
    title: "Resident Evil Village",
    price: "$39.99",
    category: "horor games",
    imgSrc: "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
  },
  {
    title: "phasomophobia",
    price: "$13.99",
    category: "horor games",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/518184_IGDB-285x380.jpg",
  },
  {
    title: "Evil Nun",
    price: "$0.99",
    category: "horor games",
    imgSrc: "https://static.wikia.nocookie.net/evil-nun-the-mobile-game/images/2/2f/Evil_Nun_Broken_Mask_Cover.jpg/revision/latest?cb=20210329164926",
  },
  {
    title: "Martha is Dead",
    price: "$29.99",
    category: "horor games",
    imgSrc: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_MarthaIsDead_LKA_S2_1200x1600-85e4e64ad99f730c8246b618d08384fe",
  },
  {
    title: "Rust",
    price: "$39.99",
    category: "horor games",
    imgSrc: "https://image.api.playstation.com/vulcan/ap/rnd/202103/1609/iXyUOZpAfq34g4CGsgUb9VEc.png",
  },
  {
    title: "Littel nightmars 2",
    price: "$9.89",
    category: "horor games",
    imgSrc: "https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFtNDd4aXpZTEwuX1NMMTUwMF8uanBn.jpg",
  },
  {
    title: "Apex legends",
    price: "$1.99",
    category: "shooters",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg"
  },
  {
    title: "valorant",
    price: "$1.99",
    category: "shooters",
    imgSrc: "https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg",
  },
  {
    title: "rainbow six siege ",
    price: "$9.99",
    category: "shooters",
    imgSrc: "https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-portrait-1200x1600-1200x1600-8ecd88137e14-1200x1600-05e68a0aed3dc068b9b4186997b97317.jpeg",
  },
  {
    title: "player unknown battelground",
    price: "$29,99",
    category: "shooters",
    imgSrc: "https://s1.gaming-cdn.com/images/products/1995/orig-fallback-v1/playerunknowns-battlegrounds-pc-game-steam-cover.jpg?v=1641890100",
  },
  {
    title: "Dota 2",
    price: "$9.99",
    category: "shooters",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/29595-272x380.jpg",
  },
  {
    title: "Call of duty Warzone",
    price: "$1.99",
    category: "shooters",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/dd/Call_of_Duty_Warzone_cover.jpg",
  },
  {
    title: "cs go",
    price: "$1.99",
    category: "shooters",
    imgSrc: "https://i.pinimg.com/564x/38/b6/60/38b66019c8a277684db08af1a1294382.jpg",
  },
  {
    title: "Fortnite",
    price: "$1.99",
    category: "shooters",
    imgSrc: "https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
  },
];

var Cart =[];



function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
$(".list").click(function () {
  var btn = $(this).attr("buttonof");
  if (btn === "all") {
    $("data").show("1000");
  } else {
    $("data")
      .not("." + btn)
      .hide("1000");
  }
});
$(".list").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$("#buy").on("click",function(){
  alert("thank you for your purchase ")
})
var myEach = function (array) {
  each(array, function (e) {
    var format = $(`<div class="grid-item">
      <div class="flip-card">
      <div class="card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <img
          src=${e.imgSrc}
          alt="${e.title} ">
          </div>
          <div class="flip-card-back">
          <h1>${e.title}</h1>
          <p class="price">${e.price}</p>
          <p></p>
          <button class="cart">Add to Cart</button>
      
          </div>
        </div>
      </div>
      </div>
      </div>`);
    $("#container").append(format);
  });
  $('.cart').on("click",function(e){
    var price =$(e.target).siblings();
    Cart.push(parseInt(price[1].innerHTML.slice(1))+1)
    $('#prices').append($('<div class="cartItem"><p>'+price[1].innerHTML+'</p>'))
    var total = Cart.reduce(function(a,b){return a+b},0)
    $("#total").text("total: $"+ total)
    
  })
};
myEach(data);

$("#shooters").click(function () {
  $(".grid-item").remove();
  var filtred = [];
  filtred = filter(data, function (e, i) {
    return e.category === "shooters";
  });
  myEach(filtred);
});
$("#simulation_and_sports").click(function () {
  $(".grid-item").remove();
  var filtred = [];
  filtred = filter(data, function (e, i) {
    return e.category === "sport games";
  });
  myEach(filtred);
});
$("#action_adventure").click(function () {
  $(".grid-item").remove();
  var filtred = [];
  filtred = filter(data, function (e, i) {
    return e.category === "Action-adventure";
  });
  myEach(filtred);
});
$("#survivor-and-horor").click(function () {
  $(".grid-item").remove();
  var filtred = [];
  filtred = filter(data, function (e, i) {
    return e.category === "horor games";
  });
  myEach(filtred);
});
$("#all").click(function () {
  $(".grid-item").remove();
  var filtred = [];
  filtred = filter(data, function (e, i) {
    return true;
  });
  myEach(filtred);
});

$("#toggleDialog").on("click",function(){
  $( function() {
    $( "#dialog" ).dialog();
  } );
})
