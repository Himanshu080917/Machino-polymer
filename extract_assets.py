import os
from PIL import Image

output_dir = "d:/Machino-polymer/public/images"
icons_dir = "d:/Machino-polymer/public/icons"
source_dir = "d:/Machino-polymer/public/images/Machino Polymers - Plus Factor"

os.makedirs(output_dir, exist_ok=True)
os.makedirs(icons_dir, exist_ok=True)

# 1. Extract 6 Hero Slides from HeroSection.jpg
hero_path = os.path.join(source_dir, "HeroSection.jpg")
if os.path.exists(hero_path):
    img = Image.open(hero_path)
    w, h = img.size
    print(f"HeroSection size: {w}x{h}")
    # 6 slides stacked vertically
    slide_h = h / 6.0
    slide_names = [
        "hero-circular-future.jpg",
        "hero-industry.jpg",
        "hero-material.jpg",
        "hero-engineering.jpg",
        "hero-molecule.jpg",
        "hero-application.jpg"
    ]
    for i, name in enumerate(slide_names):
        top = int(i * slide_h)
        bottom = int((i + 1) * slide_h)
        cropped = img.crop((0, top, w, bottom))
        out_file = os.path.join(output_dir, name)
        cropped.save(out_file, quality=95)
        print(f"Saved {name}: {cropped.size}")

# 2. Extract sections from Home Page.jpg
home_path = os.path.join(source_dir, "Home Page.jpg")
if os.path.exists(home_path):
    home_img = Image.open(home_path)
    hw, hh = home_img.size
    print(f"Home Page size: {hw}x{hh}")

    # Crop Green Earth forest image (roughly y: 22% to 35%, x: 40% to 100%)
    forest_crop = home_img.crop((int(hw * 0.41), int(hh * 0.222), hw, int(hh * 0.354)))
    forest_crop.save(os.path.join(output_dir, "circular-forest.jpg"), quality=95)
    print("Saved circular-forest.jpg")

    # Crop 7 Industries cards from the Industries strip in Home Page
    # The strip is roughly y: 39% to 49%
    strip_top = int(hh * 0.395)
    strip_bottom = int(hh * 0.490)
    col_w = hw / 7.0
    ind_names = [
        "industry-automotive.jpg",
        "industry-electrical.jpg",
        "industry-industrial.jpg",
        "industry-consumer.jpg",
        "industry-appliances.jpg",
        "industry-medical.jpg",
        "industry-packaging.jpg"
    ]
    for idx, iname in enumerate(ind_names):
        c_left = int(idx * col_w)
        c_right = int((idx + 1) * col_w)
        ind_crop = home_img.crop((c_left, strip_top, c_right, strip_bottom))
        ind_crop.save(os.path.join(output_dir, iname), quality=95)
        print(f"Saved {iname}")

    # Crop Manufacturing floor wide banner (roughly y: 57.5% to 62.5%)
    plant_crop = home_img.crop((0, int(hh * 0.575), hw, int(hh * 0.627)))
    plant_crop.save(os.path.join(output_dir, "plant-production-floor.jpg"), quality=95)
    print("Saved plant-production-floor.jpg")

    # Crop Quality Lab Scientist (roughly x: 54% to 96%, y: 64.5% to 70.8%)
    lab_crop = home_img.crop((int(hw * 0.54), int(hh * 0.643), int(hw * 0.96), int(hh * 0.708)))
    lab_crop.save(os.path.join(output_dir, "quality-lab-scientist.jpg"), quality=95)
    print("Saved quality-lab-scientist.jpg")

    # Crop Future Materials CTA background (roughly y: 76.5% to 88.5%)
    cta_crop = home_img.crop((0, int(hh * 0.765), hw, int(hh * 0.885)))
    cta_crop.save(os.path.join(output_dir, "future-materials-cta.jpg"), quality=95)
    print("Saved future-materials-cta.jpg")

# 3. Create SVG logo
logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="12" r="5" fill="#10B981" />
  <circle cx="76" cy="22" r="4.5" fill="#10B981" />
  <circle cx="88" cy="50" r="5" fill="#FF5500" />
  <circle cx="76" cy="78" r="4.5" fill="#FF5500" />
  <circle cx="50" cy="88" r="5" fill="#1E293B" />
  <circle cx="24" cy="78" r="4.5" fill="#1E293B" />
  <circle cx="12" cy="50" r="5" fill="#10B981" />
  <circle cx="24" cy="22" r="4.5" fill="#1E293B" />
  <circle cx="50" cy="50" r="27" fill="#0A0D18" />
  <text x="50" y="56" text-anchor="middle" fill="#FFFFFF" font-size="17" font-weight="900" font-family="'Outfit', sans-serif" letter-spacing="-0.5">MPL</text>
</svg>'''

with open(os.path.join(icons_dir, "logo-mpl.svg"), "w") as f:
    f.write(logo_svg)
print("Saved logo-mpl.svg")
