### Diary
Developed a simple diary application example that allows users to write and delete diary entries. The front-end is implemented using HTML, CSS, and JavaScript, while the back-end is implemented using Node.js and Express.

### To-do
- [ ] Use CSS to beautify it
- [ ] Fix deletion bug about single or double quotes

### Use curl to send a diary entry
```
curl --request POST --data "entry=yourNewDiaryEntry" http://192.168.10.100:2004/diary
```

### Use Docker to modify a diary entry
```
docker exec --interactive --tty diary sh
vi mydiary.json
```
