import os
import subprocess

# Direct execution commands
os.system("ls -la")
subprocess.run(["echo", "Hello World"])
eval("print('This is unsafe')")