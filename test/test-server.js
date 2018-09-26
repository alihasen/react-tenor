import http from "http";

export const results = [
  { id: 1, media: [{ tinygif: { url: "https://via.placeholder.com/10x10" } }] },
  { id: 2, media: [{ tinygif: { url: "https://via.placeholder.com/10x10" } }] },
  { id: 3, media: [{ tinygif: { url: "https://via.placeholder.com/10x10" } }] },
  { id: 4, media: [{ tinygif: { url: "https://via.placeholder.com/10x10" } }] },
  { id: 5, media: [{ tinygif: { url: "https://via.placeholder.com/10x10" } }] }
];

const withTestServer = (port, callback) => {
  const server = http.createServer();

  server.on("request", (request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ results }));
    response.end();
  });

  server.listen(port);
  return callback().then(() => server.close());
};

export default withTestServer;
