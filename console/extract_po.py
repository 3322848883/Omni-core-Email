import re
import json

en_po = r"d:\BaiduNetdiskDownload\notifuse-main\console\src\i18n\locales\en.po"
zh_po = r"d:\BaiduNetdiskDownload\notifuse-main\console\src\i18n\locales\zh.po"

with open(en_po, 'r', encoding='utf-8') as f:
    en_content = f.read()

with open(zh_po, 'r', encoding='utf-8') as f:
    zh_content = f.read()

# Parse en.po to get all msgid-msgstr pairs
en_entries = {}
current_msgid = None
in_msgid = False
in_msgstr = False

for line in en_content.split('\n'):
    line = line.rstrip('\r')
    if line.startswith('msgid '):
        current_msgid = line[6:].strip().strip('"')
        in_msgid = True
        in_msgstr = False
    elif line.startswith('msgstr ') and current_msgid is not None:
        msgstr = line[7:].strip().strip('"')
        if current_msgid and msgstr:
            en_entries[current_msgid] = msgstr
        in_msgid = False
        in_msgstr = True
    elif line.startswith('"') and in_msgid:
        current_msgid += line.strip().strip('"')
    elif line.startswith('"') and in_msgstr:
        pass

# Parse zh.po to get existing translations
zh_entries = {}
current_msgid = None
in_msgid = False
in_msgstr = False

for line in zh_content.split('\n'):
    line = line.rstrip('\r')
    if line.startswith('msgid '):
        current_msgid = line[6:].strip().strip('"')
        in_msgid = True
        in_msgstr = False
    elif line.startswith('msgstr ') and current_msgid is not None:
        msgstr = line[7:].strip().strip('"')
        if current_msgid:
            zh_entries[current_msgid] = msgstr
        in_msgid = False
        in_msgstr = True
    elif line.startswith('"') and in_msgid:
        current_msgid += line.strip().strip('"')
    elif line.startswith('"') and in_msgstr:
        pass

# Find untranslated entries
untranslated = []
translated = []

for msgid, en_str in en_entries.items():
    if msgid in zh_entries and zh_entries[msgid] and zh_entries[msgid] != en_str:
        translated.append({'msgid': msgid, 'en': en_str, 'zh': zh_entries[msgid]})
    else:
        untranslated.append({'msgid': msgid, 'en': en_str, 'zh': zh_entries.get(msgid, '')})

print(f"Total en entries: {len(en_entries)}")
print(f"Total zh translated entries: {len(translated)}")
print(f"Untranslated entries: {len(untranslated)}")

# Save untranslated list
with open(r'd:\BaiduNetdiskDownload\notifuse-main\console\untranslated_list.json', 'w', encoding='utf-8') as f:
    json.dump({'untranslated': untranslated, 'translated': translated[:100]}, f, ensure_ascii=False, indent=2)

print("\nUntranslated entries saved to untranslated_list.json")
print("\nFirst 30 untranslated entries:")
for i, entry in enumerate(untranslated[:30]):
    print(f"{i+1}. msgid: \"{entry['msgid']}\"")
