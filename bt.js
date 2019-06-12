// // // // exercise1

// const students = [
//   { name: "Thuong", age: 20, grade: 4, gender: true },
//   { name: "Thuy", age: 20, grade: 2, gender: false },
//   { name: "Ly", age: 20, grade: 7, gender: true },
//   { name: "Huong", age: 30, grade: 9, gender: false }
// ];

// const maleStudent = students
//   .filter(student => student.gender)
//   .map(student => student.name);

// students.filter(s => s.gender);

// let femaleStudents = [];
// students.forEach(s => {
//   if (!s.gender) {
//     femaleStudents.push(s);
//   }
// });
// console.log(femaleStudents);

// // // //exercise 2

// Array.prototype.map = function(projectionFunction) {
//   var results = [];
//   this.forEach(function(itemInArray) {
//     results.push(projectionFunction(itemInArray));
//   });

//   return results;
// };
// console.log(results);

// // // // exercise 3

// var newReleases = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: 4.0,
//     bookmark: []
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: 5.0,
//     bookmark: [{ id: 432534, time: 65876586 }]
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: 4.0,
//     bookmark: []
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: 5.0,
//     bookmark: [{ id: 432534, time: 65876586 }]
//   }
// ];
// videos = [];

// newReleases.forEach(v => {
//   if (v.rating == 5.0) {
//     videos.push(v);
//   }
// });

// console.log(videos);

//exercise 4

//newReleases.filter((v = v.rating == 5.0)).map((v = v.id));

//exercise 5
function a() {
  let movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            id: 70111470,
            title: "Die Hard",
            boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0
          },
          {
            id: 654356453,
            title: "Bad Boys",
            boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0
          }
        ]
      },
      {
        name: "Dramas",
        videos: [
          {
            id: 65432445,
            title: "The Chamber",
            boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0
          },
          {
            id: 675465,
            title: "Fracture",
            boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0
          }
        ]
      }
    ],
    allVideoIdsInMovieLists = [];

  movieLists.forEach(function(movieList) {
    movieList.videos.forEach(function(v) {
      allVideoIdsInMovieLists.push(v.id);
    });
  });

  console.log(allVideoIdsInMovieLists);
}
a();
