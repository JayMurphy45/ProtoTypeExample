// This file contains various URLs that should be flagged by the scanner

const testUrl1 = "https://bit.ly/malicious-link"; // Shortened URL (should be flagged)
const testUrl2 = "https://ngrok.io/suspicious"; // Tunneling service (should be flagged)
const testUrl3 = "https://oastify.com/attack"; // Exfiltration (should be flagged)
const testUrl4 = "https://pastebin.com/raw/data"; // Data leak (should be flagged)
const testUrl5 = "https://ipinfo.io/json"; // IP intel (should be flagged)
const testUrl6 = "https://192.168.1.1/admin"; // Private IP (should NOT be flagged)
const testUrl7 = "https://localhost:3000"; // Localhost (should NOT be flagged)
const testUrl8 = "https://example.xyz/phishing"; // Suspicious TLD (should be flagged)
const testUrl9 = "https://172.16.0.1/test"; // Private IP range (should NOT be flagged)
const testUrl10 = "https://[2001:db8::ff00:42:8329]"; // IPv6 (should be flagged)
