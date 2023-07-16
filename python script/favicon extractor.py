import requests
import json
from bs4 import BeautifulSoup

with open('url.json') as f:
    sites = json.load(f)

for site in sites:
    url = site['url']
    response = requests.get(url)  # HTML content
    soup = BeautifulSoup(response.content, 'html.parser')
    icon_link = soup.find('link', rel='icon')
    if icon_link is None:
        icon_link = soup.find('link', rel='shortcut icon')
    if icon_link is not None:
        icon_url = icon_link['href']  # Extract favicon URL
        print("Favicon pour {}: {}".format(icon_url, icon_link))