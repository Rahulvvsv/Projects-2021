from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent
print(BASE_DIR)
data = os.listdir(BASE_DIR)
def listToString(s):
	str1 = " "
	for ele in s:
		str1 += ele + " "
	return str1
		
data = listToString(data)
		
print(data)
class Server(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            file_to_open = data
            print("server 2 working")
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open,'utf-8'))


httpd = HTTPServer(('localhost', 8000), Server)
httpd.serve_forever()