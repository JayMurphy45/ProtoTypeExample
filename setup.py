import pyperclip

# Copy text to the clipboard
text_to_copy = "Hello, this text is copied to the clipboard!"
pyperclip.copy(text_to_copy)
print("Text copied to clipboard.")

# Paste text from the clipboard
pasted_text = pyperclip.paste()
print("Text pasted from clipboard:", pasted_text)
