
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
import os
import requests
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent
print(BASE_DIR)

data = os.listdir(BASE_DIR)
print(data)


data2 = requests.get("http://localhost:8000")
data2 = data2.text
data2 = data2.split(" ")





print(data)
def listToString(s):
	str1 = " "
	for ele in s:
		str1 += ele + " "
	return str1

file1 = "files in server1 directory are:"
file2 = "files in server2 directory2 are:"
data2 = listToString(data2)
data = listToString(data)

final_data = file1 + data + "\n" +file2+data2


class Server(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            file_to_open = final_data
            print("working")
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open,'utf-8'))


httpd = HTTPServer(('localhost', 8080), Server)
httpd.serve_forever()