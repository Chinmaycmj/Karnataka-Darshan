import os

files_to_check = [
    "src/data/stays.ts",
    "src/data/transportRoutes.ts",
    "src/data/destinations.ts",
    "src/data/districts.ts",
    "src/data/packages.ts",
    "src/data/translations.ts",
    "src/data/types.ts"
]

for filepath in files_to_check:
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r", encoding="utf-8-sig") as f:
        content = f.read()

    # If it contains literal string '\n' at top or bottom (e.g. "import { ... }\n\n")
    if "\\n" in content:
        # Check if line 1 or last line has it
        lines = content.splitlines(keepends=True)
        fixed_lines = []
        for line in lines:
            if "\\n" in line and ("import" in line or "export" in line or "];" in line):
                # Replace literal \n with real newline
                line = line.replace("\\n", "\n")
            fixed_lines.append(line)
        new_content = "".join(fixed_lines)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed literal \\n in {filepath}")
    else:
        print(f"No literal \\n in {filepath}")
