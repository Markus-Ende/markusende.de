```
created: 2017-10-13T14:28:00.000Z
last modified: 2017-10-13T14:28:00.000Z
short title: Angular Interface Pattern
state: DRAFT
```
# Angular (Service) Interface Pattern for Dependency Injection

* abstract class instead of interface (class name with "I"-Prefix)
* file name: `my.service.interface.ts`
* `MyService implements IMyService`
* aus dem Feature Modul wird nur der IMyService exportiert (`provide: IMyService, useClass: MyService`)
* decorator pattern
