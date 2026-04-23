"""Chroma key a green-screen image to transparent PNG with despill."""
import sys
from PIL import Image


def chroma_key(input_path: str, output_path: str) -> None:
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            gr = g - r
            gb = g - b
            if gr > 40 and gb > 40 and g > 90:
                strength = min(gr, gb)
                alpha = max(0, 255 - strength * 4)
                if alpha == 0:
                    pixels[x, y] = (0, 0, 0, 0)
                else:
                    cap = (r + b) // 2
                    new_g = min(g, cap + 10)
                    pixels[x, y] = (r, new_g, b, alpha)
            else:
                cap = max(r, b) + 15
                if g > cap:
                    pixels[x, y] = (r, cap, b, a)

    img.save(output_path, "PNG")


if __name__ == "__main__":
    chroma_key(sys.argv[1], sys.argv[2])
    print(f"wrote {sys.argv[2]}")
