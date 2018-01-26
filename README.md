# Angular reproduction demo

To reproduce the issue described in https://github.com/psykolm22/angular-google-place/issues/29#issuecomment-360884843:

1. Clone repo

2. `npm i`

3. `npm start`

4. Open `dist/my-lib.metadata.json` file.

5. You will see that the metadata for `LibDirective` is not correct

```
"LibDirective":{"__symbolic":"reference","name":"LibDirective"}
```
It should be

```
"LibDirective":{"__symbolic":"class","decorators":[{"__symbolic":"call","expression":{"__symbolic":"reference","module":"@angular/core","name":"Directive","line":2,"character":1},"arguments":[{"selector":"[myDir]"}]}],"members":{}}
```
