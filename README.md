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
