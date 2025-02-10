import os
import subprocess

# Direct execution using exec
exec("print('This is a test exec command')")

# Using subprocess to execute OS commands
subprocess.call("ls -la", shell=True)
subprocess.run(["echo", "Hello, World!"])
subprocess.check_output("whoami", shell=True)

# Using os.system to execute a command
os.system("uname -a")

# Using eval with a string that may indicate dynamic execution
eval("print('This is an eval test')")

# Using popen to execute commands
process = os.popen("id")
output = process.read()
process.close()

# Using builtins with exec
__import__('builtins').exec("print('Built-in exec test')")

# Using globals to call eval
globals()['eval']("print('Using globals to eval')")
globals()['\x65\x76\x61\x6c']("print('Hex eval test')")  # 'eval' in hex