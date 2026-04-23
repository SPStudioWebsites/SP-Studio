"""Find bounds of the transparent screen HOLE inside the iPad frame."""
from PIL import Image

img = Image.open("public/images/ipad-frame.png").convert("RGBA")
w, h = img.size
pixels = img.load()

device_rows = []
for y in range(h):
    for x in range(w):
        _, _, _, a = pixels[x, y]
        if a > 200:
            device_rows.append(y)
            break

device_cols = []
for x in range(w):
    for y in range(h):
        _, _, _, a = pixels[x, y]
        if a > 200:
            device_cols.append(x)
            break

dev_top = min(device_rows)
dev_bot = max(device_rows)
dev_left = min(device_cols)
dev_right = max(device_cols)

cx = (dev_left + dev_right) // 2
cy = (dev_top + dev_bot) // 2

screen_left = cx
while screen_left > 0 and pixels[screen_left, cy][3] < 50:
    screen_left -= 1
screen_left += 1

screen_right = cx
while screen_right < w - 1 and pixels[screen_right, cy][3] < 50:
    screen_right += 1
screen_right -= 1

screen_top = cy
while screen_top > 0 and pixels[cx, screen_top][3] < 50:
    screen_top -= 1
screen_top += 1

screen_bottom = cy
while screen_bottom < h - 1 and pixels[cx, screen_bottom][3] < 50:
    screen_bottom += 1
screen_bottom -= 1

print(f"image: {w}x{h}")
print(f"device bounds: left={dev_left}, right={dev_right}, top={dev_top}, bottom={dev_bot}")
print(f"device size: {dev_right - dev_left}x{dev_bot - dev_top}")
print(f"screen bounds: left={screen_left}, right={screen_right}, top={screen_top}, bottom={screen_bottom}")
print(f"screen size: {screen_right - screen_left}x{screen_bottom - screen_top}")
print()
print("as percentage of IMAGE:")
print(f"  screen left %:   {screen_left / w * 100:.2f}")
print(f"  screen top %:    {screen_top / h * 100:.2f}")
print(f"  screen right inset %: {(w - screen_right) / w * 100:.2f}")
print(f"  screen bottom inset %: {(h - screen_bottom) / h * 100:.2f}")
print(f"  screen width %:  {(screen_right - screen_left) / w * 100:.2f}")
print(f"  screen height %: {(screen_bottom - screen_top) / h * 100:.2f}")
