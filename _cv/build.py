#!/usr/bin/env python3
"""Print the CV HTML sources to PDF with headless Edge.

Public versions (no phone number, no photo) go to cv/ and are published:
    python _cv/build.py

Application versions stay local (*.pdf in the repo root is git-ignored):
    python _cv/build.py --phone "+49 ..." --photo foto2.jpeg
"""
import argparse
import subprocess
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
SOURCES = {
    "lebenslauf_de.html": "Ben_He_Lebenslauf",
    "cv_en.html": "Ben_He_CV",
}


def print_pdf(html, pdf, tmp):
    subprocess.run(
        [
            EDGE,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--user-data-dir={Path(tmp) / 'edge'}",
            f"--print-to-pdf={pdf}",
            html.as_uri(),
        ],
        check=True,
        timeout=120,
        capture_output=True,
    )
    print("wrote", pdf)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--phone", help="add this number and write a private copy to the repo root")
    parser.add_argument("--photo", help="photo for the private copy, relative to the repo root")
    args = parser.parse_args()

    with tempfile.TemporaryDirectory() as tmp:
        for source, name in SOURCES.items():
            html = HERE / source
            if not args.phone:
                (ROOT / "cv").mkdir(exist_ok=True)
                print_pdf(html, ROOT / "cv" / f"{name}.pdf", tmp)
                continue

            text = html.read_text(encoding="utf-8")
            text = text.replace('href="cv.css"', f'href="{(HERE / "cv.css").as_uri()}"')
            text = text.replace("<!-- private:phone -->", f" · {args.phone}")
            if args.photo:
                photo = (ROOT / args.photo).resolve().as_uri()
                text = text.replace("<!-- private:photo -->", f'<img class="photo" src="{photo}" alt="">')
            private_html = Path(tmp) / source
            private_html.write_text(text, encoding="utf-8")
            print_pdf(private_html, ROOT / f"{name}_privat.pdf", tmp)


if __name__ == "__main__":
    main()
