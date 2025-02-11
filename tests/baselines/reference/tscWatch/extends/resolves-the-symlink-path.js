currentDirectory:: /users/user/projects/myproject useCaseSensitiveFileNames: false
Input::
//// [/users/user/projects/myconfigs/node_modules/@something/tsconfig-node/tsconfig.json]
{
  "extends": "@something/tsconfig-base/tsconfig.json",
  "compilerOptions": {
    "removeComments": true
  }
}

//// [/users/user/projects/myconfigs/node_modules/@something/tsconfig-base/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  }
}

//// [/users/user/projects/myproject/src/index.ts]
// some comment
export const x = 10;


//// [/users/user/projects/myproject/src/tsconfig.json]
{
  "extends": "@something/tsconfig-node/tsconfig.json"
}

//// [/users/user/projects/myproject/node_modules/@something/tsconfig-node] symlink(/users/user/projects/myconfigs/node_modules/@something/tsconfig-node)
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js -w -p src --extendedDiagnostics
Output::
[[90m12:00:43 AM[0m] Starting compilation in watch mode...

Current directory: /users/user/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /users/user/projects/myproject/src/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/users/user/projects/myproject/src/index.ts"]
  options: {"composite":true,"removeComments":true,"watch":true,"project":"/users/user/projects/myproject/src","extendedDiagnostics":true,"configFilePath":"/users/user/projects/myproject/src/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /users/user/projects/myproject/src/index.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/myproject/src/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/myproject/src/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/myproject/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules/@types 1 undefined Type roots
[[90m12:00:50 AM[0m] Found 0 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/myproject/src 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/myproject/src 1 undefined Wild card directory
FileWatcher:: Added:: WatchInfo: /users/user/projects/myconfigs/node_modules/@something/tsconfig-node/tsconfig.json 2000 undefined Extended config file
FileWatcher:: Added:: WatchInfo: /users/user/projects/myconfigs/node_modules/@something/tsconfig-base/tsconfig.json 2000 undefined Extended config file


Program root files: [
  "/users/user/projects/myproject/src/index.ts"
]
Program options: {
  "composite": true,
  "removeComments": true,
  "watch": true,
  "project": "/users/user/projects/myproject/src",
  "extendedDiagnostics": true,
  "configFilePath": "/users/user/projects/myproject/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/user/projects/myproject/src/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/user/projects/myproject/src/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/users/user/projects/myproject/src/index.ts (computed .d.ts during emit)

PolledWatches::
/users/user/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/users/user/projects/myproject/src/node_modules/@types: *new*
  {"pollingInterval":500}
/users/user/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/users/user/projects/myconfigs/node_modules/@something/tsconfig-base/tsconfig.json: *new*
  {}
/users/user/projects/myconfigs/node_modules/@something/tsconfig-node/tsconfig.json: *new*
  {}
/users/user/projects/myproject/src/index.ts: *new*
  {}
/users/user/projects/myproject/src/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/users/user/projects/myproject/src: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/users/user/projects/myproject/src/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/users/user/projects/myproject/src/index.d.ts]
export declare const x = 10;


//// [/users/user/projects/myproject/src/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"6873164248-// some comment\nexport const x = 10;\n","signature":"-6821242887-export declare const x = 10;\n"}],"root":[2],"options":{"composite":true,"removeComments":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/users/user/projects/myproject/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "6873164248-// some comment\nexport const x = 10;\n",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "6873164248-// some comment\nexport const x = 10;\n",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "root": [
      [
        2,
        "./index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "removeComments": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 811
}

