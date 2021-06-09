// addEventListener("fetch", (event) => {
//   event.respondWith(
//     new Response("Hello world!", {
//       status: 200,
//       headers: {
//         server: "denosr",
//         "content-type": "text/plain",
//       },
//     }),
//   );
// });


self.addEventListener("fetch", (event) => {
  console.log(event)
  event.respondWith(fetch('http://google.com'))
});
