# Example of suspicious links in Python code
malicious_url1 = "https://bit.ly/phishing"
malicious_url2 = "https://ngrok.io/exploit"
safe_url = "https://example.org"  # Should NOT be detected

def get_malware_link():
    return "https://pastebin.com/raw/badscript"

print(f"Watch out for {malicious_url1}")