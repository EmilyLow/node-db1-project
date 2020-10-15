const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
//?? I'm unclear when we need to use server.use(routerName). Only if we have more than one relevant file?
//?? Basically, when we are setting the server via express and when we are using said server ect. 
//?? Also confused if routers are only required if there is a non-server file