import os
import re

os.makedirs('css', exist_ok=True)
os.makedirs('js', exist_ok=True)
os.makedirs('data', exist_ok=True)

if os.path.exists('menu.json'):
    os.rename('menu.json', 'data/menu.json')

with open('index.html', 'r') as f:
    content = f.read()

# Extract CSS
css_match = re.search(r'<style>\n?(.*?)\n?</style>', content, re.DOTALL)
if css_match:
    with open('css/style.css', 'w') as f:
        f.write(css_match.group(1).strip() + '\n')
    content = content[:css_match.start()] + '<link rel="stylesheet" href="css/style.css">' + content[css_match.end():]

# Extract JS
js_match = re.search(r'<script>\n?(.*?)\n?</script>', content, re.DOTALL)
if js_match:
    js_code = js_match.group(1).strip() + '\n'
    # Update fetch path in JS
    js_code = js_code.replace('fetch("menu.json")', 'fetch("data/menu.json")')
    with open('js/app.js', 'w') as f:
        f.write(js_code)
    content = content[:js_match.start()] + '<script src="js/app.js"></script>' + content[js_match.end():]

with open('index.html', 'w') as f:
    f.write(content)

print("Split completed successfully.")
