"""Create a static deployment directory; no frontend dependencies required."""
from pathlib import Path
import shutil
root = Path(__file__).resolve().parent.parent
output = root / 'dist'
output.mkdir(exist_ok=True)
for name in ('index.html', 'LICENSE', 'og-image.png'):
    shutil.copy2(root / name, output / name)
shutil.copytree(root / 'src', output / 'src', dirs_exist_ok=True)
print(f'Static site built at {output}')
