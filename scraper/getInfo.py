import csv
import requests

S = requests.Session()

URL = "https://en.wikipedia.org/w/api.php"

TITLE = "List_of_districts_of_Seoul"

PARAMS = {
    'action': "parse",
    'page': TITLE,
    'prop': 'wikitext',
    'format': "json"
}


def get_table():
    """ Parse a section of a page, fetch its table data and save it to a CSV file
    """
    res = S.get(url=URL, params=PARAMS)
    data = res.json()
    wikitext = data['parse']['wikitext']['*']
    lines = wikitext.split('|-')
    entries = []

    for line in lines:
        line = line.strip()
        if line.startswith("|"):
            table = line[2:].split('||')
            entry = table[0].split("|")[0].strip("'''[[]]\n"), table[0].split("|")[1].strip("\n")
            entries.append(entry)
            
    file = open("data.csv", "w")
    writer = csv.writer(file)
    writer.writerows(entries)
    file.close()


if __name__ == '__main__':
    get_table()
