### Diary
Developed a simple diary application example that allows users to write and delete diary entries. The front-end is implemented using HTML, CSS, and JavaScript, while the back-end is implemented using Node.js and Express.

### To-do
- [ ] Use CSS to beautify it
- [ ] Fix deletion bug about single or double quotes

### Use cURL
Show me the method (e.g. GET, POST, PUT, PATCH, DELETE), Headers, and Request Body (e.g. JSON, Form, File):
```
# Send a diary entry
# iOS Shortcuts: Method: POST; Headers: None;
# Request Body: Form (Key: entry; Value: yourNewDiaryEntry)
curl --request POST --data "entry=yourNewDiaryEntry" http://192.168.10.100:2004/diary

# Display diary entry
curl --silent http://192.168.10.100:2004/diary-data | jq .
```

### Use Docker to modify a diary entry
```
docker exec --interactive --tty diary sh
vi mydiary.json
```
